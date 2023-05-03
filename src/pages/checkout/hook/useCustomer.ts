import { useQuery, useQueryClient } from 'react-query'
import { customerQueryKey } from '~/pages/checkout/contants/queryKeys'
import { getCustomerById, getCustomers } from '~/pages/checkout/services'
import { useMemo } from 'react'
import { Customer, Id } from '~/type'

export const useQueryCustomers = () => {
  return useQuery<Customer[]>(customerQueryKey.lists(), getCustomers)
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
