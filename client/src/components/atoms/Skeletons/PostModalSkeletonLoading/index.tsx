import React, { FC } from 'react'

const PostModalSkeletonLoading: FC = (): JSX.Element => {
  return (
    <div
      role="status"
      className="relative animate-pulse w-full md:w-[450px] flex mx-auto flex-col px-4 h-[400px]"
    >
      <div className="flex items-center mt-4 space-x-3">
        <svg
          className="w-12 h-12 text-secondary-100/30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <div className="h-2.5 bg-secondary-100/30 rounded-full w-32 mb-2"></div>
          <div className="w-48 h-2 bg-secondary-100/30 rounded-full"></div>
        </div>
      </div>
      <div className="mt-4 w-80 h-2 bg-secondary-100/30 rounded-full"></div>
      <div className="mt-3 inline-flex items-center gap-x-3">
        <div className="h-8 w-8 bg-secondary-100/30 rounded-full"></div>
        <div className="h-8 w-8 bg-secondary-100/30 rounded-full"></div>
        <div className="h-8 w-8 bg-secondary-100/30 rounded-full"></div>
        <div className="h-8 w-8 bg-secondary-100/30 rounded-full"></div>
      </div>
      <div className="mt-4 w-60 h-3 bg-secondary-100/30 rounded-full"></div>
      <div className="mt-8 space-y-2">
        <div className="w-52 h-2 bg-secondary-100/30 rounded-full"></div>
        <div className="w-60 h-2.5 bg-secondary-100/30 rounded-full"></div>
        <div className="w-80 h-3 bg-secondary-100/30 rounded-full"></div>
      </div>
    </div>
  )
}

export default PostModalSkeletonLoading
