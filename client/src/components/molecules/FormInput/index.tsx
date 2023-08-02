import clsx from 'clsx'
import { capitalize, isEmpty } from 'lodash'
import { useFormContext } from 'react-hook-form'
import { Eye, EyeOff, Icon, User } from 'react-feather'
import React, { ComponentProps, useState } from 'react'

import Input from '~/components/atoms/Input'
import { FormErrorMessage } from '~/components/atoms/FormErrorMessage'

type FormInputProps = {
  icon?: Icon
  label: string
  name: string
  type?: 'text' | 'submit' | 'password' | 'email'
} & ComponentProps<'input'>

const FormInput: React.FC<FormInputProps> = (props): JSX.Element => {
  const [showPass, setShowPass] = useState<boolean>(false)
  const Icon = props.icon as Icon
  const { label, name, type, ...rest } = props

  const {
    register,
    formState: { errors, isSubmitting }
  } = useFormContext()

  const handleShowPasswordToggle = (): void => {
    setShowPass(!showPass)
  }

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
          type={showPass ? 'text' : type}
          {...rest}
          color="primary"
          className={clsx('pl-12 text-sm py-2.5 font-medium', type === 'password' && 'pr-8')}
          {...register(name)}
          disabled={isSubmitting}
          placeholder={capitalize(label)}
          iserror={!isEmpty(errors[name])}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={handleShowPasswordToggle}
            className="outline-none group absolute inset-y-0 right-3 block overflow-hidden"
          >
            {showPass ? (
              <EyeOff
                className={clsx(
                  'h-4 w-4 text-secondary-200 group-hover:text-secondary-300',
                  'group-focus:text-secondary-300'
                )}
              />
            ) : (
              <Eye
                className={clsx(
                  'h-4 w-4 text-secondary-200 group-hover:text-secondary-300',
                  'group-focus:text-secondary-300'
                )}
              />
            )}
          </button>
        )}
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
