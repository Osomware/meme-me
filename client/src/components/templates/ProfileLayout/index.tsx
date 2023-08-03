import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { ArrowLeft, Settings } from 'react-feather'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'

import Tab from '~/components/atoms/Tab'
import { useStore } from '~/utils/zustand'
import { useZustand } from '~/hooks/useZustand'
import HomeLayout from '~/components/templates/HomeLayout'
import useScreenCondition from '~/hooks/useScreenCondition'
import { profileTabs } from '~/utils/constants/profileTabs'
import Button from '~/components/atoms/Buttons/ButtonAction'
import SuggestionRightBar from '~/components/organisms/SuggestionRightbar'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type ProfileLayoutProps = {
  metaTitle: string
  children: ReactNode
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ metaTitle, children }): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query
  const user = useZustand(useStore, (state) => state.user)
  const myConfig = genConfig(user?.email as AvatarFullConfig)

  // SCREEN SIZE CONDITION HOOKS
  const isMaxWidth = useScreenCondition('(max-width: 1380px)')

  const handleGoBackRoute = (): void => {
    router.back()
  }

  return (
    <HomeLayout
      {...{
        metaTitle
      }}
      className="flex"
    >
      <div className="flex-1">
        <header className="border-b border-stroke-3 py-2 flex items-center space-x-2 px-4 text-secondary">
          <button
            type="button"
            onClick={handleGoBackRoute}
            className="outline-primary rounded-full py-1.5 px-1"
          >
            <ArrowLeft className="stroke-4 w-5 h-5" />
          </button>
          <h1 className="uppercase font-bold text-sm">{user?.name}</h1>
        </header>
        <article className="">
          <section className="max-w-3xl w-full mx-auto px-4 md:px-8 py-6 text-secondary">
            <div className="flex flex-col md:flex-row items-start gap-y-4 gap-x-6 md:gap-x-12">
              <ReactNiceAvatar
                className={clsx(
                  'w-36 h-36',
                  'border-[3px] border-white rounded-full outline-4 shadow shrink-0'
                )}
                {...myConfig}
              />
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex items-center space-x-6">
                  <h2 className="font-semibold text-base">{user?.username}</h2>
                  <Button
                    type="button"
                    variant="secondary-outline"
                    rounded="md"
                    className="font-bold text-sm px-2 py-1"
                  >
                    Edit Profile
                  </Button>
                  <button type="button">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" className="inline-flex items-center space-x-1 hover:underline">
                    <h4 className="font-bold">0</h4>
                    <span>posts</span>
                  </a>
                  <a href="#" className="inline-flex items-center space-x-1 hover:underline">
                    <h4 className="font-bold">31</h4>
                    <span>followers</span>
                  </a>
                  <a href="#" className="inline-flex items-center space-x-1 hover:underline">
                    <h4 className="font-bold">30</h4>
                    <span>following</span>
                  </a>
                </div>
                <div className="flex flex-col space-y-0.5">
                  <h1 className="font-bold uppercase">{user?.name}</h1>
                  <p className="text-secondary-300">I think therefore I am</p>
                  <a href="#" className="font-semibold hover:underline text-primary">
                    joshuagalit.ga
                  </a>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="max-w-3xl w-full mx-auto">
            <nav>
              <ul className="sm:ml-[184px] md:ml-56 flex items-center justify-evenly sm:justify-normal gap-x-4 md:gap-x-8">
                {profileTabs.map(({ title, href, Icon }, index) => {
                  const newHref: string = `/${username as string}${href}`
                  const isActive = router.asPath.toString() === newHref
                  return (
                    <Tab
                      key={index}
                      {...{
                        title,
                        href: newHref,
                        isActive,
                        TabIcon: Icon
                      }}
                    />
                  )
                })}
              </ul>
            </nav>
            {children}
          </section>
        </article>
      </div>
      {!isMaxWidth && (
        <aside className="ml-auto border-l border-stroke-3 h-full w-80 shrink-0 sticky top-0 mx-1">
          <SuggestionRightBar />
        </aside>
      )}
    </HomeLayout>
  )
}

export default ProfileLayout
