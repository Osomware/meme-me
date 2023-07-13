import clsx from 'clsx'
import React, { FC } from 'react'
import { Search } from 'react-feather'

type SearchFieldProps = Record<string, unknown>

const SearchField: FC<SearchFieldProps> = (): JSX.Element => {
  return (
    <div
      className={clsx(
        'relative flex items-center bg-section-1 rounded-full text-sm',
        'text-secondary-100 border border-stroke-2',
        'focus-within:ring-2 focus-within:ring-primary',
        'transition ease-in-out duration-200 py-6'
      )}
    >
      <div className="absolute left-5 inset-y-0 flex items-center focus-within:text-primary">
        <Search className="w-4 h-4" />
      </div>
      <input
        className={clsx(
          'outline-none placeholder:text-secondary-200',
          'pl-12 bg-transparent text-secondary font-medium',
          'absolute inset-0 py-6 placeholder:font-normal'
        )}
        placeholder="Search"
      />
    </div>
  )
}

export default SearchField
