import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hopefoundation.org"),
  title: {
    default: "Hope Foundation NGO - Transforming Lives, Building Communities",
    template: "%s | Hope Foundation NGO",
  },
  description:
    "Join Hope Foundation NGO in our mission to create positive change through education, healthcare, and community development. Donate, volunteer, or become a member today.",
  keywords: [
    "NGO",
    "charity",
    "donation",
    "volunteer",
    "community development",
    "education",
    "healthcare",
    "social work",
    "Hope Foundation",
    "non-profit",
  ],
  authors: [{ name: "Hope Foundation NGO", url: "https://hopefoundation.org" }],
  creator: "Hope Foundation NGO",
  publisher: "Hope Foundation NGO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://hopefoundation.org" />
        <meta name="theme-color" content="#EAB308" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hope Foundation" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
