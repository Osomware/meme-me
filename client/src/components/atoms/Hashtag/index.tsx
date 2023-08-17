import React from 'react'
import Link from 'next/link'

export type HashtagProps = {
  tag: string
}

const Hashtag: React.FC<HashtagProps> = ({ tag }): JSX.Element => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="mr-1 text-sm text-secondary-300 hover:underline hover:text-primary"
    >
      #{tag}
    </Link>
  )
}

export default Hashtag
