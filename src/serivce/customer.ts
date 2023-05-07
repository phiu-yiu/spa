import { supabase } from '~/lib/supabase'
import { Id } from '~/type'
import { Customer } from '~/pages/customer/type'

const CUSTOMER = 'customer'

export const getCustomers = async () => {
  const { data, error } = await supabase.from(CUSTOMER).select().order('id', { ascending: false })

  if (error) throw error
  return data
}

export const getCustomerById = async (id: Id) => {
  const { data, error } = await supabase.from(CUSTOMER).select().eq('id', id)
  if (error) throw error
  return data
}

export const createCustomer = async (createData: Customer) => {
  const { error, data } = await supabase.from(CUSTOMER).insert(createData)
  if (error) return error
  return data
}

export const searchCustomer = async (value: { text: string }) => {
  const { error, data } = await supabase
    .from(CUSTOMER)
    .select('phone, name, id, gender')
    .or(`name.like.${value.text}%,phone.like.${value.text}%`)
    .limit(10)
  if (error) return error
  return data
}
