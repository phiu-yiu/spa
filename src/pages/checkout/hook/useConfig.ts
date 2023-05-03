import { useQuery, useQueryClient } from 'react-query'
import { useMemo } from 'react'

import { configQueryKey } from '~/pages/checkout/contants/queryKeys'
import { getConfig } from '~/pages/checkout/services'
import { Config } from '~/pages/checkout/type'

export const useQueryConfig = () => {
  return useQuery(configQueryKey.details(), getConfig)
}

export const useGetConfig = () => {
  const queryClient = useQueryClient()

  return useMemo(() => {
    const data = queryClient.getQueryData<Config>(configQueryKey.details())
    if (!data) throw new Error('Config must be have')
    return data
  }, [queryClient])
}
