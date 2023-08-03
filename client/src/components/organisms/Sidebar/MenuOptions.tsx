import clsx from 'clsx'
import React, { FC } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Popover } from '@headlessui/react'
import { deleteCookie } from 'cookies-next'
import Spinner from '~/utils/icons/Spinner'
import { HamburgerButton } from '@icon-park/react'
import { AlertOctagon, Clock, Moon, Settings } from 'react-feather'

import { useStore } from '~/utils/zustand'
import PopoverTransition from '~/components/templates/PopoverTransition'

export type MenuOptionsProps = Record<string, unknown>

const MenuOptions: FC<MenuOptionsProps> = (): JSX.Element => {
  const router = useRouter()
  const store = useStore((state) => state)

  const handleLogout = (): void => {
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
    store.clearUser()
    void router.push('/sign-in')
    toast.success('Logout successfully!')
  }

  return (
    <div className="mt-auto mb-5 relative group px-3">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(
                'flex items-center space-x-4 px-1.5 md:px-6 py-1.5 md:py-2.5 w-full',
                'text-secondary-200 hover:text-secondary-300',
                'hover:bg-background rounded-lg transition',
                'ease-in-out duration-75 outline-primary',
                open ? 'text-secondary-300 bg-background' : ''
              )}
            >
              <HamburgerButton size={28} theme="outline" className="group-hover:scale-105" />
              <span className="font-bold hidden md:block">Menu</span>
            </Popover.Button>
            <PopoverTransition>
              <Popover.Panel className="fixed left-3 bottom-16 md:bottom-20 w-full z-50 max-w-xs">
                <div className="overflow-hidden rounded-2xl shadow-default-primary border border-stroke-1">
                  <div className="bg-[#FEFEFF]">
                    <div className="text-sm text-secondary-300 font-medium">
                      <ul className="py-4 px-4 space-y-2">
                        <li>
                          <button
                            type="button"
                            className={clsx(
                              'w-full text-left px-4 hover:bg-background py-2.5 rounded-lg',
                              'outline-primary flex items-center space-x-2 hover:text-secondary'
                            )}
                          >
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className={clsx(
                              'w-full text-left px-4 hover:bg-background py-2.5 rounded-lg',
                              'outline-primary flex items-center space-x-2 hover:text-secondary'
                            )}
                          >
                            <Clock className="w-4 h-4" />
                            <span>Your activity</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className={clsx(
                              'w-full text-left px-4 hover:bg-background py-2.5 rounded-lg',
                              'outline-primary flex items-center space-x-2 hover:text-secondary'
                            )}
                          >
                            <Moon className="w-4 h-4" />
                            <span>Switch appearance</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className={clsx(
                              'w-full text-left px-4 hover:bg-background py-2.5 rounded-lg',
                              'outline-primary flex items-center space-x-2 hover:text-secondary'
                            )}
                          >
                            <AlertOctagon className="w-4 h-4" />
                            <span>Report a problem</span>
                          </button>
                        </li>
                      </ul>
                      <hr />
                      <div className="px-4 py-2">
                        <button
                          type="button"
                          onClick={handleLogout}
                          className={clsx(
                            'w-full text-left px-4 hover:bg-background py-2.5 rounded-lg',
                            'outline-primary hover:text-secondary'
                          )}
                        >
                          {store.isAuthenticated ? 'Logout' : <Spinner width={5} height={5} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </PopoverTransition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default MenuOptions
