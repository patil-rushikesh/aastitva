import type { Metadata } from "next"
import IntroSection from "@/components/intro-section"
import AboutSection from "@/components/about-section"
import ContributeSection from "@/components/contribute-section"
import MemberSection from "@/components/member-section"
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
    <>
      <main className="min-h-screen bg-white">
        <IntroSection />
        <AboutSection />
        <ContributeSection />
        <MemberSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
