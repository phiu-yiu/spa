import { FC, useState } from 'react'
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
    label: <Link to='/config'>Config</Link>,
    key: '/config',
    icon: <SettingOutlined />
  }
]

interface Props {
  height?: string
}

export const SideMenu: FC<Props> = ({ height }) => {
  const [current, setCurrent] = useState('/')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }
  return <Menu className={height} onClick={onClick} selectedKeys={[current]} items={MenuItem} mode='inline' />
}
