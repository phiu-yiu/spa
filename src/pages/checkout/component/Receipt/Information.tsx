import { FC, memo } from 'react'
import { useSnapshot } from 'valtio'
import dayjs from 'dayjs'

import { useGetConfig } from '~/pages/checkout/hook/useConfig'
import { customerStore } from '~/pages/checkout/store/customerStore'

export const Information: FC = memo(() => {
  const config = useGetConfig()

  return (
    <>
      <h4 className='text-center font-bold text-xl'>{config.name}</h4>
      <p className='text-center'>{config.address}</p>
      <p className='text-center mb-4'>
        {`SĐT: ${config.contact}`}
        {config?.contact && <span> / {config.contact}</span>}
      </p>
      <div className='flex-between'>
        <RenderCustomer />
        <span>{dayjs().format('DD/MM/YYYY HH:mm')}</span>
      </div>
    </>
  )
})

const GENDER_PREFIX = {
  male: 'A. ',
  female: 'C. '
}

const RenderCustomer: FC = () => {
  const customer = useSnapshot(customerStore).customer

  return (
    <div>
      {customer?.gender && <span>{GENDER_PREFIX[customer.gender]}</span>}
      <span>{customer?.name ?? 'Guest'}</span>
    </div>
  )
}
