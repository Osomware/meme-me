import {
  useQuery,
  UseQueryResult,
  useInfiniteQuery,
  UseInfiniteQueryResult
} from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IUser } from '~/utils/interface/User'
import {
  USER_QUERY,
  GET_SUGGESTED_USERS,
  COUNT_ALL_USER_EXCEPT_CURRENT
} from '~/graphql/queries/userQuery'

type Result = {
  findOneUser: IUser
}
export type UserFetchReponse = {
  pages: Array<{
    pageUserCount: number
    getSuggestedUsers: IUser[]
  }>
  prevOffset: number
  userCount: number
}
type UserQueryType = UseQueryResult<Result, unknown>
type UserFetchQueryType = UseInfiniteQueryResult<UserFetchReponse, Error>
type ReturnType = {
  getCurrentUser: (username: string, isReady?: boolean) => UserQueryType
  getSuggestedUsers: () => UserFetchQueryType
}

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: string) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (username: string) => [...userKeys.details(), username] as const
}

const useUser = (): ReturnType => {
  const getCurrentUser = (username: string, isReady?: boolean): UserQueryType =>
    useQuery<Result, Error>({
      queryKey: userKeys.detail(username),
      queryFn: async () =>
        await gqlClient.request(USER_QUERY, {
          where: {
            username: {
              equals: username
            }
          }
        }),
      select: (data: Result) => data,
      enabled: isReady as boolean
    })

  const getSuggestedUsers = (): UserFetchQueryType =>
    useInfiniteQuery<UserFetchReponse, Error>({
      queryKey: userKeys?.all,
      queryFn: async ({ pageParam = 0 }) => {
        const skip = pageParam ?? undefined
        const limit = 4

        const users: UserFetchReponse = await gqlClient.request(GET_SUGGESTED_USERS, {
          orderBy: {
            createdAt: 'desc'
          },
          skip,
          take: limit
        })

        const count: { countAllUserExceptCurrent: number } = await gqlClient.request(
          COUNT_ALL_USER_EXCEPT_CURRENT
        )

        return {
          ...users,
          userCount: count?.countAllUserExceptCurrent,
          prevOffset: pageParam ?? 0
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage?.prevOffset + 4 > lastPage?.userCount) {
          return false
        }
        return lastPage?.prevOffset + 4
      }
    })

  return {
    getCurrentUser,
    getSuggestedUsers
  }
}

export default useUser
