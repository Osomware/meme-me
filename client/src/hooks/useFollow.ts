import toast from 'react-hot-toast'
import { useQuery, useMutation, UseQueryResult, UseMutationResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { TargetUserIdInput } from '~/utils/types/input'
import { CHECK_IS_FOLLOWED } from '~/graphql/queries/followQuery'
import { FOLLOW_MUTATION, UNFOLLOW_MUTATION } from '~/graphql/mutations/follow'

type Response = {
  id: number
  followerId: number
  followingId: number
}

export type ResultQuery = {
  checkUserFollowed: boolean
}

type FollowFetchQueryType = UseMutationResult<Response, unknown, TargetUserIdInput, unknown>

type CheckIsFollowedQueryType = UseQueryResult<ResultQuery, Error>

type ReturnType = {
  handleFollow: () => FollowFetchQueryType
  handleUnfollow: () => FollowFetchQueryType
  checkIsFollowed: (id: number) => CheckIsFollowedQueryType
}

const useFollow = (): ReturnType => {
  const handleFollow = (): FollowFetchQueryType =>
    useMutation<Response, Error, TargetUserIdInput, unknown>({
      mutationFn: async (targetUserIdInput: TargetUserIdInput) => {
        return await gqlClient.request(FOLLOW_MUTATION, {
          targetUserIdInput: {
            id: targetUserIdInput.id
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const handleUnfollow = (): FollowFetchQueryType =>
    useMutation<Response, Error, TargetUserIdInput, unknown>({
      mutationFn: async (targetUserIdInput: TargetUserIdInput) => {
        return await gqlClient.request(UNFOLLOW_MUTATION, {
          targetUserIdInput: {
            id: targetUserIdInput.id
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  const checkIsFollowed = (id: number): CheckIsFollowedQueryType =>
    useQuery<ResultQuery, Error>({
      queryKey: ['follow', id],
      queryFn: async () => {
        return await gqlClient.request(CHECK_IS_FOLLOWED, {
          targetUserIdInput: {
            id
          }
        })
      },
      enabled: !isNaN(id)
    })

  return {
    handleFollow,
    handleUnfollow,
    checkIsFollowed
  }
}

export default useFollow
