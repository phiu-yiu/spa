import { useMutation, useQuery, useQueryClient } from 'react-query'
import { customerQueryKey } from '~/pages/checkout/contants/queryKeys'
import { useMemo } from 'react'
import { Id, ReactQueryCallback } from '~/type'
import { createCustomer, getCustomerById, getCustomers, searchCustomer } from '~/serivce/customer'

import { Customer } from '~/pages/customer/type'

export const useQueryCustomers = () => {
  return useQuery<unknown, unknown, Customer[]>(customerQueryKey.lists(), getCustomers)
}

export const useQueryCustomerById = (id: Id) => {
  return useQuery<Customer[]>(customerQueryKey.lists(), () => getCustomerById(id))
}

export const useGetCustomersById = () => {
  const queryClient = useQueryClient()

  return useMemo(() => {
    const data = queryClient.getQueryData<Customer>(customerQueryKey.details())
    if (!data) throw new Error('Customers must be have')
    return data
  }, [queryClient])
}

export const useCreateCustomer = ({ handleError, handleSuccess }: ReactQueryCallback) => {
  const queryClient = useQueryClient()

  return useMutation(createCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(customerQueryKey.lists())
      handleSuccess?.()
    },
    onError: (error) => {
      handleError?.(error)
    }
  })
}

export const useSearchCustomer = (searchValue: string, { handleError }: ReactQueryCallback) => {
  return useQuery<unknown, unknown, Customer[]>(
    customerQueryKey.list(searchValue),
    () => searchCustomer({ text: searchValue }),
    {
      onError: (err) => handleError?.(err)
    }
  )
}
