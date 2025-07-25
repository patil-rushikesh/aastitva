import type { Metadata } from "next"
import Preloader from "@/components/preloader"
import IntroSection from "@/components/intro-section"
import AboutSection from "@/components/about-section"
import ContributeSection from "@/components/contribute-section"
import MemberSection from "@/components/member-section"
import GallerySection from "@/components/gallery-section"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
  description:
    "Join Aastitva Foundation in our mission to create positive change. We work towards education, healthcare, and community development. Donate, volunteer, or become a member today.",
  keywords:
    "NGO, charity, donation, volunteer, community development, education, healthcare, social work, Hope Foundation",
  authors: [{ name: "Aastitva Foundation" }],
  creator: "Aastitva Foundation",
  publisher: "Aastitva Foundation",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aastitva.org",
    siteName: "Aastitva Foundation",
    title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
    description:
      "Join Aastitva Foundation in our mission to create positive change. We work towards education, healthcare, and community development.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Hope Foundation NGO Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
    description:
      "Join Aastitva Foundation NGO in our mission to create positive change. We work towards education, healthcare, and community development.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://aastitva.org",
  },
}

export default function HomePage() {
  return (
    <>
      <Preloader />
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
