import { FC, memo, useMemo } from 'react'
import { Button, Card, Col, Form, Input, InputNumber, notification, Row, Select } from 'antd'

import { Label } from '~/component/Label'
import { ONE_HUNDRED, ONE_THOUSAND, SPAN_24, VND_SUFIX } from '~/contants'
import { handleError } from '~/serivce'

import { useAddService, useQueryGroupServices } from '~/pages/config/hook'
import { CreateServicePayload } from '~/pages/config/contants'

export const Create: FC = memo(() => {
  const { data, isLoading } = useQueryGroupServices()
  const { mutate: addService, isLoading: addLoading } = useAddService({
    handleSuccess: () => {
      notification.success({ message: 'Add service successfully' })
    },
    handleError: (e) => {
      handleError('Failed to add service', e)
    }
  })

  const groupSerOpt = useMemo(() => data?.map((item) => ({ label: item.name, value: item.id })), [data])

  const onSubmit = (data: CreateServicePayload) => {
    const transformData = { ...data, price: data.price * ONE_THOUSAND }
    addService(transformData)
  }

  return (
    <Card loading={isLoading} className='rm-antd-item-style'>
      <Form onFinish={onSubmit} disabled={addLoading}>
        <Form.Item name='name' label={<Label>Name</Label>} labelCol={SPAN_24}>
          <Input />
        </Form.Item>
        <Row align='bottom' gutter={12}>
          <Col span={8}>
            <Form.Item name='price' label={<Label>Price</Label>} labelCol={SPAN_24} initialValue={ONE_HUNDRED}>
              <InputNumber min={0} className='!w-full' addonAfter={VND_SUFIX} step={ONE_HUNDRED} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='group_id'
              label={<Label>Group</Label>}
              labelCol={SPAN_24}
              initialValue={groupSerOpt?.[0]?.value}
            >
              <Select options={groupSerOpt} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='px-6' loading={addLoading}>
                Add
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
})
