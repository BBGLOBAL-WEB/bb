'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  title: string
  type?: 'youtube' | 'vimeo' | 'local'
  youtubeId?: string
  vimeoId?: string
  thumbnail?: string
}

export default function VideoPlayer({
  src,
  title,
  type = 'local',
  youtubeId,
  vimeoId,
  thumbnail,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoadStart = () => setIsLoading(true)
    const handleLoadedData = () => setIsLoading(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  if (type === 'youtube' && youtubeId) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    )
  }

  if (type === 'vimeo' && vimeoId) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          className="w-full h-full"
        />
      </motion.div>
    )
  }

  // Local video player
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full rounded-lg overflow-hidden shadow-lg bg-black relative group"
    >
      <div className="aspect-video relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={thumbnail}
          controls
          playsInline
        >
          <source src={src} type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* Play Button Overlay */}
        {!isPlaying && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => videoRef.current?.play()}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group-hover:bg-black/50"
          >
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <span className="text-3xl ml-1">▶️</span>
            </div>
          </motion.button>
        )}
      </div>

      {/* Title */}
      <div className="p-4 bg-gray-900 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </motion.div>
  )
}
