import clsx from 'clsx'
import React, { FC } from 'react'
import { Menu } from '@headlessui/react'
import { MoreHorizontal, Trash } from 'react-feather'

import MenuTransition from '~/components/templates/MenuTransition'

type Props = {
  actions: {
    handleDeletePost: () => Promise<void>
  }
}

const PostDropdownMenu: FC<Props> = (props): JSX.Element => {
  const {
    actions: { handleDeletePost }
  } = props

  const handleOpenConfirmationModal = async (): Promise<void> => {
    const result = confirm('Are you sure you want to delete?')
    if (result) {
      await handleDeletePost()
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-white rounded-full p-1">
          <MoreHorizontal />
        </Menu.Button>
      </div>
      <MenuTransition>
        <Menu.Items
          className={clsx(
            'absolute right-0 w-40 origin-top-right',
            'rounded bg-white focus:outline-none'
          )}
        >
          <div className="py-1.5">
            <Menu.Item>
              <button
                type="button"
                onClick={() => {
                  void handleOpenConfirmationModal()
                }}
                className={clsx(
                  'relative flex items-center justify-center w-full',
                  'text-rose-500 outline-none hover:bg-rose-50 py-1'
                )}
              >
                <Trash className="absolute left-3 h-4 w-4" aria-hidden="true" />
                <span className="text-center font-medium">Delete</span>
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </MenuTransition>
    </Menu>
  )
}

export default PostDropdownMenu
