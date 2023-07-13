import clsx from 'clsx'
import { w, W } from 'windstitch'

import { rounded } from '~/utils/constants/windstitchUtility'

const Input = w.input(
  clsx(
    'outline-none disabled:cursor-not-allowed disabled:opacity-50',
    'border border-slate-300 focus:outline-none w-full',
    'transition ease-in-out duration-150'
  ),
  {
    variants: {
      color: {
        primary: clsx(
          'bg-section-2 border border-stroke-1 focus:bg-white focus:ring-primary',
          'placeholder:text-secondary-200 placeholder:text-sm text-secondary',
          'focus:border-primary'
        )
      },
      rounded
    },
    defaultVariants: {
      rounded: 'default',
      color: 'primary'
    }
  }
)

export type InputProps = W.Infer<typeof Input>

export default Input
