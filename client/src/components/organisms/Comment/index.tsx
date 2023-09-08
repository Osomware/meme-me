import clsx from 'clsx'
import moment from 'moment'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { Heart } from 'react-feather'
import { AvatarConfig, genConfig } from 'react-nice-avatar'

import { IComment } from '~/utils/interface/Comment'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type CommentProps = {
  comment: IComment
}

const Comment: FC<CommentProps> = (props): JSX.Element => {
  const {
    comment: { text, createdAt, user }
  } = props

  const myConfig = genConfig(user?.email as AvatarConfig)

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-x-2">
          <ReactNiceAvatar
            className={clsx(
              'border-[3px] border-white rounded-full outline-4',
              'w-8 h-8 shadow shrink-0'
            )}
            {...myConfig}
          />
          <div className="text-sm leading-tight">
            <h2 className="text-secondary line-clamp-1 font-semibold">{user?.username}</h2>
            <span className="text-secondary-300">{text}</span>
          </div>
        </div>
        <div className="px-2 inline-flex items-center flex-col space-y-1 text-secondary-200">
          <Heart className="w-4 h-4 cursor-pointer" />
          <span className="text-[10px]">0</span>
        </div>
      </div>
      <div className="px-10 text-xs text-secondary-100 inline-flex items-center gap-x-4">
        <span>{moment(createdAt).format('M-D')}</span>
        <span className="hover:underline cursor-pointer hover:text-secondary-200">Reply</span>
      </div>
      {/* <div
        className={clsx(
          'inline-flex items-center space-x-1 px-10 text-xs text-secondary-100',
          'hover:underline cursor-pointer hover:text-secondary-200'
        )}
      >
        <span>View more reply</span>
        <ChevronDown className="w-4 h-4" />
      </div> */}
    </div>
  )
}

export default Comment
