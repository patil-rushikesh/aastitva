import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SeoSchema from "@/components/seo-schema"
import Preloader from "@/components/preloader"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const siteUrl = "https://www.aastitva.org"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aastitva Foundation - Empowering Identity, Embracing Existence",
    template: "%s | Aastitva Foundation",
  },
  description:
    "Aastitva Foundation is a Pune-based nonprofit advancing education, health, and community development. Donate, volunteer, or become a member to create lasting impact.",
  keywords: [
    "NGO",
    "charity",
    "donation",
    "volunteer",
    "community development",
    "education",
    "healthcare",
    "social work",
    "Aastitva Foundation",
    "non-profit",
  ],
  authors: [{ name: "Aastitva Foundation", url: siteUrl }],
  creator: "Aastitva Foundation",
  publisher: "Aastitva Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aastitva Foundation",
    title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
    description:
      "Aastitva Foundation is a Pune-based nonprofit advancing education, health, and community development.",
    images: [
      {
        url: "/main.jpg",
        width: 1200,
        height: 630,
        alt: "Aastitva Foundation community initiatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastitva Foundation - Empowering Identity, Embracing Existence",
    description:
      "Aastitva Foundation is a Pune-based nonprofit advancing education, health, and community development.",
    images: ["/main.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/aastitvaLogo.png",
    apple: "/aastitvaLogo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aastitva Foundation",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EAB308",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <Preloader />
        <Navbar />
        <SeoSchema />
        <div className="page-fade-in">{children}</div>
      </body>
    </html>
  )
}
