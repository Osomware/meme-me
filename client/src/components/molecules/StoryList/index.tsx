import clsx from 'clsx'
import React, { FC } from 'react'
import { Plus } from 'react-feather'
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar'

import { dummyUserStories } from '~/utils/constants/dummyUserStories'

type StoryListProps = Record<string, unknown>

const StoryList: FC<StoryListProps> = (): JSX.Element => {
  const config = {
    sex: 'woman',
    faceColor: '#F9C9B6',
    earSize: 'small',
    eyeStyle: 'smile',
    noseStyle: 'round',
    mouthStyle: 'peace',
    shirtStyle: 'hoody',
    glassesStyle: 'none',
    hairColor: '#D2EFF3',
    hairStyle: 'normal',
    hatStyle: 'beanie',
    hatColor: '#77311D',
    eyeBrowStyle: 'up',
    shirtColor: '#FC909F',
    bgColor: 'linear-gradient(45deg, #176fff 0%, #68ffef 100%)'
  } as const
  const myConfig = genConfig(config)

  return (
    <nav className="w-full flex items-center gap-x-6 overflow-auto py-2 custom-scrollbar">
      <div className="ml-2 inline-flex items-center flex-col gap-x-4 space-y-1">
        <div className="relative border-[2px] border-white rounded-full outline-4 shadow ring-2 ring-offset-1 ring-secondary-100 ">
          <ReactNiceAvatar
            className={clsx(
              'w-12 h-12 contrast-125',
              'brightness-50 saturate-200 backdrop-brightness-125'
            )}
            {...myConfig}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <h4 className="text-xs font-semibold text-secondary line-clamp">You</h4>
      </div>
      <ul className="mr-2 w-full flex items-center gap-x-6 pl-2">
        {dummyUserStories.map((story, index) => {
          const isViewed = story.isViewed === true
          const avatar = genConfig(story.avatar as any)
          return (
            <li key={index} className="inline-flex items-center flex-col gap-x-4 space-y-1">
              <div className="inline-block">
                <ReactNiceAvatar
                  className={clsx(
                    'border-[2px] border-white rounded-full outline-4 shadow',
                    'ring-2 ring-offset-1 w-12 h-12',
                    isViewed ? 'ring-secondary-100' : 'ring-primary '
                  )}
                  {...avatar}
                />
              </div>
              <h4 className="text-xs font-semibold text-secondary line-clamp-1 w-12 text-center">
                {story.username}
              </h4>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default StoryList
