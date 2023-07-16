import clsx from 'clsx'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'

import { DetaulAvatar } from '~/utils/constants/defaultAvatarStyle'

type Size = 'xs' | 'sm' | 'base'

type UserDetailsProps = {
  avatar: DetaulAvatar
  name: string
  username: string
  size?: Size
}

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

const UserDetails: FC<UserDetailsProps> = ({ avatar, name, username, size }): JSX.Element => {
  const myConfig = genConfig(avatar as AvatarFullConfig)

  const getAvatarSize = (size: Size): string => (size === 'base' ? 'w-12 h-12' : 'w-10 h-10')

  const getNameSize = (size: Size): string =>
    size === 'base' ? 'font-bold text-base' : 'font-semibold text-sm'

  const getUsernameSize = (size: Size): string => (size === 'base' ? 'text-sm' : 'text-xs')

  return (
    <div className={clsx('flex items-center', size === 'base' ? 'gap-x-4' : 'gap-x-2')}>
      <ReactNiceAvatar
        id={name}
        className={clsx(
          'border-[3px] border-white rounded-full outline-4 shadow shrink-0',
          getAvatarSize(size as Size)
        )}
        {...myConfig}
      />
      <div className="leading-none">
        <h2 className={clsx('text-secondary line-clamp-1', getNameSize(size as Size))}>{name}</h2>
        <span className={clsx('text-sm text-secondary-100', getUsernameSize(size as Size))}>
          {username}
        </span>
      </div>
    </div>
  )
}

UserDetails.defaultProps = {
  size: 'base'
}

export default UserDetails
