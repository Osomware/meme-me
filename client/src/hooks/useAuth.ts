import toast from 'react-hot-toast'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { SIGN_UP_MUTATION } from '~/graphql/mutations/auth'
import { SignInFormValues, SignUpFormValues } from '~/utils/yup-schema'

export type SignUpReturnType = UseMutationResult<any, unknown, SignUpFormValues, unknown>

type AuthReturn = {
  handleSignUpMutation: () => SignUpReturnType
  handleSignInMutation: SubmitHandler<SignInFormValues>
  handleSignOutMutation: () => void
}

const useAuth = (): AuthReturn => {
  const handleSignUpMutation = (): SignUpReturnType =>
    useMutation({
      mutationFn: async (input: SignUpFormValues) => {
        return await gqlClient.request(SIGN_UP_MUTATION, { input })
      },
      onSuccess: () => {
        toast.success('Created account successfully!')
      }
    })

  const handleSignInMutation = (): void => {}

  const handleSignOutMutation = (): void => {
    alert('Sign Out')
  }

  return {
    handleSignUpMutation,
    handleSignInMutation,
    handleSignOutMutation
  }
}

export default useAuth
