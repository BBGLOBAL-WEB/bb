'use client'

import { motion } from 'framer-motion'

export default function Partners() {
  const brands = [
    { name: 'Apple', url: 'https://www.apple.com', logo: '/images/apple-logo.png' },
    { name: 'Acer', url: 'https://www.acer.com', logo: '/images/acer-logo.svg' },
    { name: 'Asus', url: 'https://www.asus.com', logo: '/images/asus-logo.png' },
    { name: 'Dell', url: 'https://www.dell.com', logo: '/images/dell-logo.png' },
    { name: 'HP', url: 'https://www.hp.com', logo: '/images/hp-logo.png' },
    { name: 'Lenovo', url: 'https://www.lenovo.com', logo: '/images/lenovo-logo.png' },
    { name: 'LG', url: 'https://www.lg.com', logo: '/images/lg-logo.png' },
    { name: 'Sony', url: 'https://www.sony.com', logo: '/images/sony-logo.png' },
    { name: 'Samsung', url: 'https://www.samsung.com', logo: '/images/samsung-logo.png' },
    { name: 'Huawei', url: 'https://www.huawei.com', logo: '/images/huawei-logo.png' },
    { name: 'Xiaomi', url: 'https://www.xiaomi.com', logo: '/images/xiaomi-logo.png' },
    { name: 'Canon', url: 'https://www.canon.com', logo: '/images/canon-logo.png' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">İş Ortaklarımız</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Birlikte büyüyüp geliştiğimiz stratejik ortaklar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {brands.map((brand, index) => (
              <motion.a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-2 border-gray-600 hover:border-blue-500 hover:from-gray-600 hover:to-gray-700 transition-all cursor-pointer shadow-lg hover:shadow-xl p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  title={brand.name}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
