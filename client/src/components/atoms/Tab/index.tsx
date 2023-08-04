import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { ComponentProps, FC } from 'react'

export type TabProps = {
  TabIcon: any
  title: string
  href: string
  isActive: boolean
} & ComponentProps<'svg'>

const Tab: FC<TabProps> = ({ TabIcon, title, href, isActive, ...rest }): JSX.Element => {
  const router = useRouter()

  return (
    <li
      className={clsx(
        'inline-block border-t-2',
        isActive ? ' border-primary' : ' border-transparent'
      )}
    >
      <button
        type="button"
        onClick={() => {
          void router.push(href)
        }}
        className={clsx(
          'py-2 outline-none flex items-center gap-x-2 active:scale-95 active:opacity-80',
          isActive ? 'text-primary' : 'text-secondary-100'
        )}
      >
        {title === 'reels' ? (
          <TabIcon className="w-4 h-4" {...rest} />
        ) : (
          <TabIcon size="18" theme="outline" strokeWidth={2} {...rest} />
        )}
        <span className="font-bold text-sm uppercase">{title}</span>
      </button>
    </li>
  )
}

export default Tab
