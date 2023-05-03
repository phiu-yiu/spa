import { FC, PropsWithChildren } from 'react'

export const Label: FC<PropsWithChildren> = ({ children }) => {
  return <div className='block font-bold'>{children}</div>
}
