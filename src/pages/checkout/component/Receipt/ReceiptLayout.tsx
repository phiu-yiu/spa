import { memo } from 'react'

interface ReceiptLayoutProps {
  title: string
  description: string
  font?: 'bold' | 'base'
  size?: 'base' | 'xl'
}

export const ReceiptLayout = memo<ReceiptLayoutProps>(({ title, description, font = 'base', size = 'base' }) => {
  return (
    <div className='flex-between my-1'>
      <span className={`font-${font} text-${size}`}>{title}</span>
      <span className={`font-${font} text-${size}`}>{description}</span>
    </div>
  )
})
