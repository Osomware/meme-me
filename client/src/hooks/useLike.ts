import toast from 'react-hot-toast'
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { TargetPostInput } from '~/utils/types/input'
import { CHECK_IS_USER_LIKE_POST } from '~/graphql/queries/likeQuery'
import { LIKE_POST_MUTATION, UNLIKE_POST_MUTATION } from '~/graphql/mutations/like'

type Response = {
  id: number
  postId: number
  userId: number
  createdAt: string
  updatedAt: string
}

export type ResultUserLikePostQuery = {
  checkUserLikePost: boolean
}
type LikeFetchQueryType = UseMutationResult<Response, Error, TargetPostInput, unknown>
type CheckIsUserLikePost = UseQueryResult<ResultUserLikePostQuery, Error>

type ReturnType = {
  handleLike: () => LikeFetchQueryType
  handleUnlike: () => LikeFetchQueryType
  checkIsUserLikePost: (id: number) => CheckIsUserLikePost
}

const useLike = (): ReturnType => {
  const handleLike = (): LikeFetchQueryType =>
    useMutation<Response, Error, TargetPostInput, unknown>({
      mutationFn: async (targetPostInput: TargetPostInput) => {
        return await gqlClient.request(LIKE_POST_MUTATION, {
          targetPostInput: {
            id: targetPostInput.id
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const handleUnlike = (): LikeFetchQueryType =>
    useMutation<Response, Error, TargetPostInput, unknown>({
      mutationFn: async (targetPostInput: TargetPostInput) => {
        return await gqlClient.request(UNLIKE_POST_MUTATION, {
          targetPostInput: {
            id: targetPostInput.id
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const checkIsUserLikePost = (id: number): CheckIsUserLikePost =>
    useQuery<ResultUserLikePostQuery, Error>({
      queryKey: ['like', id],
      queryFn: async () => {
        return await gqlClient.request(CHECK_IS_USER_LIKE_POST, {
          targetPostInput: {
            id
          }
        })
      },
      enabled: !isNaN(id)
    })

  return {
    handleLike,
    handleUnlike,
    checkIsUserLikePost
  }
}

export default useLike
