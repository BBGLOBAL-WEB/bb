import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  hover = true,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantStyles = {
    default: 'bg-white rounded-lg shadow-md border border-gray-200',
    elevated: 'bg-white rounded-lg shadow-lg border border-gray-100',
    outlined: 'bg-white rounded-lg border-2 border-gray-300',
    glass: 'bg-white/10 backdrop-blur-sm rounded-lg border border-white/20',
  }

  const hoverStyles = hover ? 'hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1' : ''

  return (
    <div className={`${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
