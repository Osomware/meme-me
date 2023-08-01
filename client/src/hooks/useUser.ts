import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { IUser } from '~/utils/interface/User'
import { USER_QUERY } from '~/graphql/queries/userQuery'

type Result = {
  findOne: IUser
}

type UserQueryType = UseQueryResult<Result, unknown>

type ReturnType = {
  getCurrentUser: (id: number, isReady?: boolean) => UserQueryType
}

const useUser = (): ReturnType => {
  const getCurrentUser = (id: number, isReady?: boolean): UserQueryType =>
    useQuery<Result, Error>({
      queryKey: ['USER_QUERY'],
      queryFn: async () => await gqlClient.request(USER_QUERY, { id }),
      select: (data: Result) => data,
      enabled: isReady as boolean
    })

  return {
    getCurrentUser
  }
}

export default useUser
