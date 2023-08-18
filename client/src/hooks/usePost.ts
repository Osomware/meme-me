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
type IParams = {
  nextCursor?: number
  prevCursor?: number
}
type PostFetchResponse = {
  pages: Array<{
    findAllPost: IPost[]
  }>
  pageParams: IParams | null
  prevOffset: number
}
type SinglePostFetchResponse = {
  findOnePost: IPost
}

type PostFetchQueryType = UseInfiniteQueryResult<PostFetchResponse, Error>
type SinglePostFetchQueryType = UseQueryResult<SinglePostFetchResponse, unknown>

type ReturnType = {
  getInfinitePosts: () => PostFetchQueryType
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
    useMutation<PostSuccessReponse, Error, PostRequestInput, unknown>({
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
      onSettled: () => {
        void queryClient.invalidateQueries({ queryKey: postKeys.all })
      },
      onError: async (error: Error) => {
        const [errorMessage] = error.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const getInfinitePosts = (): PostFetchQueryType =>
    useInfiniteQuery<PostFetchResponse, Error>({
      queryKey: postKeys.all,
      queryFn: async ({ pageParam }) => {
        const data: PostFetchResponse = await gqlClient.request(GET_ALL_POST_QUERY, {
          skip: 0,
          take: 5,
          orderBy: {
            createdAt: 'desc'
          }
        })

        console.log(pageParam)

        return {
          ...data,
          prevOffset: pageParam
        }
      },
      getNextPageParam: (lastPage) => {
        if (
          lastPage?.prevOffset + 5 >
          lastPage?.pages?.filter((p) => p.findAllPost.length).length
        ) {
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

  return {
    getSinglePost,
    getInfinitePosts,
    handlePostMutation
  }
}

export default usePost
