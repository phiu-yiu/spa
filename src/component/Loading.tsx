import { FC, memo } from 'react'
import { Spin, SpinProps } from 'antd'
import cx from 'classnames'

export const Loading: FC<SpinProps> = memo(({ children, className, size = 'large', ...props }) => {
  return (
    <Spin className={cx('flex-center h-[70vh] w-full', className)} size={size} {...props}>
      {children}
    </Spin>
  )
})
