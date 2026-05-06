import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { Providers } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://bbglobal.com'),
  title: 'BB Global - Global Tedarik ve Teknoloji Çözümleri',
  description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz. Blackbox ile inovatif teknoloji çözümleri.',
  keywords: 'BB Global, Blackbox, ticaret, teknoloji, tedarik, e-ticaret, pazaryerleri, inovasyon, AR-GE',
  authors: [{ name: 'BB Global' }],
  creator: 'BB Global',
  publisher: 'BB Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BB Global - Global Tedarik ve Teknoloji Çözümleri',
    description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bbglobal.com',
    siteName: 'BB Global',
    images: [
      {
        url: '/images/BBGLOBAL.jpeg',
        width: 1200,
        height: 630,
        alt: 'BB Global',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BB Global & Blackbox',
    description: 'Global tedarik gücü ve teknoloji çözümleri',
    images: ['/images/BBGLOBAL.jpeg'],
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
  alternates: {
    canonical: 'https://bbglobal.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BB Global',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#001a33" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BB Global" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BB Global',
              url: 'https://bbglobal.com',
              logo: 'https://bbglobal.com/images/logo.png',
              description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.',
              sameAs: [
                'https://blackbox.tr',
                'https://djidrone.com',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@bbglobal.com',
                areaServed: 'TR',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TR',
                addressLocality: 'İstanbul',
              },
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BB Global',
              url: 'https://bbglobal.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://bbglobal.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Anasayfa',
                  item: 'https://bbglobal.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Satış Kanalları',
                  item: 'https://bbglobal.com/satis-kanallari/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'İş Ortakları',
                  item: 'https://bbglobal.com/is-ortaklari/',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Hakkımızda',
                  item: 'https://bbglobal.com/hakkimizda/',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-900 dark:bg-gray-900 text-white dark:text-white transition-colors flex flex-col min-h-screen">
        <Providers>
          <Chatbot />
          <Navigation />
          <main className="w-full flex-1" role="main">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
