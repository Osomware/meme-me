import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ChevronDown } from 'react-feather'
import { genConfig } from 'react-nice-avatar'
import { Disclosure } from '@headlessui/react'

import LogoIcon from '~/utils/icons/LogoIcon'
import LogoWitTitle from '~/utils/icons/LogoWithTitle'
import { sidebarMenus } from '~/utils/constants/sidebarMenu'
import UserDetails from '~/components/molecules/UserDetails'
import { defaultAvatarStyle } from '~/utils/constants/defaultAvatarStyle'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type SidebarProps = Record<string, unknown>

const Sidebar: FC<SidebarProps> = (): JSX.Element => {
  const router = useRouter()

  const myConfig = genConfig(defaultAvatarStyle as any)

  const isActiveRoute = (route: string): boolean => router.pathname === route

  return (
    <aside
      className={clsx(
        'bg-white shrink-0 flex flex-col overflow-y-auto custom-scrollbar',
        'transition-all ease-in-out duration-300 w-16 md:w-72'
      )}
    >
      {/* Logo */}
      <Link href="/" className="outline-primary">
        <LogoWitTitle className="scale-90 hidden md:block" />
        <LogoIcon className="w-24 h-24 -ml-7 mt-4 block md:hidden" />
      </Link>
      <nav>
        <h1 className="mt-8 px-8 font-extrabold text-secondary hidden md:block">Menu</h1>
        <ul className="mt-8 flex flex-col space-y-3">
          {sidebarMenus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={clsx(
                  'w-full inline-flex items-center space-x-4 py-2',
                  'transition ease-in-out duration-200 outline-primary',
                  'px-4 md:px-8',
                  isActiveRoute(item.href)
                    ? 'text-primary shadow-sm-primary'
                    : 'text-secondary-100 hover:text-secondary-300'
                )}
              >
                <item.Icon size={28} theme={isActiveRoute(item.href) ? 'filled' : 'outline'} />
                <span className="font-bold hidden md:block">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 flex flex-col items-start md:items-start">
        <div className="md:hidden block pl-3.5">
          <ReactNiceAvatar
            className={clsx('border-[3px] border-white rounded-full outline-4 shadow', 'w-9 h-9')}
            {...myConfig}
          />
        </div>
        <div className="hidden md:block w-full">
          <Disclosure defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full py-2 items-center px-8 justify-between">
                  <h1 className="font-extrabold text-secondary">Account</h1>
                  <ChevronDown className={clsx(!open ? '-rotate-90 transform' : '', 'w-5 h-5')} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-8 py-4 text-sm text-gray-500">
                  <UserDetails
                    {...{
                      avatar: defaultAvatarStyle,
                      name: 'Joshua G.',
                      username: '@acatzzk'
                    }}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
