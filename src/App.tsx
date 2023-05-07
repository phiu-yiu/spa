import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import { FC, lazy, Suspense } from 'react'
import { Layout } from 'antd'
import dayjs from 'dayjs'

import { SpaIcon } from '~/component/SpaIcon'
import { SideMenu } from '~/component/SideBar'
import { Breadcrumbs } from '~/component/Breadcrumbs'
import { Loading } from '~/component/Loading'

const Home = lazy(() => import('~/pages/home'))
const CheckoutPage = lazy(() => import('~/pages/checkout'))
const Account = lazy(() => import('~/pages/account'))
const Customer = lazy(() => import('~/pages/customer'))
const Config = lazy(() => import('~/pages/config'))

const { Header, Sider, Footer, Content } = Layout

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RouterLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/checkout'
            element={
              <Suspense fallback={<Loading />}>
                <CheckoutPage />
              </Suspense>
            }
          />
          <Route
            path='/accounting'
            element={
              <Suspense fallback={<Loading />}>
                <Account />
              </Suspense>
            }
          />
          <Route
            path='/customer'
            element={
              <Suspense fallback={<Loading />}>
                <Customer />
              </Suspense>
            }
          />
          <Route
            path='/config'
            element={
              <Suspense fallback={<Loading />}>
                <Config />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App

const LOGO_HEIGHT = 120

const RouterLayout: FC = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <Layout>
      <Sider className='min-h-screen' theme='light'>
        <button onClick={refreshPage} className={`p-2 flex-center h-[${LOGO_HEIGHT}px] border-r border-gray-100`}>
          <SpaIcon />
        </button>
        <Content>
          <SideMenu height={`h-[calc(100vh-${LOGO_HEIGHT}px)]`} />
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
