import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IPost } from '~/utils/interface/Post'
import { PostRequestInput } from '~/utils/types/input'
import { CREATE_POST_MUTATION } from '~/graphql/mutations/post'
import { GET_ALL_POST_QUERY } from '~/graphql/queries/postsQuery'

type PostMutationReturnType = UseMutationResult<
  PostSuccessReponse,
  unknown,
  PostRequestInput,
  unknown
>

type PostFetchQueryType = UseQueryResult<PostFetchResponse, unknown>

type PostFetchResponse = {
  findAllPost: IPost[]
}

type PostSuccessReponse = {
  createPost: IPost
}

type ReturnType = {
  getAllPosts: () => PostFetchQueryType
  handlePostMutation: () => PostMutationReturnType
}

const usePost = (): ReturnType => {
  const router = useRouter()

  const handlePostMutation = (): PostMutationReturnType =>
    useMutation<PostSuccessReponse, unknown, PostRequestInput, unknown>({
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

  const getAllPosts = (): PostFetchQueryType =>
    useQuery<PostFetchResponse, Error>({
      queryKey: ['posts'],
      queryFn: async () =>
        await gqlClient.request(GET_ALL_POST_QUERY, {
          orderBy: {
            createdAt: 'desc'
          }
        }),
      select: (data: PostFetchResponse) => data
    })

  return {
    getAllPosts,
    handlePostMutation
  }
}

export default usePost
