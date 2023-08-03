import * as yup from 'yup'
import { isEmpty } from 'lodash'

export const SignUpSchema = yup.object().shape({
  name: yup.string().required().min(3).label('Name'),
  username: yup.string().required().min(4).max(25).label('Username'),
  email: yup.string().email().required().label('Email'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
})

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password')
})

export type SignUpFormValues = yup.InferType<typeof SignUpSchema>
export type SignInFormValues = yup.InferType<typeof SignInSchema>

export const UserPostSchema = yup.object().shape({
  files: yup.array().of(
    yup
      .mixed()
      .test(
        'fileType',
        'Only images and videos are allowed',
        (value) =>
          !isEmpty(value) ||
          (value instanceof File &&
            ['image/jpeg', 'image/png', 'video/mp4', 'video/quicktime'].includes(value.type))
      )
      .required('Files are required')
  ),
  captions: yup.string().required('Captions are required'),
  location: yup.string()
})

export type UserPostFormValues = yup.InferType<typeof UserPostSchema>
