import { Button } from 'antd'
import { FC, memo } from 'react'
import { ConfirmDialog } from '~/pages/checkout/component/ConfirmDialog'

interface Props {
  onEdit: () => void
  onUpdate: () => void
  onCancel: () => void
  readOnly: boolean
  loading?: boolean
}

export const EditBtn: FC<Props> = memo(({ onEdit, readOnly, onUpdate, onCancel, loading = false }) => {
  if (readOnly) {
    return (
      <Button onClick={onEdit} type='primary'>
        Edit
      </Button>
    )
  }

  return (
    <div>
      <Button className='mr-2' onClick={onCancel} type='default'>
        Cancel
      </Button>
      <ConfirmDialog title='Do you want to update this' onClick={onUpdate}>
        <Button type='primary' loading={loading}>
          Update
        </Button>
      </ConfirmDialog>
    </div>
  )
})
