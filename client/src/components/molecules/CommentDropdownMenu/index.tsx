import clsx from 'clsx'
import React, { FC } from 'react'
import toast from 'react-hot-toast'
import { Menu } from '@headlessui/react'
import { Flag, MoreHorizontal, Trash } from 'react-feather'

import useComment from '~/hooks/useComment'
import { queryClient } from '~/lib/queryClient'
import MenuTransition from '~/components/templates/MenuTransition'

type Props = {
  isPostAuthor: boolean
  commentId: string
}

const CommentDropdownMenu: FC<Props> = ({ isPostAuthor, commentId }): JSX.Element => {
  const { handleDeleteCommentMutation } = useComment()
  const handleDeleteComment = handleDeleteCommentMutation()

  const handleOpenConfirmationModal = async (): Promise<void> => {
    const result = confirm('Are you sure you want to delete?')

    if (result) {
      await handleDeleteComment.mutateAsync(
        {
          id: Number(commentId)
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['comments', 'detail'])
            toast.success('Deleted Successfully!')
          }
        }
      )
    }
  }

  const handleReportComment = (): void => {
    alert('NO ACTION YET!')
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div className={clsx('opacity-0', open ? 'opacity-100' : 'group-hover:opacity-100')}>
            <Menu.Button className="flex items-center">
              <MoreHorizontal className="w-5 h-5" />
            </Menu.Button>
          </div>
          <MenuTransition>
            <Menu.Items
              className={clsx(
                'absolute right-0 w-40 origin-top-right',
                'rounded bg-white focus:outline-none shadow-md',
                'border border-slate-100 divide-y divide-stroke-3'
              )}
            >
              <div className="py-1.5">
                <Menu.Item>
                  <button
                    type="button"
                    onClick={handleReportComment}
                    className={clsx(
                      'relative flex items-center justify-center w-full',
                      'text-secondary outline-none hover:bg-background py-1'
                    )}
                  >
                    <Flag className="absolute left-3 h-4 w-4" aria-hidden="true" />
                    <span className="text-center font-medium">Report</span>
                  </button>
                </Menu.Item>
              </div>
              {isPostAuthor && (
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
              )}
            </Menu.Items>
          </MenuTransition>
        </>
      )}
    </Menu>
  )
}

export default CommentDropdownMenu
