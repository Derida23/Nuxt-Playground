import { format, parseISO } from 'date-fns'

export enum DateFormat {
  DateTime = 'MMM dd, yyyy HH:mm',
  DateTime12 = 'dd MMM yyyy KK:mm aaa',
}

export const formatDate = (
  date: string,
  pattern: string = DateFormat.DateTime
) => {
  return date ? format(parseISO(date), pattern) : '-'
}

export const formatDateDistance = (
  date: string,
  pattern: string = DateFormat.DateTime
) => {
  if (date) {
    const today = format(new Date(), 'dd MMM yyyy')
    const parsingDate = format(parseISO(date), 'dd MMM yyyy')

    if (today === parsingDate) {
      return format(parseISO(date), "'Today' HH:mm")
    }
    return format(parseISO(date), pattern)
  }

  return '-'
}
