import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IUser } from '~/utils/interface/User'
import { USER_QUERY } from '~/graphql/queries/userQuery'

type Result = {
  findOneUser: IUser
}

type UserQueryType = UseQueryResult<Result, unknown>

type ReturnType = {
  getCurrentUser: (username: string, isReady?: boolean) => UserQueryType
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

  return {
    getCurrentUser
  }
}

export default useUser
