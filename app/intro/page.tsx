'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      localStorage.setItem('bbglobal_intro_seen', 'true')
      router.push('/')
    }

    video.addEventListener('ended', handleVideoEnd)
    video.play().catch((error) => {
      console.error('Video oynatma hatası:', error)
      localStorage.setItem('bbglobal_intro_seen', 'true')
      router.push('/')
    })

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [router])

  const handleSkip = () => {
    localStorage.setItem('bbglobal_intro_seen', 'true')
    router.push('/')
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
      >
        <source src="/videos/intro-bb.mp4" type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
      >
        Atla
      </button>

      {/* Loading Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="text-white text-sm">Yükleniyor...</span>
      </div>
    </div>
  )
}
