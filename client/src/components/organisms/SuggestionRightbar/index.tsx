import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Remind, UploadOne } from '@icon-park/react'

import useUser from '~/hooks/useUser'
import Spinner from '~/utils/icons/Spinner'
import Alert from '~/components/atoms/Alert'
import { IUser } from '~/utils/interface/User'
import UploadPostModal from './../UploadPostModal'
import SearchField from '~/components/molecules/SearchField'
import SuggestedUserList from '~/components/molecules/SuggestedUserList'

type SuggestionRightBarProps = Record<string, unknown>

const SuggestionRightBar: FC<SuggestionRightBarProps> = (): JSX.Element => {
  // * USER HOOKS
  const { getSuggestedUsers } = useUser()
  const {
    data: suggestedUserData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = getSuggestedUsers()

  const suggestedUsers =
    suggestedUserData?.pages.reduce((acc: IUser[], page: any) => {
      const pagePosts = page.getSuggestedUsers as IUser[]
      return [...acc, ...pagePosts]
    }, []) ?? []

  const [isUploadModal, setIsUploadModal] = useState<boolean>(false)

  const businessLinks = [
    { label: 'About', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Popular', href: '#' },
    { label: 'Language', href: '#' }
  ]

  const handleOpenUploadModal = (): void => {
    setIsUploadModal(!isUploadModal)
  }

  return (
    <div className="flex flex-col overflow-y-auto custom-scrollbar h-full">
      <div className="px-4 py-6 h-full">
        {/* User Options  */}
        <header className="flex items-center gap-x-2">
          {/* Search Field */}
          <div className="flex-1">
            <SearchField />
          </div>
          {/* Notification Bell Button */}
          <button
            className={clsx(
              'bg-section-1 p-4 rounded-full border border-stroke-2',
              'focus:ring-2 focus:ring-primary transition ease-in-out',
              'duration-200 text-secondary-100 focus:text-primary',
              'outline-none'
            )}
          >
            <Remind size={20} theme="filled" />
          </button>
          {/* Upload Button */}
          <button
            type="button"
            onClick={handleOpenUploadModal}
            className={clsx(
              'bg-fancyBlue text-white p-4 rounded-full',
              'transition ease-in-out duration-200 focus:ring-2',
              'focus:ring-sky-500 outline-none'
            )}
          >
            <UploadOne size={20} theme="filled" />
          </button>

          {/* Open Upload Modal */}
          <UploadPostModal
            {...{
              isOpen: isUploadModal,
              closeModal: handleOpenUploadModal
            }}
          />
        </header>
        {isError && (
          <div className="py-4">
            <Alert type="error" message="Something went wrong fetching data..." />
          </div>
        )}
        {isLoading ? (
          <div className="flex justify-center py-6">
            <Spinner height={6} width={6} />
          </div>
        ) : (
          <main>
            <header className="flex items-center justify-between mt-6 text-sm">
              <h2 className="text-secondary font-bold">Suggestions for you</h2>
              <Link href="#" className="text-primary font-semibold hover:underline">
                See All
              </Link>
            </header>
            {/* List of User */}
            <SuggestedUserList
              {...{
                users: suggestedUsers,
                fetchNextPage,
                hasNextPage,
                isFetchingNextPage
              }}
            />
            <hr className="my-4" />
            <h2 className="text-secondary font-bold text-sm">Latest Post Activity</h2>
            <div className="border-[3px] mt-4 border-white shadow rounded-xl">
              <Image
                src="https://blog.hubspot.com/hs-fs/hubfs/best-time-to-post-on-instagram-3.jpg?width=595&height=400&name=best-time-to-post-on-instagram-3.jpg"
                width={300}
                height={300}
                quality={50}
                priority={true}
                className="overflow-hidden rounded-xl"
                alt=""
              />
            </div>
          </main>
        )}
      </div>
      <div className="mb-auto">
        <ul className="flex items-center gap-x-2 text-xs text-secondary-100 px-4 py-2">
          {businessLinks.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
              {index < businessLinks.length - 1 && <li>•</li>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SuggestionRightBar
