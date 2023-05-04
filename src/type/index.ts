export type Gender = 'male' | 'female'

export type Id = string | number | undefined

export type ReactQueryCallback = {
  handleSuccess?: () => void
  handleError?: (e: unknown) => void
}
