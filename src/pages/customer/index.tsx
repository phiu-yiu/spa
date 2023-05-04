import { FC } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Create } from '~/pages/customer/component/Create'
import { Customer } from '~/pages/customer/type'
import { useQueryCustomers } from '~/hook/useCustomer'
import { datetime } from '~/serivce/datetime'
import { Dayjs } from 'dayjs'
import { DISTRICT_FORMAT } from '~/pages/customer/contants'

const columns: ColumnsType<Customer> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '5%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: '15%'
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    width: '15%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '15%',
    render: (district: keyof DISTRICT_FORMAT) => <span>{DISTRICT_FORMAT[district]}</span>
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '10%'
  },
  {
    title: 'Date of Birth',
    dataIndex: 'date_of_birth',
    width: '10%',
    render: (date: Dayjs) => <span>{datetime.toDayMonth(date)}</span>
  }
]

const User: FC = () => {
  const { data, isLoading } = useQueryCustomers()

  return (
    <div>
      <Create />
      <Table loading={isLoading} columns={columns} dataSource={data} />
    </div>
  )
}

export default User
