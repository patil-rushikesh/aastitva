import type { Metadata } from "next"
import Link from "next/link"
import { Droplet } from "lucide-react"

import IntroSection from "@/components/intro-section"
import AboutSection from "@/components/about-section"
import ContributeSection from "@/components/contribute-section"
import GallerySection from "@/components/gallery-section"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
  description:
    "Aastitva Foundation is a Pune-based nonprofit supporting education, healthcare, and community development. Join us to donate, volunteer, or become a member.",
  keywords:
    "NGO, charity, donation, volunteer, community development, education, healthcare, social work, Aastitva Foundation",
  alternates: {
    canonical: "https://www.aastitva.org",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Sections */}
      <IntroSection />
      <AboutSection />
      <ContributeSection />
      <GallerySection />
      <FooterSection />

      {/* Always-Floating Button
        fixed: Locks it to the browser window, not the page.
        bottom-8 left-1/2 -translate-x-1/2: Perfectly centers it at the bottom.
        z-[9999]: Forces it to hover on top of absolutely everything.
      */}
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <Link
          href="/blood-donation"
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 hover:shadow-red-600/50 transition-all duration-300 ring-4 ring-white/90 w-max"
        >
          <Droplet className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
          <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
            Register for Blood Camp
          </span>
        </Link>
      </div>
    </main>
  )
}