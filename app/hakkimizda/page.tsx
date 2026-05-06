'use client'

import { motion } from 'framer-motion'

export default function About() {
  const marketplaces = [
    { name: 'Trendyol', url: 'https://trendyol.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Trendyol_logo.svg/800px-Trendyol_logo.svg.png' },
    { name: 'Hepsiburada', url: 'https://hepsiburada.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hepsiburada_logo.svg/800px-Hepsiburada_logo.svg.png' },
    { name: 'N11', url: 'https://n11.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/N11_logo.svg/800px-N11_logo.svg.png' },
    { name: 'Gittigidiyor', url: 'https://gittigidiyor.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gittigidiyor_logo.svg/800px-Gittigidiyor_logo.svg.png' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="w-full pt-20">
      {/* About Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left - Content */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Hakkımızda</h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Blackbox Kimdir?</h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Blackbox, fikrinden ürüne uzanan AR-GE gücüyle inovatif ve rekabetçi çözümler 
                    geliştiren bir teknoloji şirketidir. Müşterilerimizin ihtiyaçlarını anlayarak, 
                    onlara en uygun çözümleri sunmaktayız.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Vizyonumuz</h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Teknoloji ve inovasyonun sınırlarını zorlayarak, dünya çapında tanınan bir 
                    kuruluş olmak. Müşterilerimizin hayatını kolaylaştıran, değer katan çözümler 
                    geliştirmek.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Misyonumuz</h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Yüksek kaliteli ürün ve hizmetler sunarak, müşteri memnuniyetini en üst 
                    seviyede tutmak. Sürdürülebilir büyüme ve uzun vadeli ortaklıklar kurmak.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Biz Kimiz?</h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Deneyimli profesyonellerden oluşan bir ekip olarak, her projede en yüksek 
                    standartları korumaktayız. Müşteri odaklı yaklaşımımız ve inovatif çözümlerimiz, 
                    bizi sektörde öncü konuma getirmiştir.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Logo */}
            <motion.div
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20 w-full max-w-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    BB
                  </motion.div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-4">GLOBAL</div>
                  <motion.div
                    className="w-1 h-12 bg-blue-400 mx-auto my-4"
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="text-lg md:text-xl font-semibold text-gray-300">BLACKBOX</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marketplaces Section */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-center text-gray-300 text-base md:text-lg">
              Ürünlerimizi satın almak için aşağıdaki pazaryerlerini ziyaret edebilirsiniz
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketplaces.map((marketplace, index) => (
              <motion.a
                key={index}
                href={marketplace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all group hover:bg-gray-600 flex items-center justify-center"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                aria-label={`${marketplace.name} pazaryerine git`}
              >
                <img 
                  src={marketplace.logo} 
                  alt={marketplace.name}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
