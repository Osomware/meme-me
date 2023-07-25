import clsx from 'clsx'
import { Icon, User } from 'react-feather'
import { capitalize, isEmpty } from 'lodash'
import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

import Input from '~/components/atoms/Input'
import { FormErrorMessage } from '~/components/atoms/FormErrorMessage'

type FormInputProps = {
  icon?: Icon
  label: string
  name: string
  type?: string
} & ComponentProps<'input'>

const FormInput: React.FC<FormInputProps> = (props): JSX.Element => {
  const Icon = props.icon as Icon
  const { label, name, type, ...rest } = props

  const {
    register,
    formState: { errors, isSubmitting }
  } = useFormContext()

  return (
    <section className="flex flex-col space-y-1">
      <div className="group relative">
        <div className="inset-y-0 flex items-center left-4 absolute">
          <Icon
            className={clsx(
              'w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary',
              !isEmpty(errors[name]) ? 'text-rose-500 group-focus-within:text-rose-500' : ''
            )}
          />
        </div>
        <Input
          type={type}
          {...rest}
          color="primary"
          className="pl-12 text-sm py-2.5 font-medium"
          {...register(name)}
          disabled={isSubmitting || isSubmitting}
          placeholder={capitalize(label)}
          iserror={!isEmpty(errors[name])}
        />
      </div>
      {!isEmpty(errors[name]) && (
        <FormErrorMessage>{errors[name]?.message as unknown as string}</FormErrorMessage>
      )}
    </section>
  )
}

FormInput.defaultProps = {
  icon: User,
  type: 'text'
}

export default FormInput
