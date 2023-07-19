import clsx from 'clsx'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { ChevronDown, Heart } from 'react-feather'
import { AvatarConfig, genConfig } from 'react-nice-avatar'

import { defaultAvatarStyle } from '~/utils/constants/defaultAvatarStyle'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type CommentProps = Record<string, unknown>

const Comment: FC<CommentProps> = (): JSX.Element => {
  const myConfig = genConfig(defaultAvatarStyle as AvatarConfig)

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        <div className="flex items-start gap-x-2">
          <ReactNiceAvatar
            className={clsx(
              'border-[3px] border-white rounded-full outline-4',
              'w-8 h-8 shadow shrink-0'
            )}
            {...myConfig}
          />
          <div className="text-sm leading-tight">
            <h2 className="text-secondary line-clamp-1 font-semibold">nooraldeenhegazi</h2>
            <span className="text-secondary-300">
              “I&apos;m gonna make people feel okay... these words means alot...
            </span>
          </div>
        </div>
        <div className="px-2 inline-flex items-center flex-col space-y-1 text-secondary-200">
          <Heart className="w-4 h-4 cursor-pointer" />
          <span className="text-[10px]">13.7K</span>
        </div>
      </div>
      <div className="px-10 text-xs text-secondary-100 inline-flex items-center gap-x-4">
        <span>6-11</span>
        <span className="hover:underline cursor-pointer hover:text-secondary-200">Reply</span>
      </div>
      <div
        className={clsx(
          'inline-flex items-center space-x-1 px-10 text-xs text-secondary-100',
          'hover:underline cursor-pointer hover:text-secondary-200'
        )}
      >
        <span>View more replies (36)</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  )
}

export default Comment
