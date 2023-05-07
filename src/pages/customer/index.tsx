import { FC } from 'react'
import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Dayjs } from 'dayjs'

import { datetime } from '~/serivce/datetime'
import { capitalizeFirstLetter } from '~/serivce'
import { useQueryCustomers } from '~/hook/useCustomer'

import { Create } from '~/pages/customer/component/Create'
import { Customer } from '~/pages/customer/type'
import { DISTRICT_FORMAT, GENDER_COLOR } from '~/pages/customer/contants'

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
    width: '10%',
    render: (gender) => <Tag color={GENDER_COLOR[gender]}>{capitalizeFirstLetter(gender)}</Tag>
  },
  {
    title: 'Date of Birth',
    dataIndex: 'date_of_birth',
    width: '10%',
    render: (date: Dayjs) => <span>{datetime.toDate(date)}</span>
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
