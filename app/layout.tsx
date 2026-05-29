import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const SITE_URL = 'https://liberators-alliance.org'
const TITLE = 'Liberators Alliance — Building Alliances to Free the Oppressed'
const DESCRIPTION =
  'Liberators Alliance is a Colorado-based nonprofit combating human trafficking through international rescue operations and domestic survivor healing programs.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Liberators Alliance',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Liberators Alliance',
  url: SITE_URL,
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
