import clsx from 'clsx'
import React, { ComponentProps, FC } from 'react'

export type FormCheckboxProps = ComponentProps<'input'>

const FormCheckbox: FC<FormCheckboxProps> = ({ ...rest }): JSX.Element => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        {...rest}
        className={clsx('rounded text-primary focus:ring-primary', 'bg-white border-secondary-100')}
      />
      <p className="text-secondary-200 select-none">Remember me</p>
    </label>
  )
}

export default FormCheckbox
