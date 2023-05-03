import { supabase } from '~/lib/supabase'
import { Id } from '~/type'

export const getConfig = async () => {
  const { data, error } = await supabase.from('configuration').select().limit(1).single()
  if (error) throw error
  return data
}

export const getCustomers = async () => {
  const { data, error } = await supabase.from('customer').select()
  if (error) throw error
  return data
}

export const getCustomerById = async (id: Id) => {
  const { data, error } = await supabase.from('customer').select().eq('id', id)
  if (error) throw error
  return data
}

export const getServices = async () => {
  const { data, error } = await supabase.from('services').select()
  if (error) throw error
  return data
}
