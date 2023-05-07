import { supabase } from '~/lib/supabase'
import { Config, CreateServicePayload } from '~/pages/config/contants'

export const getConfig = async () => {
  const { data, error } = await supabase.from('configuration').select().limit(1).single()
  if (error) throw error
  return data
}

export const updateConfig = async (data: Config) => {
  const { data: result, error } = await supabase.from('configuration').update(data).eq('id', 1)
  if (error) throw error
  return result
}

export const getGroupService = async () => {
  const { data: result, error } = await supabase.from('group_service').select()
  if (error) throw error
  return result
}
export const addService = async (data: CreateServicePayload) => {
  const { data: result, error } = await supabase.from('services').insert(data)
  if (error) throw error
  return result
}
