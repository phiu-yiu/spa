import { useMutation, useQuery, useQueryClient } from 'react-query'
import { configQueryKey, serviceQueryKey } from '~/pages/checkout/contants/queryKeys'
import { useMemo } from 'react'

import { ReactQueryCallback } from '~/type'

import { addService, getConfig, getGroupService, updateConfig } from '~/pages/config/services'
import { Config, groupServiceKey } from '~/pages/config/contants'

export const useQueryConfig = () => {
  return useQuery<unknown, unknown, Config>(configQueryKey.details(), getConfig)
}

export const useGetConfig = () => {
  const queryClient = useQueryClient()

  return useMemo(() => {
    const data = queryClient.getQueryData<Config>(configQueryKey.details())
    if (!data) throw new Error('Config must be have')
    return data
  }, [queryClient])
}

export const useUpdateConfig = ({ handleSuccess, handleError }: ReactQueryCallback) => {
  const queryClient = useQueryClient()

  return useMutation(updateConfig, {
    onSuccess: () => {
      queryClient.invalidateQueries(configQueryKey.details())
      handleSuccess?.()
    },
    onError: (error) => handleError?.(error)
  })
}

export const useQueryGroupServices = () => {
  return useQuery<unknown, unknown, Array<{ id: number; name: string }>>(groupServiceKey.lists(), getGroupService)
}

export const useAddService = ({ handleSuccess, handleError }: ReactQueryCallback) => {
  const queryClient = useQueryClient()

  return useMutation(addService, {
    onSuccess: () => {
      queryClient.invalidateQueries(serviceQueryKey.lists())
      handleSuccess?.()
    },
    onError: (error) => handleError?.(error)
  })
}
