import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import ReelsIcon from '~/utils/icons/ReelsIcon'
import ProfileLayout from '~/components/templates/ProfileLayout'

const Reels: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query

  return (
    <ProfileLayout metaTitle={`${username?.toString() ?? ''}/reels`}>
      <div className="mt-8 max-w-sm mx-auto flex flex-col items-center space-y-6">
        <div className="rounded-full border-2 border-secondary-300 p-4">
          <ReelsIcon className="w-6 h-6 stroke-1 text-secondary-300" />
        </div>
        <h1 className="text-2xl font-bold text-secondary-300">No Reels Yet</h1>
      </div>
    </ProfileLayout>
  )
}

export default Reels
