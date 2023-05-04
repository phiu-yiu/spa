import { FC, useCallback, useState } from 'react'
import { Button, Card, DatePicker, Form, Input, Modal, notification, Select } from 'antd'
import { PHONE_NUMBER_PATTERN, SPAN_24 } from '~/contants'
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
            <Form.Item name='name' label='Name' labelCol={SPAN_24}>
              <Input />
            </Form.Item>
            <Form.Item
              name='phone'
              label='Phone Number'
              labelCol={SPAN_24}
              rules={[{ pattern: PHONE_NUMBER_PATTERN, message: 'Please double check your phone number' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='address' label='Address' labelCol={SPAN_24} initialValue={DEFAULT_DISTRICT}>
              <Select showSearch options={HCM_CITY_DISTRICT_OPT} defaultValue={DEFAULT_DISTRICT} />
            </Form.Item>
            <Form.Item name='gender' label='Gender' labelCol={SPAN_24} initialValue={DEFAULT_GENDER}>
              <Select defaultValue={DEFAULT_GENDER} options={GENDER_OPTIONS} />
            </Form.Item>
            <Form.Item name='date_of_birth' label='Date Of Birth' labelCol={SPAN_24}>
              <DatePicker />
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  )
}