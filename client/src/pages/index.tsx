import clsx from 'clsx'
import React from 'react'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import type { NextPage, Route } from 'next'

import StoryList from '~/components/molecules/StoryList'
import HomeLayout from '~/components/templates/HomeLayout'
import useScreenCondition from '~/hooks/useScreenCondition'
import SuggestionRightBar from '~/components/organisms/SuggestionRightbar'

const Index: NextPage = (): JSX.Element => {
  const router = useRouter()
  // SCREEN SIZE CONDITION HOOKS
  const isMaxWidth = useScreenCondition('(max-width: 1380px)')

  const handleShallowRoute = (filter: string): void => {
    let route: any = {}
    switch (filter) {
      case 'following':
        route = {
          query: {
            filter: 'following'
          }
        }
        break

      case 'newest':
        route = {
          query: {
            filter: 'newest'
          }
        }
        break
      case 'popular':
        route = {
          query: {
            filter: 'popular'
          }
        }
        break
      default:
        route = {
          pathname: '/'
        }
        break
    }
    void router.replace(route ?? {})
  }

  const getActiveRoute = (route: Route): string => {
    const router = useRouter()
    const currentPath = (router.query.filter as string) ?? ''

    if (route === currentPath || (route === 'all' && isEmpty(currentPath))) {
      return 'text-primary'
    }

    return ''
  }

  return (
    <HomeLayout metaTitle="Home" className="flex">
      <article className="max-w-3xl w-full mx-auto px-8 py-6">
        {/* User Story List */}
        <StoryList />
        <hr className="my-3 border-1 border-stroke-2" />
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <h2 className="text-secondary font-bold">Feeds</h2>
          <ul className="inline-flex items-center gap-x-6 font-semibold text-secondary-100 text-sm flex-wrap gap-y-2">
            <li>
              <button
                type="button"
                className={clsx('outline-none', getActiveRoute('all'))}
                onClick={() => {
                  handleShallowRoute('all')
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                type="button"
                className={clsx('outline-none', getActiveRoute('following'))}
                onClick={() => {
                  handleShallowRoute('following')
                }}
              >
                Following
              </button>
            </li>
            <li>
              <button
                type="button"
                className={clsx('outline-none', getActiveRoute('newest'))}
                onClick={() => {
                  handleShallowRoute('newest')
                }}
              >
                Newest
              </button>
            </li>
            <li>
              <button
                type="button"
                className={clsx('outline-none', getActiveRoute('popular'))}
                onClick={() => {
                  handleShallowRoute('popular')
                }}
              >
                Popular
              </button>
            </li>
          </ul>
        </div>
      </article>
      {!isMaxWidth && (
        <aside className="border-l border-stroke-3 h-full w-80 shrink-0 sticky top-0">
          <SuggestionRightBar />
        </aside>
      )}
    </HomeLayout>
  )
}

export default Index
