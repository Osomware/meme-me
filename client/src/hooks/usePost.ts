import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IPost } from '~/utils/interface/Post'
import { PostRequestInput } from '~/utils/types/input'
import { CREATE_POST_MUTATION } from '~/graphql/mutations/post'
import { GET_ALL_POST_QUERY, GET_ONE_POST_QUERY } from '~/graphql/queries/postsQuery'

type PostMutationReturnType = UseMutationResult<
  PostSuccessReponse,
  unknown,
  PostRequestInput,
  unknown
>
type PostSuccessReponse = {
  createPost: IPost
}
type PostFetchResponse = {
  findAllPost: IPost[]
}
type SinglePostFetchResponse = {
  findOnePost: IPost
}

type PostFetchQueryType = UseQueryResult<PostFetchResponse, unknown>
type SinglePostFetchQueryType = UseQueryResult<SinglePostFetchResponse, unknown>

type ReturnType = {
  getAllPosts: () => PostFetchQueryType
  getSinglePost: (id: number) => SinglePostFetchQueryType
  handlePostMutation: () => PostMutationReturnType
}

const usePost = (): ReturnType => {
  const router = useRouter()

  const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (filters: string) => [...postKeys.lists(), { filters }] as const,
    details: () => [...postKeys.all, 'detail'] as const,
    detail: (id: number) => [...postKeys.details(), id] as const
  }

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
      queryKey: postKeys.all,
      queryFn: async () =>
        await gqlClient.request(GET_ALL_POST_QUERY, {
          orderBy: {
            createdAt: 'desc'
          }
        }),
      select: (data: PostFetchResponse) => data
    })

  const getSinglePost = (id: number): SinglePostFetchQueryType =>
    useQuery<SinglePostFetchResponse, Error>({
      queryKey: postKeys.detail(id),
      queryFn: async () =>
        await gqlClient.request(GET_ONE_POST_QUERY, {
          where: {
            id: {
              equals: id
            }
          }
        }),
      select: (data: SinglePostFetchResponse) => data,
      enabled: !isNaN(id)
    })

  return {
    getAllPosts,
    getSinglePost,
    handlePostMutation
  }
}

export default usePost