import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'BB Global & Blackbox - Ticaret ve Teknoloji',
  description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.',
  keywords: 'BB Global, Blackbox, ticaret, teknoloji, tedarik, inovasyon',
  authors: [{ name: 'BB Global' }],
  creator: 'BB Global',
  publisher: 'BB Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bbglobal.com',
    siteName: 'BB Global & Blackbox',
    title: 'BB Global & Blackbox - Ticaret ve Teknoloji',
    description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BB Global & Blackbox',
    description: 'Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.',
  },
}

export const pageMetadata = {
  home: {
    title: 'Anasayfa | BB Global & Blackbox',
    description: 'BB Global ve Blackbox hakkında bilgi edinin. Dönen küp animasyonu ile keşfet.',
  },
  salesChannels: {
    title: 'Satış Kanallarımız | BB Global & Blackbox',
    description: 'Çalıştığımız markalar ve satış kanalları hakkında bilgi edinin.',
  },
  partners: {
    title: 'İş Ortaklarımız | BB Global & Blackbox',
    description: 'Blackbox.tr ve DJIDrone.com gibi stratejik ortaklarımız hakkında bilgi edinin.',
  },
  about: {
    title: 'Hakkımızda | BB Global & Blackbox',
    description: 'BB Global ve Blackbox hakkında, vizyonumuz, misyonumuz ve iletişim bilgileri.',
  },
}
