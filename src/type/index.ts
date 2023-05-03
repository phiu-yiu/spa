import { Dayjs } from 'dayjs'

export type Gender = 'male' | 'female'

export type Id = string | number | undefined

export interface Customer {
  name: string
  address: string
  phone: string
  date_of_birth: Dayjs
  gender: Gender
  created_at: Dayjs
  id: Id
}

export type ReactQueryCallback = {
  handleSuccess?: () => void
  handleError?: (e: unknown) => void
}
