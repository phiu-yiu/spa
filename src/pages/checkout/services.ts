import { supabase } from '~/lib/supabase'
import { Services } from '~/pages/checkout/type'

export const getAllServices = async () => {
  const { data, error } = await supabase.from('services').select(`*, group_service(name)`)

  if (error) throw error
  return data
}

export const getServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select(`*, group_service(name)`)
    .order('id', { ascending: false })

  if (error) throw error
  return data
}

export const transformServices = (services?: Services[]) => {
  const serviceGroups = services?.reduce((groups, service) => {
    const groupName = service.group_service.name
    if (!groups[groupName]) {
      groups[groupName] = []
    }
    groups[groupName] = [
      ...groups[groupName],
      {
        key: service.id,
        label: service.name,
        value: service.name
      }
    ]
    return groups
  }, {})

  const transformedServices = []

  for (const groupName in serviceGroups) {
    const groupServices = serviceGroups[groupName]
    transformedServices.push({
      label: groupName,
      options: groupServices
    })
  }

  return transformedServices
}
