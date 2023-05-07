import { FC } from 'react'
import { Tabs, TabsProps } from 'antd'

import { InformationForm } from '~/pages/config/component/InfomationForm'
import { ServicesConfig } from '~/pages/config/component/servicesConfig'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Information`,
    children: <InformationForm />
  },
  {
    key: '2',
    label: `Services`,
    children: <ServicesConfig />
  }
]

const Setting: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey='1' items={items} animated={{ inkBar: true, tabPane: false }} type='card' />
    </>
  )
}

export default Setting
