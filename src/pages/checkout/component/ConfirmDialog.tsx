import { Modal } from 'antd'
import { FC, memo, ReactNode } from 'react'

const { confirm } = Modal

type Props = {
  onClick: () => void
  children?: ReactNode
  title?: string
  description?: string
}

export const ConfirmDialog: FC<Props> = memo(
  ({ title = 'Do you want to do this?', description, onClick, children }) => {
    return (
      <button
        onClick={() => {
          confirm({
            title,
            content: description || null,
            onOk() {
              onClick()
            }
          })
        }}
      >
        {children}
      </button>
    )
  }
)
