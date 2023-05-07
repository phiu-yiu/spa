import { Id } from '~/type'

export interface Services {
  id: Id
  name: string
  price: number
  group_service: { name: string }
}
