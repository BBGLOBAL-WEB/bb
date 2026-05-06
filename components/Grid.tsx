import { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
  cols?: number
  gap?: number
  className?: string
}

export default function Grid({
  children,
  cols = 3,
  gap = 6,
  className = '',
}: GridProps) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  }

  const gapClass = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }

  const colsKey = Math.min(cols, 5) as keyof typeof gridColsClass
  const gapKey = Math.min(gap, 8) as keyof typeof gapClass

  return (
    <div className={`grid ${gridColsClass[colsKey]} ${gapClass[gapKey]} ${className}`}>
      {children}
    </div>
  )
}
