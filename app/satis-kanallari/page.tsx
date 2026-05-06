'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function SalesChannels() {
  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-600 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Satış Kanallarımız</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Çalıştığımız markaların geniş yelpazesi ve pazaryerleri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Logos Stacked */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:gap-12 max-w-md mx-auto">
            {/* Blackbox.tr Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <Link
                href="https://blackbox.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="h-48 md:h-56 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/blackbox-logo.svg"
                    alt="Blackbox Logo"
                    width={300}
                    height={150}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
              </Link>
              <Link
                href="https://blackbox.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
              >
                blackbox.tr
              </Link>
            </motion.div>

            {/* DJIDrone Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <Link
                href="https://djidrone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="h-48 md:h-56 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/dji-logo.svg"
                    alt="DJI Logo"
                    width={300}
                    height={200}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
              </Link>
              <Link
                href="https://djidrone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
              >
                djidrone.com
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
