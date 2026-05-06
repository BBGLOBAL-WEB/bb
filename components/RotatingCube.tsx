'use client'

import { motion } from 'framer-motion'

interface RotatingCubeProps {
  // No props needed
}

export default function RotatingCube({}: RotatingCubeProps) {
  return (
    <div className="flex items-center justify-center h-full perspective">
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          perspective: '1000px',
        }}
      >
        {/* Intro Video */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <video
            src="/videos/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}
