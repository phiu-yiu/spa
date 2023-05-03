import { FC, memo, useMemo } from 'react'
import { useSnapshot } from 'valtio'

import { currency, discountPrice } from '~/serivce'
import { ReceiptLayout } from '~/pages/checkout/component/Receipt/ReceiptLayout'
import { receiptStore } from '~/pages/checkout/store/receiptStore'

export const Amount: FC = memo(() => {
  const snap = useSnapshot(receiptStore)

  const beforeDiscountFee = useMemo(() => snap.services.reduce((res, cur) => res + cur.price, 0), [snap.services])
  const totalFee = useMemo(
    () => (snap.discount ? discountPrice(beforeDiscountFee, snap.discount) : beforeDiscountFee),
    [snap.discount, beforeDiscountFee]
  )

  const changeFee = useMemo(() => snap.payment - totalFee, [totalFee, snap.payment])

  return (
    <div>
      {snap.discount !== 0 && (
        <>
          <ReceiptLayout title='Thành Tiền' description={currency(beforeDiscountFee)} />
          <ReceiptLayout
            title={`Giảm Giá ${snap.discount}%`}
            description={`-${currency(beforeDiscountFee - totalFee)}`}
          />
        </>
      )}
      <ReceiptLayout title='Thanh Toán' description={currency(totalFee)} font='bold' size='xl' />
      <ReceiptLayout title='Tiền Khách Đưa' description={currency(snap.payment)} />
      <ReceiptLayout title='Tiền Thừa' description={currency(changeFee)} />
    </div>
  )
})
