import { FC, memo } from 'react'
import { useSnapshot } from 'valtio'
import dayjs from 'dayjs'

import { customerStore } from '~/pages/checkout/store/customerStore'
import { useGetConfig } from '~/pages/config/hook'

export const Information: FC = memo(() => {
  const config = useGetConfig()

  return (
    <>
      <h4 className='text-center font-bold text-xl'>{config.name.toUpperCase()}</h4>
      <p className='text-center'>Đ/C: {config.address}</p>
      <p className='text-center'>
        {`SĐT: ${config.contact}`}
        {config?.contact && <span> / {config.contact}</span>}
      </p>
      <h5 className='text-center text-lg my-2'>HOÁ ĐƠN TÍNH TIỀN</h5>
      <RenderCustomer />
      <span>{`Ngày: ${dayjs().format('DD/MM/YYYY')} Giờ: ${dayjs().format('HH:mm')}`}</span>
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
      Khách Hàng: {customer?.gender && <span>{GENDER_PREFIX[customer.gender]}</span>}
      <span>{customer?.name ?? 'Guest'}</span>
    </div>
  )
}
