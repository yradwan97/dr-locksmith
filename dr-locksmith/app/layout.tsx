import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "24/7 Dr. Locksmith - Expert Emergency Locksmith Services in Greenville, SC",
    template: "%s | 24/7 Dr. Locksmith - Expert Emergency Services",
  },
  description:
    "Professional 24/7 emergency locksmith services in Greenville, South Carolina. Expert diagnosis and solutions for residential, commercial, and automotive locksmith needs. Licensed & insured. Call (864) 203-4390.",
  keywords:
    "locksmith, emergency locksmith, Greenville SC, 24/7 locksmith, residential locksmith, commercial locksmith, automotive locksmith, key replacement, lock repair, Dr Locksmith",
  authors: [{ name: "24/7 Dr. Locksmith" }],
  creator: "24/7 Dr. Locksmith",
  publisher: "24/7 Dr. Locksmith",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://24-7drlocksmith.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "24/7 Dr. Locksmith - Expert Emergency Locksmith Services in Greenville, SC",
    description:
      "Professional 24/7 emergency locksmith services in Greenville, South Carolina. Expert diagnosis and solutions available around the clock.",
    url: "https://24-7drlocksmith.com",
    siteName: "24/7 Dr. Locksmith",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 Dr. Locksmith - Expert Emergency Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Dr. Locksmith - Expert Emergency Locksmith Services",
    description: "Professional locksmith services in Greenville, SC. Expert diagnosis available 24/7 for emergencies.",
    images: ["/og-image.jpg"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "24/7 Dr. Locksmith",
              image: "https://24-7drlocksmith.com/logo.png",
              "@id": "https://24-7drlocksmith.com",
              url: "https://24-7drlocksmith.com",
              telephone: "(864) 203-4390",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1200 Woodruff Rd, Building A - 3",
                addressLocality: "Greenville",
                addressRegion: "SC",
                postalCode: "29607",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.8526,
                longitude: -82.394,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: ["https://www.facebook.com/247drlocksmith", "https://www.twitter.com/247drlocksmith"],
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 34.8526,
                  longitude: -82.394,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Expert Locksmith Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergency Locksmith Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Locksmith Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Locksmith Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automotive Locksmith Services",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
