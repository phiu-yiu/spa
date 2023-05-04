import { CONCURRENCY_PATTERN, ONE_HUNDRED } from '~/contants'
import { NotificationPlacement } from 'antd/es/notification/interface'
import { notification } from 'antd'

const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND'
})

export const currency = formatter.format

export const discountPrice = (price: number, discountPercent: number) =>
  ((ONE_HUNDRED - discountPercent) / ONE_HUNDRED) * price

export const transform2Concurrency = <T>(number: T): string => `${number}`.replace(CONCURRENCY_PATTERN, ',')

export const capitalizeFirstLetter = (v: string): string => v.charAt(0).toUpperCase() + v.slice(1)

export const handleError = (
  title: string,
  error: unknown,
  placement: NotificationPlacement | undefined = 'topRight'
): void => {
  if (error instanceof Error) {
    notification.error({
      placement: placement,
      message: title,
      description: error.message
    })
  }
}
