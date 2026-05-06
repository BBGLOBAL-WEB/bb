'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu gereklidir'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Lütfen tüm alanları doğru şekilde doldurun',
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Mesajınız gönderiliyor...',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Mesaj gönderilirken bir hata oluştu')
      }

      setStatus({
        type: 'success',
        message: data.message || 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.',
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({
          type: 'idle',
          message: '',
        })
      }, 5000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      setStatus({
        type: 'error',
        message: errorMessage,
      })
    }
  }

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
    <div className="w-full pt-20 pb-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            İletişim Formu
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için lütfen bizimle iletişime geçin.
            En kısa sürede sizinle iletişime geçeceğiz.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              {/* Phone */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900">
                    <span className="text-2xl">📞</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Telefon</h3>
                  <p className="text-gray-300">+90 (212) 123-4567</p>
                  <p className="text-gray-300">+90 (212) 123-4568</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900">
                    <span className="text-2xl">✉️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">E-posta</h3>
                  <p className="text-gray-300">info@bbglobal.com</p>
                  <p className="text-gray-300">support@bbglobal.com</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900">
                    <span className="text-2xl">📍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Adres</h3>
                  <p className="text-gray-300">
                    Levent Mahallesi, Nidakule Göztepe<br />
                    İstanbul, Türkiye 34330
                  </p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900">
                    <span className="text-2xl">🕐</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-300">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-300">Cumartesi - Pazar: Kapalı</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
            >
              {/* Status Messages */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900 border border-green-700 text-green-100'
                      : status.type === 'error'
                      ? 'bg-red-900 border border-red-700 text-red-100'
                      : 'bg-blue-900 border border-blue-700 text-blue-100'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-700 text-white placeholder-gray-400 transition-colors focus:outline-none ${
                    errors.name
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-600 focus:border-blue-500'
                  }`}
                  disabled={status.type === 'loading'}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-700 text-white placeholder-gray-400 transition-colors focus:outline-none ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-600 focus:border-blue-500'
                  }`}
                  disabled={status.type === 'loading'}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Konu *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mesajınızın konusu"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-700 text-white placeholder-gray-400 transition-colors focus:outline-none ${
                    errors.subject
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-600 focus:border-blue-500'
                  }`}
                  disabled={status.type === 'loading'}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-700 text-white placeholder-gray-400 transition-colors focus:outline-none resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-600 focus:border-blue-500'
                  }`}
                  disabled={status.type === 'loading'}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {status.type === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
              </motion.button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-400 text-center">
                Gizlilik politikamıza uygun olarak verileriniz güvenli şekilde işlenecektir.
              </p>
            </motion.form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-16 md:mt-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          >
            Konumumuz
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8234567890123!2d29.0!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sLevent%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BB Global Konumu"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
