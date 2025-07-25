import type { Metadata } from "next"
import Preloader from "@/components/preloader"
import IntroSection from "@/components/intro-section"
import AboutSection from "@/components/about-section"
import ContributeSection from "@/components/contribute-section"
import MemberSection from "@/components/member-section"
import GallerySection from "@/components/gallery-section"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Hope Foundation NGO - Transforming Lives, Building Communities",
  description:
    "Join Hope Foundation NGO in our mission to create positive change. We work towards education, healthcare, and community development. Donate, volunteer, or become a member today.",
  keywords:
    "NGO, charity, donation, volunteer, community development, education, healthcare, social work, Hope Foundation",
  authors: [{ name: "Hope Foundation NGO" }],
  creator: "Hope Foundation NGO",
  publisher: "Hope Foundation NGO",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hopefoundation.org",
    siteName: "Hope Foundation NGO",
    title: "Hope Foundation NGO - Transforming Lives, Building Communities",
    description:
      "Join Hope Foundation NGO in our mission to create positive change. We work towards education, healthcare, and community development.",
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
    title: "Hope Foundation NGO - Transforming Lives, Building Communities",
    description:
      "Join Hope Foundation NGO in our mission to create positive change. We work towards education, healthcare, and community development.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://hopefoundation.org",
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
