import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Card, Form, InputNumber, Select, Space } from 'antd'

import useDebounce from '~/hook/useDebounce'
import { transform2Concurrency } from '~/serivce'
import { ONE_HUNDRED, ONE_THOUSAND, SPAN_24, VND, VND_SUFIX } from '~/contants'
import { Label } from '~/component/Label'

import { Service, useReceiptStoreActions } from '~/pages/checkout/store/receiptStore'
import { useQueryAllServices } from '~/pages/checkout/hook/useService'
import { Services } from '~/pages/checkout/type'
import { DEFAULT_DISCOUNT, DISCOUNT_OPTS } from '~/pages/checkout/contants'
import { PrintBill } from '~/pages/checkout/component/PrintBill'
import { SearchCustomer } from '~/pages/checkout/component/SearchCustomer'

export const Action: FC = () => {
  const { addDiscount, addService, addPayment } = useReceiptStoreActions()
  const { data: services, isLoading } = useQueryAllServices()
  const [debounceMoney, setDebounceMoney] = useState<number>(0)
  const payment = useDebounce(debounceMoney)

  const [form] = Form.useForm()
  const service = Form.useWatch('name', form)

  const transformServices = useMemo(() => services?.map((item) => ({ label: item.name, value: item.name })), [services])
  const mapServices = useMemo(
    () =>
      services &&
      services?.reduce((res, cur) => {
        res[cur.name] = cur
        return res
      }, {} as Record<string, Services>),
    [services]
  )

  useEffect(() => {
    addPayment(payment * ONE_THOUSAND)
  }, [addPayment, payment])

  const onSubmit = useCallback((data: Service) => addService(data), [addService])

  const handlePayment = useCallback((v: number | null) => v && setDebounceMoney(v), [])

  const price = useMemo(() => mapServices?.[service]?.price, [service, mapServices])

  const onNormalSubmit = useCallback(() => {
    form.setFieldValue('price', price)
    form.submit()
  }, [form, price])

  const onFreeSubmit = useCallback(() => {
    form.setFieldValue('price', 0)
    form.submit()
  }, [form])

  useEffect(() => form.setFieldValue('price', price), [form, price])

  const handleDiscount = useCallback((discountNumb: number) => addDiscount(discountNumb), [addDiscount])

  const defaultValue = useMemo(() => services && services?.[0], [services])

  return (
    <div className='w-[500px] rm-antd-item-style'>
      <h3 className='font-bold text-xl mb-6'>Action</h3>
      <SearchCustomer />
      <br />
      <Card loading={isLoading}>
        <div className='space-y-6'>
          <Form
            form={form}
            onFinish={onSubmit}
            initialValues={{
              name: defaultValue?.name,
              price: defaultValue?.price
            }}
          >
            <Form.Item label={<Label>Service</Label>} labelCol={SPAN_24} className='w-full'>
              <Space.Compact className='flex'>
                <Form.Item name='name' noStyle className='w-[550px]'>
                  <Select defaultValue={defaultValue?.name} options={transformServices} />
                </Form.Item>
                <Form.Item name='price' label='Pricing' labelCol={SPAN_24} noStyle>
                  <InputNumber addonAfter={VND} disabled formatter={(value) => transform2Concurrency(value)} />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Form>
          <div className='space-y-2 '>
            <Space className='flex justify-end'>
              <Button className='px-8' type='primary' ghost onClick={onFreeSubmit}>
                Free
              </Button>
              <Button className='px-8' type='primary' onClick={onNormalSubmit}>
                Add
              </Button>
            </Space>
          </div>
          <div className='flex-between space-x-8'>
            <div className='w-1/2'>
              <Label>Discount</Label>
              <Select
                defaultValue={DEFAULT_DISCOUNT}
                options={DISCOUNT_OPTS}
                onSelect={handleDiscount}
                className='w-full'
              />
            </div>
            <div className='w-1/2'>
              <Label>Payment</Label>
              <InputNumber
                min={0}
                onChange={handlePayment}
                className='!w-full'
                addonAfter={VND_SUFIX}
                step={ONE_HUNDRED}
                formatter={(value) => transform2Concurrency(value)}
              />
            </div>
          </div>
          <PrintBill />
        </div>
      </Card>
    </div>
  )
}
