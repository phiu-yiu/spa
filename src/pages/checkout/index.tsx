import { FC } from 'react'
import { Card } from 'antd'
import { Checkout } from '~/pages/checkout/component/Receipt/Checkout'
import { Action } from '~/pages/checkout/component/Action'
import { useQueryConfig } from '~/pages/config/hook'
import { Loading } from '~/component/Loading'

const CheckoutPage: FC = () => {
  const { isLoading } = useQueryConfig()

  if (isLoading) return <Loading />

  return (
    <div className='flex items-start justify-center space-x-6'>
      <Card>
        <Checkout />
      </Card>
      <Card>
        <Action />
      </Card>
    </div>
  )
}

export default CheckoutPage
