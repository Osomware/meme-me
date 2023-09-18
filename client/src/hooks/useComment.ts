import toast from 'react-hot-toast'
import {
  useMutation,
  useInfiniteQuery,
  UseMutationResult,
  UseInfiniteQueryResult
} from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { CommentCreateWithoutUserInput } from '~/utils/types/input'
import { CREATE_COMMENT_POST_MUTATION } from '~/graphql/mutations/comment'
import {
  COUNT_ALL_COMMENT_QUERY,
  GET_ALL_COMMENTS_BY_POST_ID
} from '~/graphql/queries/commentQuery'
import { queryClient } from '~/lib/queryClient'
import { IComment } from '~/utils/interface/Comment'

type Response = {
  id: string
  text: string
  postId: number
  userId: number
  parentId: number
  createdAt: string
  updatedAt: string
}
type CommentFetchResponse = {
  pages: Array<{
    pagePostCount: number
    findAllCommentByPostId: IComment[]
  }>
  prevOffset: number
  commentCount: number
}
type CommentFetchQueryType = UseMutationResult<
  Response,
  Error,
  CommentCreateWithoutUserInput,
  unknown
>
type CommentInfiniteQueryType = UseInfiniteQueryResult<CommentFetchResponse, Error>
type ReturnType = {
  handleComment: () => CommentFetchQueryType
  getAllCommentsByPostId: (postId: number) => CommentInfiniteQueryType
}

const useComment = (): ReturnType => {
  const handleComment = (): CommentFetchQueryType =>
    useMutation<Response, Error, CommentCreateWithoutUserInput, unknown>({
      mutationFn: async (commentInput: CommentCreateWithoutUserInput) => {
        return await gqlClient.request(CREATE_COMMENT_POST_MUTATION, {
          commentCreateWithoutUserInput: {
            post: {
              connect: {
                id: commentInput.postId
              }
            },
            text: commentInput.text
          }
        })
      },
      onSuccess: () => {
        void queryClient.invalidateQueries(['comments', 'detail'])
        void queryClient.invalidateQueries(['posts'])
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const getAllCommentsByPostId = (postId: number): CommentInfiniteQueryType =>
    useInfiniteQuery<CommentFetchResponse, Error>({
      queryKey: ['comments', 'detail', postId],
      queryFn: async ({ pageParam = 0 }) => {
        const skip = pageParam ?? undefined
        const limit = 20

        const comments: CommentFetchResponse = await gqlClient.request(
          GET_ALL_COMMENTS_BY_POST_ID,
          {
            skip,
            take: limit,
            where: {
              postId: {
                equals: postId
              }
            },
            orderBy: {
              createdAt: 'desc'
            }
          }
        )

        const count: { countAllComment: number } = await gqlClient.request(
          COUNT_ALL_COMMENT_QUERY,
          {
            where: {
              postId: {
                equals: postId
              }
            }
          }
        )

        return {
          ...comments,
          commentCount: count?.countAllComment,
          prevOffset: pageParam ?? 0
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage?.prevOffset + 15 > lastPage?.commentCount) {
          return false
        }
        return lastPage?.prevOffset + 15
      },
      enabled: !isNaN(postId)
    })

  return {
    handleComment,
    getAllCommentsByPostId
  }
}

export default useComment
