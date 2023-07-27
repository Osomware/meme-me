import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import { ChevronDown } from 'react-feather'
import { Disclosure } from '@headlessui/react'
import React, { FC, useEffect, useState } from 'react'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'

import MenuOptions from './MenuOptions'
import { useStore } from '~/utils/zustand'
import LogoIcon from '~/utils/icons/LogoIcon'
import { useZustand } from '~/hooks/zustandHooks'
import LogoWitTitle from '~/utils/icons/LogoWithTitle'
import UserDetails from '~/components/molecules/UserDetails'
import { ISidebar, sidebarMenus } from '~/utils/constants/sidebarMenu'
import { defaultAvatarStyle } from '~/utils/constants/defaultAvatarStyle'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type SidebarProps = Record<string, unknown>

const Sidebar: FC<SidebarProps> = (): JSX.Element => {
  const router = useRouter()

  const [sidebarLinks, setSidebarLinks] = useState<ISidebar[]>(sidebarMenus)

  const store = useZustand(useStore, (state) => state)

  const myConfig = genConfig(defaultAvatarStyle as AvatarFullConfig)

  const isActiveRoute = (route: string): boolean => router.asPath === route

  useEffect(() => {
    const updatedSidebarLinks = sidebarLinks.map((link) => {
      if (link.name === 'Profile') {
        return {
          ...link,
          href: !isEmpty(store?.user) ? `/@${store?.user?.username ?? ''}` : ''
        }
      }
      return link
    })

    setSidebarLinks(updatedSidebarLinks)
  }, [store])

  return (
    <aside
      className={clsx(
        'relative bg-white shrink-0 flex flex-col overflow-y-auto custom-scrollbar',
        'transition-all ease-in-out duration-300 w-16 md:w-72'
      )}
    >
      {/* Logo */}
      <Link href="/" className="outline-primary">
        <LogoWitTitle className="scale-90 hidden md:block" />
        <LogoIcon className="w-24 h-24 -mx-8 mt-4 block md:hidden" />
      </Link>
      <nav>
        <h1 className="mt-8 px-9 font-extrabold text-secondary hidden md:block">Menu</h1>
        <ul className="mt-8 flex flex-col space-y-3">
          {sidebarLinks.map((item, index) => {
            const isUserProfile = item.name === 'Profile'

            return (
              <li key={index} className="px-3">
                <Link
                  href={isUserProfile ? `/@${store?.user?.username ?? ''}` : item.href}
                  className={clsx(
                    'group w-full inline-flex items-center space-x-4 py-1.5 md:py-2',
                    'transition ease-in-out duration-75 outline-primary',
                    'px-1.5 md:px-6 hover:bg-background rounded-lg',
                    isActiveRoute(item.href)
                      ? 'text-primary'
                      : 'text-secondary-100 hover:text-secondary-300'
                  )}
                >
                  <item.Icon
                    size={28}
                    theme={isActiveRoute(item.href) ? 'filled' : 'outline'}
                    className="group-hover:scale-105"
                  />
                  <span className="font-bold hidden md:block">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="mt-6 flex flex-col items-start md:items-start">
        <div className="md:hidden block pl-3.5">
          <ReactNiceAvatar
            className={clsx('border-[3px] border-white rounded-full outline-4 shadow', 'w-9 h-9')}
            {...myConfig}
          />
        </div>
        <div className="hidden md:block w-full px-3">
          <Disclosure defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full py-2 items-center px-6 justify-between outline-primary rounded-lg">
                  <h1 className="font-extrabold text-secondary">Account</h1>
                  <ChevronDown className={clsx(!open ? '-rotate-90 transform' : '', 'w-5 h-5')} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-8 py-4 text-sm text-gray-500">
                  <UserDetails
                    {...{
                      avatar: defaultAvatarStyle,
                      name: store?.user?.name ?? '',
                      username: `@${store?.user?.username ?? ''}`
                    }}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      {/* Menu Options */}
      <MenuOptions />
    </aside>
  )
}

export default Sidebar
