import React, { FC } from 'react'

import UserDetails from '../UserDetails'
import useFollow from '~/hooks/useFollow'
import { IUser } from '~/utils/interface/User'
import { queryClient } from '~/lib/queryClient'
import Button from '~/components/atoms/Buttons/ButtonAction'

type Props = {
  user: IUser
  isFollowed: boolean
}

const SuggestedUserItem: FC<Props> = ({ isFollowed, user }): JSX.Element => {
  // * FOLLOW HOOKS
  const { handleFollow, handleUnfollow } = useFollow()
  const followMethod = handleFollow()
  const unFollowMethod = handleUnfollow()

  const handleFollowUnfollow = async (): Promise<void> => {
    if (isFollowed) {
      await unFollowMethod.mutateAsync(
        {
          id: user?.id
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['follow', user?.id])
          }
        }
      )
    } else {
      await followMethod.mutateAsync(
        {
          id: user?.id
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['follow', user?.id])
          }
        }
      )
    }
  }

  return (
    <li className="flex items-center justify-between">
      <UserDetails
        {...{
          avatar: user.email,
          name: user.name,
          username: user.username,
          size: 'sm'
        }}
      />
      <Button
        type="button"
        onClick={() => {
          void handleFollowUnfollow()
        }}
        variant={isFollowed ? 'secondary-outline' : 'primary'}
        className="text-xs py-1.5 font-semibold w-[76px]"
      >
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    </li>
  )
}

export default SuggestedUserItem
