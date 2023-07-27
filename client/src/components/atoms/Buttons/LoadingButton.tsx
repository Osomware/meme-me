import { PulseLoader } from 'react-spinners'
import React, { ComponentProps, FC, ReactNode } from 'react'

import Button from './ButtonAction'

export type BtnVariant = 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline'

export type LoadingButtonProps = {
  isLoading: boolean
  children: ReactNode
  btnVariant?: BtnVariant
  spinnerColor?: string
  type?: string
} & ComponentProps<'button'>

const LoadingButton: FC<LoadingButtonProps> = (props): JSX.Element => {
  const { isLoading, children, btnVariant, spinnerColor, type, ...rest } = props

  return (
    <Button
      {...rest}
      type={type}
      variant={btnVariant}
      className="w-full py-2.5 text-sm"
      disabled={isLoading}
    >
      {isLoading ? <PulseLoader color={spinnerColor} size={8} /> : children}
    </Button>
  )
}

LoadingButton.defaultProps = {
  type: 'submit',
  isLoading: false,
  btnVariant: 'primary',
  spinnerColor: '#e6d7ff'
}

export default LoadingButton
