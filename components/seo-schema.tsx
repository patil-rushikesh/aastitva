const siteUrl = "https://www.aastitva.org"

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Aastitva Foundation",
      url: siteUrl,
      logo: `${siteUrl}/aastitvaLogo.png`,
      description:
        "Aastitva Foundation is a Pune-based nonprofit advancing education, health, and community development.",
      foundingDate: "2017",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411035",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91-77200-01488",
          email: "contact@aastitva.org",
          areaServed: "IN",
        },
      ],
      sameAs: [
        "https://www.facebook.com/socialaastitva",
        "https://x.com/socialaastitva",
        "https://www.instagram.com/socialaastitva",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aastitva Foundation",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Aastitva Foundation - Empowering Identity, Embracing Existence",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
}

export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
