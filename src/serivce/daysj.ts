import dayjs, { Dayjs } from 'dayjs'

export const toFormat = (time: string, format: string) => dayjs(time).format(format)

export const toDayMonth = (date: Dayjs) => dayjs(date).format('DD/MM')

export const toDate = (date: Dayjs) => dayjs(date).format('DD/MM/YYYY')
