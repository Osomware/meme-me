import Link from 'next/link'
import React, { FC } from 'react'

import UserDetails from './../UserDetails'
import Button from '~/components/atoms/Buttons/ButtonAction'
import { dummySuggestedUsers } from '~/utils/constants/dummySuggetedUsers'

type SuggestedUserListProps = Record<string, unknown>

const SuggestedUserList: FC<SuggestedUserListProps> = (): JSX.Element => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-col space-y-6">
        {dummySuggestedUsers.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <UserDetails
              {...{
                avatar: item.avatar,
                name: item.name,
                username: item.username,
                size: 'sm'
              }}
            />
            <Button
              type="button"
              variant={item.isFollowed ? 'primary-outline' : 'primary'}
              className="text-xs py-1.5 font-semibold w-[74px]"
            >
              {item.isFollowed ? 'Followed' : 'Follow'}
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <Link href="#" className="text-xs font-medium text-secondary-200 hover:underline">
          Show more
        </Link>
      </div>
    </nav>
  )
}

export default SuggestedUserList
