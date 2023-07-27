import toast from 'react-hot-toast'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { SignInFormValues, SignUpFormValues } from '~/utils/yup-schema'
import { SIGN_IN_MUTATION, SIGN_UP_MUTATION } from '~/graphql/mutations/auth'

export type SignUpReturnType = UseMutationResult<any, unknown, SignUpFormValues, unknown>
export type SignInReturnType = UseMutationResult<any, unknown, SignInFormValues, unknown>

type AuthReturn = {
  handleSignUpMutation: () => SignUpReturnType
  handleSignInMutation: () => SignInReturnType
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

  const handleSignInMutation = (): SignInReturnType =>
    useMutation({
      mutationFn: async (input: SignInFormValues) => {
        return await gqlClient.request(SIGN_IN_MUTATION, { input })
      },
      onSuccess: () => {
        toast.success('Login successfully!')
      }
    })

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
