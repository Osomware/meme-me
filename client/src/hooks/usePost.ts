import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { PostRequestInput } from '~/utils/types/input'
import { CREATE_POST_MUTATION } from '~/graphql/mutations/post'

type PostMutationReturnType = UseMutationResult<
  PostSuccessReponse,
  unknown,
  PostRequestInput,
  unknown
>

type PostSuccessReponse = {
  createPost: {
    id: string
    title: string
    mediaUrls: string[]
    createdAt: string
    updatedAt: string
    user: {
      id: number
      name: string
      username: string
    }
  }
}

type ReturnType = {
  handlePostMutation: () => PostMutationReturnType
}

const usePost = (): ReturnType => {
  const router = useRouter()

  const handlePostMutation = (): PostMutationReturnType =>
    useMutation({
      mutationFn: async (createPostInput: PostRequestInput) => {
        return await gqlClient.request(CREATE_POST_MUTATION, {
          createPostInput
        })
      },
      onSuccess: async (data: PostSuccessReponse) => {
        const username = data.createPost.user.username
        const postId = data.createPost.id
        void router.push(`/@${username}/posts/${postId}`)
        toast.success('Successfully Posted!')
      },
      onError: () => {}
    })

  return {
    handlePostMutation
  }
}

export default usePost
