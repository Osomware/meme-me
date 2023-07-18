import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Username: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query

  return (
    <div>
      <h2>This is the Username/ID</h2>
      <h1>User: {username}</h1>
      {/* Rest of your component */}
    </div>
  )
}

export default Username
