import clsx from 'clsx'
import toast from 'react-hot-toast'
import React, { FC, useRef } from 'react'

export type CopyLinkProps = {
  url: string
}

const CopyLink: FC<CopyLinkProps> = ({ url }): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)

  const copyLink = (): void => {
    if (inputRef.current !== null) {
      inputRef.current.select()
      inputRef.current.setSelectionRange(0, 99999)
      document.execCommand('copy')
      toast.success('Link copied to clipboard!')
    }
  }

  return (
    <div
      className={clsx(
        'mt-2 bg-section-1 border border-stroke-2',
        'rounded flex items-center text-xs'
      )}
    >
      <input
        ref={inputRef}
        className="py-1.5 px-2 font-medium line-clamp-1 outline-none w-full"
        defaultValue={url}
        disabled
      />

      <button
        type="button"
        onClick={copyLink}
        className="ml-auto shrink-0 py-1.5 bg-stroke-2 px-2 font-semibold outline-none"
      >
        Copy Link
      </button>
    </div>
  )
}

export default CopyLink
