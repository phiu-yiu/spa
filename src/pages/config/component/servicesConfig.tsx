import { FC } from 'react'
import { Card, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

import { useQueryServices } from '~/pages/checkout/hook/useService'
import { Create } from '~/pages/config/component/Create'
import { Service } from '~/pages/config/contants'
import { currency } from '~/serivce'

const ServiceColumn: ColumnsType<Service> = [
  {
    title: 'Id',
    dataIndex: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price) => <span>{currency(price)}</span>
  },
  {
    title: 'Group',
    dataIndex: 'group_service',
    render: (group: { name: string }) => <span>{group?.name}</span>
  }
]

export const ServicesConfig: FC = () => {
  const { data, isLoading } = useQueryServices()

  return (
    <div className='space-y-6'>
      <Card>
        <h4 className='font-bold text-xl  mb-4'>Add Service</h4>
        <Create />
      </Card>
      <Card>
        <h4 className='font-bold text-xl  mb-4'>Services</h4>
        <Table columns={ServiceColumn} dataSource={data} loading={isLoading} rowKey='id' />
      </Card>
    </div>
  )
}
