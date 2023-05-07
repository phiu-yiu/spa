import { FC, useCallback, useState } from 'react'
import { Button, Card, Col, DatePicker, Form, Input, Modal, notification, Row, Select } from 'antd'
import { DATE_MONTH_YEAR, PHONE_NUMBER_PATTERN, SPAN_24 } from '~/contants'
import { DEFAULT_DISTRICT, DEFAULT_GENDER, GENDER_OPTIONS, HCM_CITY_DISTRICT_OPT } from '~/pages/customer/contants'
import { useCreateCustomer } from '~/hook/useCustomer'
import { handleError } from '~/serivce'
import { type Customer } from '~/pages/customer/type'

export const Create: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [form] = Form.useForm()
  const { mutate: createCustomer } = useCreateCustomer({
    handleSuccess: () => {
      notification.success({ message: 'Create customer successfully' })
      handleCancel()
    },
    handleError: (e) => {
      handleError('Failed to create customer', e)
    }
  })

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleCancel = useCallback(() => setIsOpen(false), [])

  const handleSubmit = (data: Customer) => {
    createCustomer(data)
  }

  return (
    <>
      <Button className='!block ml-auto mb-4' type='primary' onClick={handleOpen}>
        Create
      </Button>
      <Modal open={isOpen} onCancel={handleCancel} onOk={form.submit} width={600}>
        <h3 className='font-bold text-2xl text-center mb-4'>Add User</h3>
        <Card>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              name='name'
              label='Name'
              labelCol={SPAN_24}
              rules={[{ required: true, message: 'Please input name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='phone'
              label='Phone Number'
              labelCol={SPAN_24}
              rules={[
                { required: true, message: 'Please input phone-number!' },
                { pattern: PHONE_NUMBER_PATTERN, message: 'Input is not a phone-number!' }
              ]}
            >
              <Input />
            </Form.Item>
            <Row gutter={12}>
              <Col span={8}>
                <Form.Item name='address' label='Address' labelCol={SPAN_24} initialValue={DEFAULT_DISTRICT}>
                  <Select showSearch options={HCM_CITY_DISTRICT_OPT} defaultValue={DEFAULT_DISTRICT} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name='gender' label='Gender' labelCol={SPAN_24} initialValue={DEFAULT_GENDER}>
                  <Select defaultValue={DEFAULT_GENDER} options={GENDER_OPTIONS} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name='date_of_birth'
                  label='Date Of Birth'
                  labelCol={SPAN_24}
                  rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
                >
                  <DatePicker className='w-full' format={DATE_MONTH_YEAR} showToday={false} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Modal>
    </>
  )
}
