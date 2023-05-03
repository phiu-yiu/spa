import { useQuery } from 'react-query'

import { Services } from '~/pages/checkout/type'
import { serviceQueryKey } from '~/pages/checkout/contants/queryKeys'
import { getServices } from '~/pages/checkout/services'

export const useQueryServices = () => {
  return useQuery<unknown, unknown, Services[]>(serviceQueryKey.lists(), getServices)
}
