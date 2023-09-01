import * as yup from 'yup'

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
  mediaFiles: yup.array().of(
    yup.object().shape({
      key: yup.string().required('Media key is required'),
      url: yup.string().url().required('Media URL is required')
    })
  ),
  captions: yup.string().max(200),
  location: yup.string()
})

export type UserPostFormValues = yup.InferType<typeof UserPostSchema>
