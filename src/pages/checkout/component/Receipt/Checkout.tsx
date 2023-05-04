import { FC } from 'react'
import { Card } from 'antd'
import { useSnapshot } from 'valtio'
import { nanoid } from 'nanoid'
import { DeleteOutlined } from '@ant-design/icons'

import { currency } from '~/serivce'

import { Receipt } from '~/pages/checkout/component/Receipt/Receipt'
import { receiptStore, useReceiptStoreActions } from '~/pages/checkout/store/receiptStore'

export const Checkout: FC = () => {
  return (
    <div className='max-w-xl min-w-[500px]'>
      <h3 className='font-bold text-xl mb-6'>Preview</h3>
      <Card className='min-h-[515px]'>
        <Receipt Services={Services} />
      </Card>
    </div>
  )
}

export const Services: FC = () => {
  const snap = useSnapshot(receiptStore)
  const { removeService } = useReceiptStoreActions()

  return (
    <>
      {snap.services.map((service, index) => (
        <div className='flex-between' key={nanoid(3)}>
          <span>{service.name}</span>
          <span className='flex-center space-x-2.5'>
            <span>{currency(service.price)}</span>
            <DeleteOutlined
              id='removeOnPrint'
              className='btn-rounded text-red-400'
              onClick={() => removeService(index)}
            />
          </span>
        </div>
      ))}
    </>
  )
}
