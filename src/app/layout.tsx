import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactDrawer } from '@/components/contact-drawer'

export const metadata: Metadata = {
  title: {
    default: 'Bradford Arnold - Design, Fabrication & Teaching',
    template: '%s | Bradford Arnold'
  },
  description: 'Design, fabrication, and teaching, with a love for useful things. Pattern design, sustainable laser workflows, aquaponics sensors, and student tools.',
  keywords: ['design', 'fabrication', 'teaching', 'patterns', 'sustainability', 'laser cutting', 'denim'],
  authors: [{ name: 'Bradford Arnold' }],
  creator: 'Bradford Arnold',
  metadataBase: new URL('https://bradfordarnold.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bradfordarnold.com',
    title: 'Bradford Arnold - Design, Fabrication & Teaching',
    description: 'Design, fabrication, and teaching, with a love for useful things.',
    siteName: 'Bradford Arnold Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bradford Arnold - Design, Fabrication & Teaching',
    description: 'Design, fabrication, and teaching, with a love for useful things.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <ContactDrawer />
        </ThemeProvider>
      </body>
    </html>
  )
}