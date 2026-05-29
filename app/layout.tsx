import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const SITE_URL = 'https://liberators-alliance.org'
const TITLE = 'Liberators Alliance — Anti-Trafficking Nonprofit | Fight Human Trafficking'
const DESCRIPTION =
  'Liberators Alliance is a Colorado-based anti-trafficking nonprofit. We rescue victims of human trafficking worldwide and restore survivors through clinically supported healing programs. Donate to fight trafficking today.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'anti-trafficking organization',
    'human trafficking nonprofit',
    'fight human trafficking',
    'donate to end human trafficking',
    'how to help trafficking survivors',
    'trafficking survivor support',
    'anti-trafficking donation',
    'rescue trafficking victims',
    'human trafficking awareness',
    'Colorado nonprofit',
    'how to help stop trafficking',
    'organizations fighting trafficking',
    'support trafficking victims',
    'trauma healing nonprofit',
    'child trafficking prevention',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Liberators Alliance',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: 'Liberators Alliance — Anti-Trafficking Nonprofit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/logo.png`],
    site: '@LiberatorsAlliance',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

// ── Schema.org JSON-LD bundle ──────────────────────────────────────────────
const structuredData = [
  // 1. NGO / Organization
  {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'Organization'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Liberators Alliance',
    alternateName: 'Liberators Alliance Anti-Trafficking Nonprofit',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Liberators Alliance is a Colorado-based nonprofit dedicated to ending human trafficking through international rescue operations and domestic survivor healing and restoration programs.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Colorado, United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'general inquiry',
      email: 'contactus@liberators-alliance.org',
    },
    sameAs: [
      'https://www.facebook.com/LiberatorsAlliance',
      'https://twitter.com/LiberatorsAllia',
      'https://www.instagram.com/liberatorsalliance',
      'https://www.linkedin.com/company/liberators-alliance',
      'https://www.guidestar.org',
      'https://www.charitynavigator.org',
    ],
    knowsAbout: [
      'Human trafficking',
      'Anti-trafficking operations',
      'Survivor healing and restoration',
      'Trauma-informed care',
      'Child protection',
      'Equestrian therapy',
    ],
  },
  // 2. WebSite (enables Google Sitelinks Search)
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Liberators Alliance',
    description:
      'Anti-trafficking nonprofit providing rescue operations and survivor healing programs.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
  // 3. FAQPage — targets real donor & awareness search queries
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Liberators Alliance do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liberators Alliance is a Colorado-based nonprofit that fights human trafficking on two fronts: international rescue operations that free victims of trafficking and oppression overseas, and domestic survivor healing programs that provide trauma-informed care and clinical treatment to child survivors of trafficking in the United States.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I donate to fight human trafficking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can donate directly to Liberators Alliance to fund anti-trafficking rescue operations and survivor healing programs. Visit liberators-alliance.org and choose the Domestic Operations program (Saving Arrows) to support survivor healing, or the International Operations program to support global rescue missions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I help trafficking survivors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liberators Alliance runs Saving Arrows, a structured day program providing equestrian therapy, trauma-informed care, and clinical treatment for children under 18 who have survived trafficking and trauma. You can help by donating, volunteering, or partnering with our program in Castle Rock, Colorado.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Liberators Alliance a legitimate nonprofit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Liberators Alliance is a registered Colorado-based nonprofit organization with over five years of operational history combating human trafficking. Our domestic healing program, Saving Arrows, operates on a 40-acre farm in Castle Rock, Colorado, serving child survivors of trafficking and trauma.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does Liberators Alliance operate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liberators Alliance operates internationally through rescue and anti-trafficking missions, and domestically through the Saving Arrows healing program based on a 40-acre farm in Castle Rock, Colorado. The organization is establishing its national headquarters in Denver, Colorado.',
        },
      },
      {
        '@type': 'Question',
        name: 'What anti-trafficking organizations can I donate to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liberators Alliance is a trusted anti-trafficking nonprofit accepting donations to fund both international rescue operations and domestic survivor restoration. Your donation directly supports children rescued from trafficking, providing them with equestrian therapy, clinical mental health treatment, and trauma-informed care.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I help stop human trafficking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can help stop human trafficking by donating to organizations like Liberators Alliance that fund active rescue operations, supporting survivor healing programs, raising awareness, and partnering with our referral and advocacy networks. Every dollar donated helps rescue victims and restore lives.',
        },
      },
    ],
  },
]

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
