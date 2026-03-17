import type { Metadata, Viewport } from 'next'
import { Cinzel_Decorative, Crimson_Text, MedievalSharp } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson-text',
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-medieval-sharp',
})

export const metadata: Metadata = {
  title: 'Kingdom Come | The New Phenomenon Adventure Game',
  description: 'Kingdom Come is a revolutionary medieval fantasy board game featuring 20+ unique characters, magical spells, and epic battles. Experience chess reimagined with The Super Queen, Dragons, Wizards, and more.',
  keywords: ['board game', 'chess', 'medieval', 'fantasy', 'Kingdom Come', 'strategy game', 'multiplayer'],
  authors: [{ name: 'Jose Ramos' }],
  creator: 'Jose Ramos',
  openGraph: {
    title: 'Kingdom Come | The New Phenomenon Adventure Game',
    description: 'A revolutionary medieval fantasy board game featuring 20+ unique characters with special abilities.',
    type: 'website',
  },


icons: {
  icon: '/logo/logo.png',
  apple: '/logo/logo.png',
},
  // icons: {
  //   icon: [
  //     { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
  //     { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
  //     { url: '/icon.svg', type: 'image/svg+xml' },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cinzelDecorative.variable} ${crimsonText.variable} ${medievalSharp.variable} font-sans antialiased`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
