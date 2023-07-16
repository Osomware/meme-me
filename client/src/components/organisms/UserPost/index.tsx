import clsx from 'clsx'
import Image from 'next/image'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { ShareTwo } from '@icon-park/react'
import { genConfig } from 'react-nice-avatar'
import { Heart, Bookmark } from 'react-feather'

import Messageicon from '~/utils/icons/MessageIcon'
import Button from '~/components/atoms/Buttons/ButtonAction'
import { defaultAvatarStyle } from '~/utils/constants/defaultAvatarStyle'

type UserPostProps = Record<string, unknown>

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

const UserPost: FC<UserPostProps> = (): JSX.Element => {
  const myConfig = genConfig(defaultAvatarStyle as any)

  return (
    <div className="py-6 flex items-start justify-between">
      <div className={clsx('flex flex-col sm:flex-row items-start gap-y-2 gap-x-3')}>
        <ReactNiceAvatar
          className={clsx(
            'border-[3px] border-white rounded-full outline-4 shadow shrink-0 w-12 h-12'
          )}
          {...myConfig}
        />
        <div className="w-full shrink-0 max-w-sm flex flex-col">
          <div className="leading-none flex items-center gap-x-2 text-secondary">
            <h2 className={clsx('font-bold')}>allybenwich</h2>
            <span className={clsx('text-sm')}>ally:)</span>
          </div>
          <div className="relative flex flex-col">
            <p className="text-sm text-secondary-300">
              pulchitudinous insanity. #fyp #fyp #poems #poetsoftiktok #originalpoem #original
              #acting #skit #act
            </p>
            <div className="relative w-full h-[500px] overflow-hidden border-4 border-white rounded-2xl shadow">
              <Image
                src="https://images.unsplash.com/photo-1689363199550-d0f417ed21db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                fill={true}
                className="shrink-0"
                alt=""
              />
            </div>
            <div className="absolute -right-16 bottom-0 flex flex-col space-y-2">
              {/* Heart Button */}
              <div className="inline-flex items-center flex-col text-xs space-y-1.5 text-secondary-300">
                <Button
                  type="button"
                  variant="secondary-outline"
                  className="rounded-full bg-section-1 border-stroke-2 p-3"
                >
                  <Heart fill="#586ca0" stroke="none" />
                </Button>
                <span className="font-medium">2.6M</span>
              </div>
              {/* Message Button */}
              <div className="inline-flex items-center flex-col text-xs space-y-1.5 text-secondary-300">
                <Button
                  type="button"
                  variant="secondary-outline"
                  className="rounded-full bg-section-1 border-stroke-2 p-3"
                >
                  <Messageicon className="w-5 h-5 fill-current" />
                </Button>
                <span className="font-medium">16.4K</span>
              </div>
              {/* Remarks Button */}
              <div className="inline-flex items-center flex-col text-xs space-y-1.5 text-secondary-300">
                <Button
                  type="button"
                  variant="secondary-outline"
                  className="rounded-full bg-section-1 border-stroke-2 p-3 text-secondary-300"
                >
                  <Bookmark fill="#586ca0" stroke="none" strokeLinecap="round" />
                </Button>
                <span className="font-medium">448.3K</span>
              </div>
              {/* Share Button */}
              <div className="inline-flex items-center flex-col text-xs space-y-1.5 text-secondary-300">
                <Button
                  type="button"
                  variant="secondary-outline"
                  className="rounded-full bg-section-1 border-stroke-2 p-3"
                >
                  <ShareTwo theme="filled" size={20} className="text-secondary-300" />
                </Button>
                <span className="font-medium">14.1K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Button type="button" variant="primary-outline" className="px-3.5 text-sm py-1">
          Follow
        </Button>
      </div>
    </div>
  )
}

export default UserPost
