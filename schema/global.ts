import * as yup from 'yup'

export const emailSchema = yup.string().required().email().label('email')
export const passwordSchema = yup.string().required().min(8).label('password')
