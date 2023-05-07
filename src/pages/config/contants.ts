export interface Config {
  id: string
  name: string
  address: string
  contact: string
  contact_2: string
}

export const groupServiceKey = {
  all: ['group-service'] as const,
  lists: () => [...groupServiceKey.all, 'list'] as const,
  list: (searchValue: string) => [...groupServiceKey.lists(), searchValue] as const
}

export interface CreateServicePayload {
  name: string
  price: number
  group_id: number
}

export interface Service {
  id: number
  name: string
  price: number
  group_service: {
    name: string
  }
}
