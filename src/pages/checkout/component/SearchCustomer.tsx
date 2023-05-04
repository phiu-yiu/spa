import { FC, useCallback, useMemo, useState } from 'react'
import { Card, Select } from 'antd'
import { Label } from '~/component/Label'
import { useSearchCustomer } from '~/hook/useCustomer'
import { handleError } from '~/serivce'
import useDebounce from '~/hook/useDebounce'
import { useCustomerStoreActions } from '~/pages/checkout/store/customerStore'

export const SearchCustomer: FC = () => {
  const [value, setValue] = useState<string>('')
  const searchValue = useDebounce(value)
  const { addCustomer } = useCustomerStoreActions()
  const { data, isLoading } = useSearchCustomer(searchValue, { handleError: (e) => handleError('Failed to search', e) })

  const handleSearch = useCallback((v: string) => setValue(v), [])
  const handleSelect = useCallback((v: string) => addCustomer(data?.[v]), [addCustomer, data])
  const handleClear = useCallback(() => addCustomer(undefined), [addCustomer])

  const customerOpt = useMemo(
    () => data?.map((item, index) => ({ label: `${item.name} - ${item.phone}`, value: index })),
    [data]
  )

  return (
    <Card>
      <Label>Customer</Label>
      <Select
        className='w-full mt-2'
        showSearch
        options={customerOpt}
        loading={isLoading}
        onSearch={handleSearch}
        onSelect={handleSelect}
        onClear={handleClear}
        allowClear
        filterOption={false}
      />
    </Card>
  )
}
