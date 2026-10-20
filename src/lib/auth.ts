import crypto from "crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SESSION_COOKIE_NAME = "golegandom_stats_session";
const SESSION_SECRET =
  process.env.STATS_SESSION_SECRET ||
  process.env.STATS_PASSWORD ||
  "golegandom_super_secure_vault_secret_2026_xyz987!";

const DEFAULT_USERNAME = process.env.STATS_ADMIN_USERNAME || "admin";
const DEFAULT_PASSWORD = process.env.STATS_ADMIN_PASSWORD || "hotelgandom2026";

// Rate limiting in-memory store
interface FailedAttempt {
  count: number;
  lastAttempt: number;
  blockedUntil?: number;
}
const failedAttemptsMap = new Map<string, FailedAttempt>();

/**
 * Constant-time string equality check to prevent timing attacks
 */
export function constantTimeCompare(a: string, b: string): boolean {
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

/**
 * Sign payload using HMAC-SHA256
 */
function signData(data: string): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
}

/**
 * Create a cryptographically signed session token
 */
export function createSessionToken(username: string): string {
  const payload = {
    username,
    iat: Date.now(),
    exp: Date.now() + 8 * 60 * 60 * 1000, // 8 hours valid
    nonce: crypto.randomBytes(16).toString("hex"),
  };
  const jsonStr = JSON.stringify(payload);
  const encodedPayload = Buffer.from(jsonStr).toString("base64url");
  const signature = signData(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

/**
 * Verify a session token
 */
export function verifySessionToken(token: string): { valid: boolean; username?: string } {
  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return { valid: false };

    const expectedSignature = signData(encodedPayload);
    if (!constantTimeCompare(signature, expectedSignature)) {
      return { valid: false };
    }

    const jsonStr = Buffer.from(encodedPayload, "base64url").toString("utf-8");
    const payload = JSON.parse(jsonStr);

    if (Date.now() > payload.exp) {
      return { valid: false };
    }

    return { valid: true, username: payload.username };
  } catch {
    return { valid: false };
  }
}

/**
 * Check if the current incoming request has a valid session cookie
 */
export async function isAuthenticatedSession(req?: NextRequest): Promise<boolean> {
  let token: string | undefined;

  if (req) {
    token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  } else {
    try {
      const cookieStore = await cookies();
      token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    } catch {
      // not in next headers context
    }
  }

  if (!token) return false;
  const result = verifySessionToken(token);
  return result.valid;
}

/**
 * Check Rate Limiting for IP
 */
export function checkRateLimit(ip: string): { blocked: boolean; waitSeconds?: number } {
  const record = failedAttemptsMap.get(ip);
  if (!record) return { blocked: false };

  const now = Date.now();
  if (record.blockedUntil && record.blockedUntil > now) {
    const waitSeconds = Math.ceil((record.blockedUntil - now) / 1000);
    return { blocked: true, waitSeconds };
  }

  // Reset if last attempt was > 15 minutes ago
  if (now - record.lastAttempt > 15 * 60 * 1000) {
    failedAttemptsMap.delete(ip);
    return { blocked: false };
  }

  return { blocked: false };
}

export function recordFailedAttempt(ip: string): { count: number; blocked: boolean } {
  const now = Date.now();
  const record = failedAttemptsMap.get(ip) || { count: 0, lastAttempt: now };
  record.count += 1;
  record.lastAttempt = now;

  if (record.count >= 5) {
    // Block for 5 minutes
    record.blockedUntil = now + 5 * 60 * 1000;
    failedAttemptsMap.set(ip, record);
    return { count: record.count, blocked: true };
  }

  failedAttemptsMap.set(ip, record);
  return { count: record.count, blocked: false };
}

export function clearFailedAttempts(ip: string): void {
  failedAttemptsMap.delete(ip);
}

/**
 * Verify credentials against environment variables or default
 */
export function verifyCredentials(username: string, password: string): boolean {
  const validUsername = constantTimeCompare(username.trim(), DEFAULT_USERNAME.trim());
  const validPassword = constantTimeCompare(password.trim(), DEFAULT_PASSWORD.trim());
  return validUsername && validPassword;
}

/**
 * Generate a visual SVG captcha with noise lines and characters
 */
export function generateCaptcha(): { svg: string; token: string } {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // exclude easily confused chars (0, O, 1, I)
  let text = "";
  for (let i = 0; i < 4; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const width = 160;
  const height = 54;

  // Generate noise curves
  const lines: string[] = [];
  for (let i = 0; i < 4; i++) {
    const x1 = Math.floor(Math.random() * 20);
    const y1 = Math.floor(Math.random() * height);
    const x2 = Math.floor(width - Math.random() * 20);
    const y2 = Math.floor(Math.random() * height);
    const strokeColor = i % 2 === 0 ? "#b45309" : "#1e3a8a";
    lines.push(
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${strokeColor}" stroke-width="1.8" stroke-dasharray="${i % 2 === 0 ? '4,2' : 'none'}" opacity="0.6"/>`
    );
  }

  // Generate character elements with random rotation and positioning
  const charElements: string[] = [];
  const charSpacing = width / 5;
  const colors = ["#172554", "#9a3412", "#0f766e", "#3730a3", "#854d0e"];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const x = Math.floor(charSpacing * (i + 0.8));
    const y = Math.floor(34 + (Math.random() * 8 - 4));
    const rot = Math.floor(Math.random() * 28 - 14);
    const color = colors[i % colors.length];

    charElements.push(
      `<text x="${x}" y="${y}" font-family="monospace, sans-serif" font-size="26" font-weight="900" fill="${color}" transform="rotate(${rot}, ${x}, ${y})" text-anchor="middle" letter-spacing="2">${char}</text>`
    );
  }

  // Noise dots
  const dots: string[] = [];
  for (let i = 0; i < 25; i++) {
    const cx = Math.floor(Math.random() * width);
    const cy = Math.floor(Math.random() * height);
    const r = Math.random() > 0.5 ? 1.5 : 1;
    dots.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#94a3b8" opacity="0.5"/>`);
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background:#fefae0; border-radius:12px; border:1px solid #e2d9c8;">
    <rect width="${width}" height="${height}" fill="#faf6ed" rx="12"/>
    ${dots.join("\n")}
    ${lines.join("\n")}
    ${charElements.join("\n")}
  </svg>`;

  // Create signed captcha token containing hash of answer and expiration (5 minutes)
  const answerHash = crypto
    .createHash("sha256")
    .update(text.toUpperCase())
    .digest("hex");

  const captchaPayload = {
    answerHash,
    exp: Date.now() + 5 * 60 * 1000,
    nonce: crypto.randomBytes(8).toString("hex"),
  };

  const encodedPayload = Buffer.from(JSON.stringify(captchaPayload)).toString("base64url");
  const signature = signData(encodedPayload);
  const token = `${encodedPayload}.${signature}`;

  return { svg, token };
}

/**
 * Verify Captcha submission
 */
export function verifyCaptcha(userInput: string, token: string): boolean {
  try {
    if (!userInput || !token) return false;
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return false;

    const expectedSignature = signData(encodedPayload);
    if (!constantTimeCompare(signature, expectedSignature)) {
      return false;
    }

    const jsonStr = Buffer.from(encodedPayload, "base64url").toString("utf-8");
    const payload = JSON.parse(jsonStr);

    if (Date.now() > payload.exp) {
      return false; // expired
    }

    const userHash = crypto
      .createHash("sha256")
      .update(userInput.trim().toUpperCase())
      .digest("hex");

    return constantTimeCompare(userHash, payload.answerHash);
  } catch {
    return false;
  }
}

export { SESSION_COOKIE_NAME };
