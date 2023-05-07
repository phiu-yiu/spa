import { FC, useCallback, useMemo, useState } from 'react'
import { Card, Form, Input, notification } from 'antd'
import cx from 'classnames'

import { SPAN_24 } from '~/contants'
import { Label } from '~/component/Label'
import { handleError } from '~/serivce'
import { EditBtn } from '~/component/EditBtn'

import { useQueryConfig, useUpdateConfig } from '~/pages/config/hook'
import { Config } from '~/pages/config/contants'

export const InformationForm: FC = () => {
  const [readOnly, setReadOnly] = useState(true)
  const { data, isLoading } = useQueryConfig()
  const [form] = Form.useForm()
  const { mutate: updateConfig, isLoading: updating } = useUpdateConfig({
    handleSuccess: () => {
      notification.success({ message: 'Update information successfully!' })
      handleCancel()
    },
    handleError: (e) => handleError('Failed to update information', e)
  })

  const handleEdit = useCallback(() => setReadOnly(false), [])
  const handleCancel = useCallback(() => setReadOnly(true), [])

  const intiValue = useMemo(
    () => ({
      name: data?.name,
      address: data?.address,
      contact: data?.contact,
      contact_2: data?.contact_2
    }),
    [data]
  )

  const onSubmit = (data: Config) => {
    updateConfig(data)
  }

  return (
    <div className='rm-antd-item-style'>
      <Card loading={isLoading} className={cx({ 'readonly-antd': readOnly })}>
        <div className='flex-between pb-4 bg-white'>
          <h4 className='font-bold text-xl'>Information</h4>
          <EditBtn readOnly={readOnly} onEdit={handleEdit} onCancel={handleCancel} onUpdate={form.submit} />
        </div>
        <Card>
          <Form form={form} onFinish={onSubmit} initialValues={intiValue} disabled={readOnly || updating}>
            <Form.Item name='name' label={<Label>Name</Label>} labelCol={SPAN_24}>
              <Input />
            </Form.Item>
            <Form.Item name='address' label={<Label>Address</Label>} labelCol={SPAN_24}>
              <Input />
            </Form.Item>
            <Form.Item name='contact' label={<Label>Contact</Label>} labelCol={SPAN_24}>
              <Input />
            </Form.Item>
            <Form.Item name='contact_2' label={<Label>Contact 2</Label>} labelCol={SPAN_24}>
              <Input />
            </Form.Item>
          </Form>
        </Card>
      </Card>
    </div>
  )
}
