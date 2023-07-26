import Link from 'next/link'
import { isEmpty } from 'lodash'
import { PulseLoader } from 'react-spinners'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC, useEffect, useState } from 'react'
import { AtSign, Lock, Mail, User } from 'react-feather'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import useAuth from '~/hooks/useAuth'
import Alert from '~/components/atoms/Alert'
import FormInput from '~/components/molecules/FormInput'
import Button from '~/components/atoms/Buttons/ButtonAction'
import FormCheckbox from '~/components/molecules/FormCheckbox'
import { SignInSchema, SignUpFormValues, SignUpSchema } from '~/utils/yup-schema'

export type AuthFormProps = {
  isSignInPage?: boolean
}

const AuthForm: FC<AuthFormProps> = (props): JSX.Element => {
  const isSignInPage = props.isSignInPage === true

  // States
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Auth Hooks
  const { handleSignUpMutation } = useAuth()
  const signUpAction = handleSignUpMutation()
  const { isLoading: isLoadingSignUp, isSuccess: isSuccessSignUp } = signUpAction

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
        alert(JSON.stringify(data, null, 2))
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
    if (isSuccessSignUp) {
      reset()
      setErrorMessage('')
    }
  }, [isSuccessSignUp])

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
              <FormInput type="text" name="name" label="Name" icon={User} />
              {/* Username Field */}
              <FormInput type="text" name="username" label="Username" icon={AtSign} />
            </>
          )}
          {/* Email Field */}
          <FormInput type="email" name="email" label="Email" icon={Mail} />
          {/* Password Field */}
          <FormInput type="password" name="password" label="Password" icon={Lock} />
        </div>
        {isSignInPage && (
          <div className="flex items-center justify-between text-sm">
            <FormCheckbox />
            <Link
              href="#"
              className="font-medium select-none text-fancyBlue hover:underline outline-primary"
            >
              Forgot Password?
            </Link>
          </div>
        )}
        <Button
          type="submit"
          variant="primary"
          className="w-full py-2.5 text-sm"
          disabled={isSubmitting || isLoadingSignUp}
        >
          {isSubmitting || isLoadingSignUp ? (
            <PulseLoader color="#e6d7ff" size={8} />
          ) : isSignInPage ? (
            'Sign In'
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

AuthForm.defaultProps = {
  isSignInPage: false
}

export default AuthForm
