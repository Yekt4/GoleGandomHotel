import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickBookingBar } from "@/components/QuickBookingBar";
import { ArchitecturePhilosophy } from "@/components/ArchitecturePhilosophy";
import { RoomsSection } from "@/components/RoomsSection";
import { GallerySection } from "@/components/GallerySection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans antialiased selection:bg-[#e6f5fe] selection:text-[#0096f7]">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero />

        {/* Quick Booking Inquiry Bar */}
        <QuickBookingBar />

        {/* Architecture & Heritage Philosophy (Samara Style) */}
        <ArchitecturePhilosophy />

        {/* Rooms & Suites Showcase */}
        <RoomsSection />

        {/* Photo-Centric Categorized Gallery */}
        <GallerySection />

        {/* Hotel Amenities */}
        <AmenitiesSection />

        {/* Location & Interactive Map */}
        <LocationSection />

        {/* Direct Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA for Quick Call & WhatsApp */}
      <FloatingCTA />
    </div>
  );
}
