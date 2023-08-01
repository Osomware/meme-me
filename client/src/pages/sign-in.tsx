import React from 'react'
import type { NextPage } from 'next'
import AuthForm from '~/components/organisms/AuthForm'
import AuthLayout from '~/components/templates/AuthLayout'

const SignIn: NextPage = (): JSX.Element => {
  return (
    <AuthLayout metaTitle="Sign in">
      <AuthForm isSignInPage />
    </AuthLayout>
  )
}

export default SignIn
