import clsx from 'clsx'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { Heart } from 'react-feather'
import { AvatarConfig, genConfig } from 'react-nice-avatar'

import { IComment } from '~/utils/interface/Comment'
import { formatTimeDifference } from '~/helpers/formatTimeDifference'
import CommentDropdownMenu from '~/components/molecules/CommentDropdownMenu'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type CommentProps = {
  comment: IComment
  isPostAuthor: boolean
}

const Comment: FC<CommentProps> = (props): JSX.Element => {
  const {
    isPostAuthor,
    comment: { id, text, createdAt, user }
  } = props

  const myConfig = genConfig(user?.email as AvatarConfig)

  return (
    <div className="flex flex-col space-y-2">
      <div className="group flex">
        <div className="flex  gap-x-1">
          <ReactNiceAvatar
            className={clsx(
              'border-[3px] border-white rounded-full outline-4',
              'w-8 h-8 shadow shrink-0'
            )}
            {...myConfig}
          />
          <div className="text-sm leading-tight bg-background p-2 rounded-lg">
            <h2 className="text-secondary line-clamp-1 font-semibold">{user?.username}</h2>
            <span className="text-secondary-300 shrink-0">{text}</span>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-center pl-2">
          <CommentDropdownMenu
            {...{
              isPostAuthor,
              commentId: id
            }}
          />
          <div className="px-2 inline-flex items-center flex-col text-secondary-200">
            <Heart className="w-4 h-4 cursor-pointer" />
            <span className="text-[10px]">0</span>
          </div>
        </div>
      </div>
      <div className="px-10 text-xs text-secondary-100 inline-flex items-center gap-x-4">
        <span>{formatTimeDifference(createdAt)}</span>
        <span className="hover:underline cursor-pointer hover:text-secondary-200">Reply</span>
      </div>
    </div>
  )
}

export default Comment
