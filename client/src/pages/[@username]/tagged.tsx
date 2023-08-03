import React from 'react'
import { NextPage } from 'next'
import { Image } from 'react-feather'
import { useRouter } from 'next/router'

import ProfileLayout from '~/components/templates/ProfileLayout'

const Tagged: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query

  return (
    <ProfileLayout metaTitle={`${username?.toString() ?? ''}/tagged`}>
      <div className="mt-8 max-w-sm mx-auto flex flex-col items-center space-y-6">
        <div className="rounded-full border-2 border-secondary-300 p-4">
          <Image className="w-6 h-6 stroke-1 text-secondary-300" />
        </div>
        <h1 className="text-2xl font-bold text-secondary-300">Photos of you</h1>
        <p className="text-sm  text-secondary-200">
          When people tag you in photos, they&apos;ll appear here.
        </p>
      </div>
    </ProfileLayout>
  )
}

export default Tagged
