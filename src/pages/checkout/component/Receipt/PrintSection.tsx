import { FC, forwardRef, useImperativeHandle, useRef } from 'react'
import { useSnapshot } from 'valtio'
import { nanoid } from 'nanoid'

import { currency } from '~/serivce'
import { Receipt } from '~/pages/checkout/component/Receipt/Receipt'
import { ReceiptLayout } from '~/pages/checkout/component/Receipt/ReceiptLayout'
import { receiptStore } from '~/pages/checkout/store/receiptStore'

// eslint-disable-next-line no-empty-pattern
export const PrintSection: FC = forwardRef(({}, ref) => {
  const receiptRef = useRef(null)

  useImperativeHandle(ref, () => receiptRef.current, [])

  return (
    <div className='my-4' ref={receiptRef}>
      <Receipt Services={Services} />
    </div>
  )
})

const Services: FC = () => {
  const snap = useSnapshot(receiptStore)

  return (
    <>
      {snap.services.map((service) => (
        <ReceiptLayout key={nanoid(2)} title={service.name} description={currency(service.price)} />
      ))}
    </>
  )
}
