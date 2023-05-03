export const configQueryKey = {
  all: ['config'] as const,
  details: () => [...configQueryKey.all, 'detail'] as const,
  detail: (id: number) => [...configQueryKey.details(), id] as const
}

export const customerQueryKey = {
  all: ['customer'] as const,
  lists: () => [...customerQueryKey.all, 'list'] as const,
  details: () => [...customerQueryKey.all, 'detail'] as const,
  detail: (id: number) => [...customerQueryKey.details(), id] as const
}

export const serviceQueryKey = {
  all: ['service'] as const,
  lists: () => [...serviceQueryKey.all, 'list'] as const,
  details: () => [...serviceQueryKey.all, 'detail'] as const,
  detail: (id: number) => [...serviceQueryKey.details(), id] as const
}
