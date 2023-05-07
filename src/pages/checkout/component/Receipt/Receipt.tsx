import { FC } from 'react'
import { Divider } from 'antd'

import { Information } from '~/pages/checkout/component/Receipt/Information'
import { ReceiptLayout } from '~/pages/checkout/component/Receipt/ReceiptLayout'
import { Amount } from '~/pages/checkout/component/Receipt/Amount'

interface Props {
  Services: FC
}

export const Receipt: FC<Props> = ({ Services }) => {
  return (
    <>
      <Information />
      <Divider className='!my-2' />
      <ReceiptLayout title='Tên Dịch Vụ' description='Giá Tiền' font='bold' />
      <Services />
      <Divider className='!my-2' />
      <Amount />
      <Footer />
    </>
  )
}

const Footer: FC = () => {
  return (
    <>
      <hr className='my-4' />
      <p className='text-center text-lg font-bold'>XIN CẢM ƠN & HẸN GẶP LẠI</p>
    </>
  )
}
