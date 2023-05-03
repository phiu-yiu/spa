import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import { FC } from 'react'
import { Layout } from 'antd'
import dayjs from 'dayjs'

import { SpaIcon } from '~/component/SpaIcon'
import { SideMenu } from '~/component/SideBar'
import { Breadcrumbs } from '~/component/Breadcrumbs'
import Home from '~/pages/home'
import CheckoutPage from '~/pages/checkout'
import Account from '~/pages/account'
import Customer from '~/pages/customer'
import Setting from '~/pages/setting'

const { Header, Sider, Footer, Content } = Layout

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RouterLayout />}>
          <Route index element={<Home />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/accounting' element={<Account />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/setting' element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

const RouterLayout: FC = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <Layout>
      <Sider className='min-h-screen' theme='light'>
        <button onClick={refreshPage} className='p-2 flex-center h-[80px]'>
          <SpaIcon />
        </button>
        <Content>
          <SideMenu />
        </Content>
      </Sider>
      <Layout>
        <Header className='bg-white'></Header>
        <Content>
          <Breadcrumbs />
          <div className='mt-8 px-8'>
            <Outlet />
          </div>
        </Content>
        <Footer className='bg-white'>
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}

const AppFooter = () => {
  return <p className='text-center text-gray-600'>{`Copyright @${dayjs().format('YYYY')} | Create by phieu.yiu`}</p>
}
