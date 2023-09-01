import clsx from 'clsx'
import React, { FC } from 'react'

type SkeletonProps = {
  width: string
  height: string
}

export const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
  return <div className={clsx('bg-secondary-100/30 rounded-full', width, height)}></div>
}

const ProfilePageSkeletonLoading: FC = () => {
  return (
    <div role="status" className="animate-pulse w-full">
      <header className="flex items-center space-x-2 px-4 py-3">
        <Skeleton width="w-48" height="h-2" />
      </header>
      <hr />
      <div className="flex flex-col gap-y-4 md:flex-row items-center mt-4 space-x-3 max-w-3xl w-full mx-auto px-4 md:px-8 py-8">
        <svg
          className="w-28 h-28 text-secondary-100/30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <Skeleton width="w-48" height="h-2.5" />
          <Skeleton width="w-48" height="h-2" />
        </div>
      </div>
      <hr />
      <div className="max-w-3xl w-full mx-auto">
        <div className="sm:ml-[184px] md:ml-40 py-3 flex items-center justify-evenly sm:justify-normal gap-x-4 md:gap-x-8">
          <Skeleton width="w-12" height="h-2" />
          <Skeleton width="w-12" height="h-2" />
          <Skeleton width="w-12" height="h-2" />
        </div>
      </div>
    </div>
  )
}

export default ProfilePageSkeletonLoading
