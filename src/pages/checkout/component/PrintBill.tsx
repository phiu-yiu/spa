import { FC, useRef } from 'react'
import { Button } from 'antd'
import { useReactToPrint } from 'react-to-print'

import { PrintSection } from '~/pages/checkout/component/Receipt/PrintSection'

export const PrintBill: FC = () => {
  const printRef = useRef<HTMLDivElement | null>(null)

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })

  return (
    <>
      <Button type='primary' onClick={handlePrint}>
        Print Bill
      </Button>
      <div className='hidden'>
        <PrintSection ref={printRef} />
      </div>
    </>
  )
}
