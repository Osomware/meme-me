import clsx from 'clsx'
import { Route } from 'next'
import { isEmpty } from 'lodash'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

type Props = Record<string, unknown>

const FeedFilterTab: FC<Props> = (): JSX.Element => {
  const router = useRouter()

  const handleShallowRoute = (filter: string): void => {
    const route: { query?: { filter: string }; pathname?: string } = {}

    switch (filter) {
      case 'following':
        route.query = { filter: 'following' }
        break
      case 'newest':
        route.query = { filter: 'newest' }
        break
      case 'popular':
        route.query = { filter: 'popular' }
        break
      default:
        route.pathname = '/'
        break
    }

    void router.replace(route)
  }

  const getActiveRoute = (route: Route): string => {
    const currentPath = (router.query.filter as string) ?? ''

    if (route === currentPath || (route === 'all' && isEmpty(currentPath))) {
      return 'text-primary'
    }

    return 'hover:text-secondary-300'
  }

  const shallowLinks = [
    {
      label: 'All',
      filter: 'all'
    },
    {
      label: 'Following',
      filter: 'following'
    },
    {
      label: 'Newest',
      filter: 'newest'
    },
    {
      label: 'Popular',
      filter: 'popular'
    }
  ]

  return (
    <ul
      className={clsx(
        'inline-flex items-center gap-x-6 font-semibold',
        ' text-secondary-100 text-sm flex-wrap gap-y-2'
      )}
    >
      {shallowLinks.map((link) => (
        <li key={link.filter}>
          <button
            type="button"
            className={clsx(
              'outline-none transition ease-in-out duration-75',
              getActiveRoute(link.filter)
            )}
            onClick={() => {
              handleShallowRoute(link.filter)
            }}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FeedFilterTab
