import { NextRequest, NextResponse } from "next/server";
import {
  generateCaptcha,
  verifyCaptcha,
  verifyCredentials,
  createSessionToken,
  isAuthenticatedSession,
  checkRateLimit,
  recordFailedAttempt,
  clearFailedAttempts,
  SESSION_COOKIE_NAME,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "127.0.0.1";
}

export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "captcha") {
    const { svg, token } = generateCaptcha();
    return NextResponse.json({ success: true, svg, token });
  }

  if (action === "me") {
    const isAuth = await isAuthenticatedSession(req);
    return NextResponse.json({ authenticated: isAuth });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const body = await req.json();
    const action = body.action;

    if (action === "logout") {
      const response = NextResponse.json({ success: true, message: "خروج موفقیت‌آمیز بود." });
      response.cookies.set(SESSION_COOKIE_NAME, "", {
        path: "/",
        httpOnly: true,
        maxAge: 0,
        sameSite: "strict",
      });
      return response;
    }

    if (action === "login") {
      // 1. Rate Limiting Check
      const rateLimit = checkRateLimit(ip);
      if (rateLimit.blocked) {
        return NextResponse.json(
          {
            success: false,
            error: `به دلیل ۵ بار تلاش ناموفق، دسترسی شما موقتاً مسدود شده است. لطفاً ${rateLimit.waitSeconds} ثانیه دیگر امتحان کنید.`,
          },
          { status: 429 }
        );
      }

      const { username, password, captchaInput, captchaToken } = body;

      if (!username || !password) {
        return NextResponse.json(
          { success: false, error: "نام کاربری و رمز عبور الزامی است." },
          { status: 400 }
        );
      }

      // 2. Cryptographic Captcha Validation
      const isCaptchaValid = verifyCaptcha(captchaInput, captchaToken);
      if (!isCaptchaValid) {
        recordFailedAttempt(ip);
        return NextResponse.json(
          {
            success: false,
            error: "کد امنیتی (کپچا) نادرست است یا منقضی شده است. تصویر جدید تولید شد.",
          },
          { status: 400 }
        );
      }

      // 3. Constant-Time Credentials Check
      const credentialsMatch = verifyCredentials(username, password);
      if (!credentialsMatch) {
        const attempt = recordFailedAttempt(ip);
        const remaining = 5 - attempt.count;
        const remainingMsg =
          remaining > 0
            ? ` (${remaining} فرصت دیگر تا قفل موقت)`
            : " (دسترسی شما به مدت ۵ دقیقه مسدود شد)";

        return NextResponse.json(
          {
            success: false,
            error: `نام کاربری یا رمز عبور نادرست است.${remainingMsg}`,
          },
          { status: 401 }
        );
      }

      // 4. Clear any previous failed attempts
      clearFailedAttempts(ip);

      // 5. Generate Signed Session Token
      const sessionToken = createSessionToken(username);

      const response = NextResponse.json({
        success: true,
        message: "ورود موفقیت‌آمیز بود.",
      });

      // 6. Set Secure HTTP-Only Cookie
      response.cookies.set(SESSION_COOKIE_NAME, sessionToken, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 8 * 60 * 60, // 8 hours
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
