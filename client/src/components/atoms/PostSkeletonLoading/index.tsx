import React, { FC } from 'react'

const PostSkeletonLoading: FC = (): JSX.Element => {
  return (
    <div role="status" className="animate-pulse flex flex-col space-y-4">
      <div className="flex items-center justify-between">
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
        <div className="h-3 bg-secondary-100/30 rounded-full w-24"></div>
      </div>
      <div className="relative ml-14 h-[450px] bg-secondary-100/30 rounded-lg w-80">
        <div className="absolute bottom-2 -right-14 h-12 w-12 bg-secondary-100/30 rounded-full"></div>
        <div className="absolute bottom-16 -right-14 h-12 w-12 bg-secondary-100/30 rounded-full"></div>
        <div className="absolute bottom-32 -right-14 h-12 w-12 bg-secondary-100/30 rounded-full"></div>
        <div className="absolute bottom-48 -right-14 h-12 w-12 bg-secondary-100/30 rounded-full"></div>
      </div>
    </div>
  )
}

export default PostSkeletonLoading
