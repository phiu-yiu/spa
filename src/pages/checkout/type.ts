import { Id } from '~/type'

export interface Config {
  name: string
  address: string
  contact: string
  contact_2: string
}

export interface Services {
  id: Id
  name: string
  price: number
}
