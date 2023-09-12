import { isEmpty } from 'lodash'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import {
  useQuery,
  useMutation,
  UseQueryResult,
  useInfiniteQuery,
  UseMutationResult,
  UseInfiniteQueryResult
} from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IPost } from '~/utils/interface/Post'
import { queryClient } from '~/lib/queryClient'
import { DeletePostInput, PostRequestInput } from '~/utils/types/input'
import { CREATE_POST_MUTATION, DELETE_POST_MUTATION } from '~/graphql/mutations/post'
import {
  GET_ALL_POST_QUERY,
  GET_ONE_POST_QUERY,
  COUNT_ALL_POST_QUERY,
  GET_ALL_POST_BY_USERNAME_QUERY
} from '~/graphql/queries/postsQuery'

type PostMutationReturnType = UseMutationResult<
  PostSuccessReponse,
  unknown,
  PostRequestInput,
  unknown
>
type DeleteMutationReturnType = UseMutationResult<
  DeleteSuccessReponse,
  unknown,
  DeletePostInput,
  unknown
>
type PostSuccessReponse = {
  createPost: IPost
}
type DeleteSuccessReponse = {
  deletePost: {
    id: number
  }
}
type PostFetchResponse = {
  pages: Array<{
    pagePostCount: number
    findAllPost: IPost[]
  }>
  prevOffset: number
  postCount: number
}
type SinglePostFetchResponse = {
  findOnePost: IPost
}
type PostFetchByUsernameResponse = {
  findAllPostByUsername: IPost[]
}

type PostFetchQueryType = UseInfiniteQueryResult<PostFetchResponse, Error>
type PostFetchByUsernameQueryType = UseQueryResult<PostFetchByUsernameResponse, unknown>
type SinglePostFetchQueryType = UseQueryResult<SinglePostFetchResponse, unknown>
type DeleteFetchQueryType = DeleteMutationReturnType
export type PostFilter = 'All' | 'Following' | 'Newest' | 'Popular'

type ReturnType = {
  getAllPosts: (filter: PostFilter) => PostFetchQueryType
  getSinglePost: (id: number) => SinglePostFetchQueryType
  handlePostMutation: () => PostMutationReturnType
  getAllPostsByUsername: (username: string) => PostFetchByUsernameQueryType
  handleDeletePostMutation: () => DeleteFetchQueryType
}

const usePost = (): ReturnType => {
  const router = useRouter()

  const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (filters: PostFilter) =>
      [...postKeys.lists(), { filters: filters.toLowerCase() }] as const,
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
      onSettled: (data) => {
        void queryClient.invalidateQueries({ queryKey: postKeys.all })
        void queryClient.invalidateQueries({
          queryKey: ['posts', 'profile', data?.createPost?.user?.username]
        })
      }
    })

  const getAllPosts = (filter: PostFilter): PostFetchQueryType =>
    useInfiniteQuery<PostFetchResponse, Error>({
      queryKey: postKeys.list(isEmpty(filter) ? 'All' : filter),
      queryFn: async ({ pageParam = 0 }) => {
        const skip = pageParam ?? undefined
        const limit = 5

        const posts: PostFetchResponse = await gqlClient.request(GET_ALL_POST_QUERY, {
          orderBy: {
            createdAt: 'desc'
          },
          skip,
          take: limit,
          filter: isEmpty(filter) ? undefined : filter
        })

        const count: { countAllPost: number } = await gqlClient.request(COUNT_ALL_POST_QUERY)

        return {
          ...posts,
          postCount: count?.countAllPost,
          prevOffset: pageParam ?? 0
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage?.prevOffset + 5 > lastPage?.postCount) {
          return false
        }
        return lastPage?.prevOffset + 5
      }
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

  const getAllPostsByUsername = (username: string): PostFetchByUsernameQueryType =>
    useQuery<PostFetchByUsernameResponse, Error>({
      queryKey: ['posts', 'profile', username],
      queryFn: async () =>
        await gqlClient.request(GET_ALL_POST_BY_USERNAME_QUERY, {
          where: {
            user: {
              is: {
                username: {
                  equals: username
                }
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }),
      select: (data: PostFetchByUsernameResponse) => data
    })

  const handleDeletePostMutation = (): DeleteFetchQueryType =>
    useMutation<DeleteSuccessReponse, Error, DeletePostInput, unknown>({
      mutationFn: async (deletePostInput: DeletePostInput) => {
        return await gqlClient.request(DELETE_POST_MUTATION, {
          deletePostInput: {
            id: deletePostInput.id
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  return {
    getAllPosts,
    getSinglePost,
    handlePostMutation,
    getAllPostsByUsername,
    handleDeletePostMutation
  }
}

export default usePost
