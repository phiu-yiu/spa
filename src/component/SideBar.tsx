import { useState } from 'react'
import { Menu, MenuProps } from 'antd'
import { DollarOutlined, HomeOutlined, SettingOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const MenuItem = [
  {
    label: <Link to='/'>Home</Link>,
    key: '/',
    icon: <HomeOutlined />
  },
  {
    label: <Link to='/checkout'>Checkout</Link>,
    key: '/checkout',
    icon: <ShopOutlined />
  },
  {
    label: <Link to='/accounting'>Accounting</Link>,
    key: '/accounting',
    icon: <DollarOutlined />
  },
  {
    label: <Link to='/customer'>Customer</Link>,
    key: '/customer',
    icon: <UserOutlined />
  },
  {
    label: <Link to='/setting'>Setting</Link>,
    key: '/setting',
    icon: <SettingOutlined />
  }
]

export const SideMenu = () => {
  const [current, setCurrent] = useState('/')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }
  return <Menu onClick={onClick} selectedKeys={[current]} items={MenuItem} />
}
