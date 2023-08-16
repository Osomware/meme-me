import clsx from 'clsx'
import { Switch } from '@headlessui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'

export type SwitchGroupTemplateProps = {
  label: string
  checked: boolean
  onChange: Dispatch<SetStateAction<boolean>>
  isActive: boolean
  content: string
}

const SwitchGroupTemplate: FC<SwitchGroupTemplateProps> = (props): JSX.Element => {
  const { label, checked, onChange, isActive, content } = props

  return (
    <section>
      <Switch.Group>
        <div className="flex items-center justify-between">
          <Switch.Label className="mr-2 text-secondary-300 font-medium">{label}</Switch.Label>
          <Switch
            checked={checked}
            onChange={onChange}
            className={clsx(
              isActive ? 'bg-primary' : 'bg-secondary-200',
              'relative inline-flex h-6 w-12 items-center rounded-full transition-colors',
              'focus:outline-none focus:ring-2 shrink-0',
              'focus:ring-offset-2 focus:ring-primary-200'
            )}
          >
            <span
              className={clsx(
                isActive ? 'translate-x-7' : 'translate-x-1',
                'inline-block h-4 w-4 transform rounded-full',
                'bg-white transition-transform font-normal'
              )}
            />
          </Switch>
        </div>
      </Switch.Group>
      <p className="mt-2 text-secondary-300 text-xs font-normal">{content}</p>
    </section>
  )
}

export default SwitchGroupTemplate
