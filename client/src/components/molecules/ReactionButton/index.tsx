import clsx from 'clsx'
import React, { ComponentProps, FC, ReactNode } from 'react'

import Button from '~/components/atoms/Buttons/ButtonAction'

export type Props = {
  count: number
  children: ReactNode
  direction?: string
  btnStyle?: string
} & ComponentProps<'button'>

const ReactionButton: FC<Props> = (props): JSX.Element => {
  const { count, children, direction, btnStyle, ...rest } = props

  return (
    <div
      className={clsx(
        'inline-flex items-center text-xs text-secondary-300',
        direction === 'column' ? 'flex-col gap-y-1.5' : 'flex-row gap-x-1'
      )}
    >
      <Button
        type="button"
        variant="secondary-outline"
        className={clsx('rounded-full bg-section-1 border-stroke-2 p-3 outline-none', btnStyle)}
        {...rest}
      >
        {children}
      </Button>
      <span className="font-medium">{count}</span>
    </div>
  )
}

ReactionButton.defaultProps = {
  direction: 'column'
}

export default ReactionButton
