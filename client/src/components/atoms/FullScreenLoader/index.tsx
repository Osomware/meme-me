import React, { FC } from 'react'

import Spinner from '~/utils/icons/Spinner'

export type FullScreenLoaderProps = Record<string, unknown>

const FullScreenLoader: FC<FullScreenLoaderProps> = (): JSX.Element => {
  return (
    <div className="w-screen h-screen fixed">
      <div className="absolute top-64 left-1/2 -translate-x-1/2">
        <Spinner width={10} height={10} />
      </div>
    </div>
  )
}

export default FullScreenLoader
