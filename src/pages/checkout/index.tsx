import { FC } from 'react'
import { useQueryConfig } from '~/pages/checkout/hook/useConfig'
import { Card } from 'antd'
import { Checkout } from '~/pages/checkout/component/Receipt/Checkout'
import { Action } from '~/pages/checkout/component/Action'

const CheckoutPage: FC = () => {
  const { isLoading } = useQueryConfig()
  // const { isLoading: customerLoading } = useQueryCustomers()

  return (
    <Card loading={isLoading}>
      <div className='flex items-start justify-center space-x-6'>
        <Checkout />
        <Action />
      </div>
    </Card>
  )
}

export default CheckoutPage
