'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  image: string
  description: string
  inStock: boolean
  discount?: number
}

const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Bilgisayar',
    price: 3499,
    rating: 4.8,
    reviews: 245,
    image: '💻',
    description: 'Yüksek performanslı profesyonel laptop',
    inStock: true,
    discount: 10,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    category: 'Telefon',
    price: 1299,
    rating: 4.9,
    reviews: 512,
    image: '📱',
    description: 'En son teknoloji ile donatılmış akıllı telefon',
    inStock: true,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    category: 'Kulaklık',
    price: 399,
    rating: 4.7,
    reviews: 189,
    image: '🎧',
    description: 'Gürültü iptal teknolojili premium kulaklık',
    inStock: true,
    discount: 15,
  },
  {
    id: '4',
    name: 'iPad Air',
    category: 'Tablet',
    price: 799,
    rating: 4.6,
    reviews: 156,
    image: '📱',
    description: 'Taşınabilir ve güçlü tablet bilgisayar',
    inStock: true,
  },
  {
    id: '5',
    name: 'Canon EOS R5',
    category: 'Kamera',
    price: 3899,
    rating: 4.8,
    reviews: 98,
    image: '📷',
    description: 'Profesyonel mirrorless kamera',
    inStock: false,
  },
  {
    id: '6',
    name: 'DJI Air 3S',
    category: 'Drone',
    price: 999,
    rating: 4.7,
    reviews: 234,
    image: '🚁',
    description: 'Gelişmiş kamera sistemi ile drone',
    inStock: true,
    discount: 5,
  },
  {
    id: '7',
    name: 'Samsung 65" QLED TV',
    category: 'Televizyon',
    price: 1599,
    rating: 4.6,
    reviews: 167,
    image: '📺',
    description: '4K Ultra HD akıllı televizyon',
    inStock: true,
  },
  {
    id: '8',
    name: 'Corsair K95 Platinum',
    category: 'Klavye',
    price: 229,
    rating: 4.5,
    reviews: 89,
    image: '⌨️',
    description: 'Mekanik oyun klavyesi',
    inStock: true,
    discount: 20,
  },
  {
    id: '9',
    name: 'Logitech MX Master 3S',
    category: 'Fare',
    price: 99,
    rating: 4.7,
    reviews: 312,
    image: '🖱️',
    description: 'Profesyonel kablosuz fare',
    inStock: true,
  },
]

const categories = ['Tümü', 'Bilgisayar', 'Telefon', 'Kulaklık', 'Tablet', 'Kamera', 'Drone', 'Televizyon', 'Klavye', 'Fare']
const priceRanges = [
  { label: 'Tümü', min: 0, max: Infinity },
  { label: '0 - 500 TL', min: 0, max: 500 },
  { label: '500 - 1000 TL', min: 500, max: 1000 },
  { label: '1000 - 2000 TL', min: 1000, max: 2000 },
  { label: '2000+ TL', min: 2000, max: Infinity },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedPrice, setSelectedPrice] = useState('Tümü')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const getPriceRange = (label: string) => {
    return priceRanges.find((r) => r.label === label) || { min: 0, max: Infinity }
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const priceRange = getPriceRange(selectedPrice)
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      return matchesCategory && matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="w-full pt-20 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Ürün Kataloğu
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Geniş ürün yelpazesinden seçim yapın. Tüm ürünler orijinal ve garantilidir.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            {/* Search */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Ara</h3>
              <input
                type="text"
                placeholder="Ürün adı..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </motion.div>

            {/* Categories */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Kategoriler</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Price Range */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Fiyat Aralığı</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range.label)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedPrice === range.label
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort and Results */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
            >
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
                {filteredProducts.length} ürün bulundu
              </motion.p>
              <motion.select
                variants={itemVariants}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
              >
                <option value="popular">Popüler</option>
                <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating">En Yüksek Puan</option>
              </motion.select>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform overflow-hidden">
                    {product.image}
                    {product.discount && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        -{product.discount}%
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Stokta Yok</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Category */}
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-2">
                      {product.category}
                    </p>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold text-gray-900 dark:text-white">{product.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        ({product.reviews} yorum)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {product.price} TL
                        </p>
                        {product.discount && (
                          <p className="text-sm text-gray-500 line-through">
                            {Math.round(product.price / (1 - product.discount / 100))} TL
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!product.inStock}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
