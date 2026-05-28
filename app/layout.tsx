import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liberators Alliance',
  description: 'Building Alliances to Free the Oppressed',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
