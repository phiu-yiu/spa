import { supabase } from '~/lib/supabase'

export const getAllServices = async () => {
  const { data, error } = await supabase.from('services').select()
  if (error) throw error
  return data
}

export const getServices = async () => {
  const { data, error } = await supabase.from('services').select(`*, group_service(name)`)
  if (error) throw error
  return data
}
