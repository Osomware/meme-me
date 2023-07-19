import React from 'react'
import Link from 'next/link'

export const convertHashtagsToLinks = (text: string): JSX.Element => {
  const regex = /(#[^\s]+)/g
  const parts = text.split(regex)

  return (
    <p className="text-sm !text-secondary-300">
      {parts.map((part, index) => {
        if (part.match(regex) !== null) {
          const href = part.slice(1) // Remove the '#' character
          return (
            <Link
              href={`/tags/${encodeURIComponent(href)}`}
              key={index}
              className="hover:underline hover:text-primary outline-primary"
            >
              {part}
            </Link>
          )
        }

        return part
      })}
    </p>
  )
}
