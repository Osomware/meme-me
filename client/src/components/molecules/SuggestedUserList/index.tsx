import React, { FC } from 'react'

import { gqlClient } from '~/lib/gqlClient'
import Spinner from '~/utils/icons/Spinner'
import { IUser } from '~/utils/interface/User'
import { ResultQuery } from '~/hooks/useFollow'
import { UserFetchReponse } from '~/hooks/useUser'
import SuggestedUserItem from './SuggestedUserItem'
import { CHECK_IS_FOLLOWED } from '~/graphql/queries/followQuery'
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useQueries
} from '@tanstack/react-query'

type SuggestedUserListProps = {
  users: IUser[]
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<UserFetchReponse, Error>>
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
}

const SuggestedUserList: FC<SuggestedUserListProps> = (props): JSX.Element => {
  const { users, fetchNextPage, hasNextPage, isFetchingNextPage } = props

  const followStatuses = useQueries({
    queries: users?.map((user) => ({
      queryKey: ['follow', user?.id],
      queryFn: async () =>
        await gqlClient.request(CHECK_IS_FOLLOWED, {
          targetUserIdInput: {
            id: user?.id
          }
        })
    }))
  })

  return (
    <nav className="mt-5">
      <ul className="flex flex-col space-y-6">
        {users.map((user, index) => {
          const followCheckResult = followStatuses[index]?.data as ResultQuery
          const isFollowed = followCheckResult?.checkUserFollowed ?? false

          return (
            <SuggestedUserItem
              key={index}
              {...{
                isFollowed,
                user
              }}
            />
          )
        })}
      </ul>
      {isFetchingNextPage ? (
        <div className="flex justify-center">
          <Spinner width={5} height={5} />
        </div>
      ) : null}

      {(hasNextPage as boolean) && (
        <div className="mt-4 text-center">
          <span
            onClick={() => {
              void fetchNextPage()
            }}
            className="text-xs cursor-pointer font-medium text-secondary-200 hover:underline"
          >
            Show more
          </span>
        </div>
      )}
    </nav>
  )
}

export default SuggestedUserList
