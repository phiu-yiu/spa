import { useQuery } from 'react-query'

import { Services } from '~/pages/checkout/type'
import { serviceQueryKey } from '~/pages/checkout/contants/queryKeys'
import { getAllServices, getServices } from '~/pages/checkout/services'

export const useQueryAllServices = () => {
  return useQuery<unknown, unknown, Services[]>(serviceQueryKey.lists(), getAllServices)
}

export const useQueryServices = () => {
  return useQuery<unknown, unknown, Services[]>(serviceQueryKey.lists(), getServices)
}
