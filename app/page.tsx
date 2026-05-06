'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setShowIntro(false)
    }

    video.addEventListener('ended', handleVideoEnd)
    video.play().catch((error) => {
      console.error('Video oynatma hatası:', error)
      setShowIntro(false)
    })

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [])

  return (
    <div className="w-full">
      {/* Intro Video */}
      {showIntro && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          >
            <source src="/videos/intro-bb.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
        </div>
      )}

      {/* Main Content - Only show after intro */}
      {!showIntro && (
        <>
          {/* Hero Section with Background Image - Full width, scrollable height */}
          <section className="relative w-full bg-black">
            {/* Background Image - Full width, auto height */}
            <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
              <Image
                src="/images/BBGLOBAL.jpeg"
                alt="BB Global Arka Plan"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
                sizes="100vw"
              />
            </div>
          </section>
        </>
      )}
    </div>
  )
}
