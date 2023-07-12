import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

export type FormErrorMessageProps = {
  children: ReactNode
  className?: string
}

export const FormErrorMessage: FC<FormErrorMessageProps> = (props): JSX.Element => {
  const { children, className } = props
  return <p className={clsx('text-xs text-left block text-rose-600', className)}>{children}</p>
}
