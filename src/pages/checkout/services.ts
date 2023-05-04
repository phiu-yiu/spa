import { supabase } from '~/lib/supabase'

export const getConfig = async () => {
  const { data, error } = await supabase.from('configuration').select().limit(1).single()
  if (error) throw error
  return data
}

export const getServices = async () => {
  const { data, error } = await supabase.from('services').select()
  if (error) throw error
  return data
}
