import React from 'react'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { useHoneyBook } from '@/hooks/use-honeybook'

export interface HoneyBookFormProps {
  placementId: string
  pid?: string
  className?: string
}

const DEFAULT_PID = '61a840e6341fbd00074ed82a'

export const HoneyBookForm: React.FC<HoneyBookFormProps> = ({ placementId, pid = DEFAULT_PID, className }) => {
  useHoneyBook(pid)
  const placeholder = `hb-p-${pid}-${placementId}`

  return (
    <div className={className}>
      <div className={placeholder}></div>
      <OptimizedImage
        height={1}
        width={1}
        style={{ display: 'none' }}
        src={`https://www.honeybook.com/p.png?pid=${pid}`}
        alt="HoneyBook pixel"
      />
    </div>
  )
}

export default HoneyBookForm
