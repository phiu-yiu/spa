import { Dayjs } from 'dayjs'
import { Gender, Id } from '~/type'

export interface Customer {
  name: string
  address: string
  phone: string
  date_of_birth: Dayjs
  gender: Gender
  created_at?: Dayjs
  id: Id
}
