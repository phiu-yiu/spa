import { FC } from 'react'
import { Divider } from 'antd'

import { Information } from '~/pages/checkout/component/Receipt/Information'
import { ReceiptLayout } from '~/pages/checkout/component/Receipt/ReceiptLayout'
import { Amount } from '~/pages/checkout/component/Receipt/Amount'

interface Props {
  Services: FC
  Footer?: FC
}

export const Receipt: FC<Props> = ({ Services, Footer }) => {
  return (
    <>
      <Information />
      <Divider className='!my-2' />
      <ReceiptLayout title='Dịch Vụ' description='Thành Tiền' font='bold' />
      <Services />
      <Divider className='!my-2' />
      <Amount />
      {Footer && <Footer />}
    </>
  )
}
