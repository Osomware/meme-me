import Link from 'next/link'
import { isEmpty } from 'lodash'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC, useEffect, useState } from 'react'
import { AtSign, Lock, Mail, User } from 'react-feather'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import useAuth from '~/hooks/useAuth'
import Alert from '~/components/atoms/Alert'
import FormInput from '~/components/molecules/FormInput'
import FormCheckbox from '~/components/molecules/FormCheckbox'
import LoadingButton from '~/components/atoms/Buttons/LoadingButton'
import { SignInSchema, SignUpFormValues, SignUpSchema } from '~/utils/yup-schema'

export type AuthFormProps = {
  isSignInPage?: boolean
}

const AuthForm: FC<AuthFormProps> = (props): JSX.Element => {
  const isSignInPage = props.isSignInPage === true

  // States
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Auth Hooks
  const { handleSignInMutation, handleSignUpMutation } = useAuth()
  const signUpAction = handleSignUpMutation()
  const signInAction = handleSignInMutation()
  const { isLoading: isLoadingSignUp, isSuccess: isSuccessSignUp } = signUpAction
  const { isLoading: isLoadingSignIn, isSuccess: isSuccessSignIn } = signInAction

  const methods = useForm<SignUpFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(isSignInPage ? SignInSchema : SignUpSchema) as any
  })

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods

  const handleAuthSubmit: SubmitHandler<SignUpFormValues> = async (data): Promise<void> => {
    try {
      if (isSignInPage) {
        await signInAction.mutateAsync({
          email: data.email,
          password: data.password
        })
      } else {
        await signUpAction.mutateAsync({
          name: data.name,
          email: data.email,
          username: data.username,
          password: data.password
        })
      }
    } catch (error: any) {
      error?.response?.errors?.forEach((err: any) => {
        setErrorMessage(err?.message)
      })
    }
  }

  useEffect(() => {
    if (isSuccessSignUp || isSuccessSignIn) {
      reset()
      setErrorMessage('')
    }
  }, [isSuccessSignUp, isSuccessSignIn])

  return (
    <FormProvider {...methods}>
      {!isEmpty(errorMessage) && (
        <div className="pb-4">
          <Alert type="error" message={errorMessage} />
        </div>
      )}
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handleAuthSubmit)}
        className="flex flex-col space-y-6"
      >
        <div className="space-y-5">
          {!isSignInPage && (
            <>
              {/* Name Field */}
              <FormInput type="text" name="name" label="Name" icon={User} disabled={isSubmitting} />
              {/* Username Field */}
              <FormInput
                type="text"
                name="username"
                label="Username"
                icon={AtSign}
                disabled={isSubmitting}
              />
            </>
          )}
          {/* Email Field */}
          <FormInput type="email" name="email" label="Email" icon={Mail} disabled={isSubmitting} />
          {/* Password Field */}
          <FormInput
            type="password"
            name="password"
            label="Password"
            icon={Lock}
            disabled={isSubmitting}
          />
        </div>
        {isSignInPage && (
          <div className="flex items-center justify-between text-sm">
            <FormCheckbox disabled={isSubmitting} />
            <Link
              href="#"
              className="font-medium select-none text-fancyBlue hover:underline outline-primary"
            >
              Forgot Password?
            </Link>
          </div>
        )}
        <LoadingButton isLoading={isSubmitting || isLoadingSignUp || isLoadingSignIn}>
          {isSignInPage ? 'Sign In' : 'Sign Up'}
        </LoadingButton>
      </form>
    </FormProvider>
  )
}

AuthForm.defaultProps = {
  isSignInPage: false
}

export default AuthForm
