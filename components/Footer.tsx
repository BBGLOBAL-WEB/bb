'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">BB GLOBAL</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Global tedarik gücü, geniş ürün yelpazesi ve güçlü ticaret ağı ile dünyaya değer katıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/satis-kanallari/" className="hover:text-blue-400 transition-colors">
                  Satış Kanalları
                </Link>
              </li>
              <li>
                <Link href="/is-ortaklari/" className="hover:text-blue-400 transition-colors">
                  İş Ortakları
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda/" className="hover:text-blue-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim/" className="hover:text-blue-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">İş Ortakları</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <a 
                  href="https://blackbox.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blackbox.tr
                </a>
              </li>
              <li>
                <a 
                  href="https://djidrone.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  DJIDrone.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <p>
                <strong>E-posta:</strong><br />
                <a href="mailto:info@bbglobal.com" className="hover:text-blue-400 transition-colors">
                  info@bbglobal.com
                </a>
              </p>
              <p>
                <strong>Telefon:</strong><br />
                <a href="tel:+90" className="hover:text-blue-400 transition-colors">
                  +90 (XXX) XXX XX XX
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-400 text-sm">
              &copy; {currentYear} BB Global & Blackbox. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Kullanım Şartları</a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-gray-700">
            <a
              href="https://facebook.com/bbglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="Facebook"
              title="Facebook'ta bizi takip edin"
            >
              f
            </a>
            <a
              href="https://twitter.com/bbglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="Twitter"
              title="Twitter'da bizi takip edin"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com/bbglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors text-2xl"
              aria-label="Instagram"
              title="Instagram'da bizi takip edin"
            >
              📷
            </a>
            <a
              href="https://linkedin.com/company/bbglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
              title="LinkedIn'de bizi takip edin"
            >
              in
            </a>
            <a
              href="https://youtube.com/bbglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors text-2xl"
              aria-label="YouTube"
              title="YouTube'da bizi takip edin"
            >
              ▶️
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
