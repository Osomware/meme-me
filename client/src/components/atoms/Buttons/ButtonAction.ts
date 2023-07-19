import clsx from 'clsx'
import { w, W } from 'windstitch'

import { rounded, shadow } from '~/utils/constants/windstitchUtility'

const Button = w.button(
  clsx(
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition duration-150 ease-in-out disabled:hover:bg-none'
  ),
  {
    variants: {
      variant: {
        primary: clsx(
          'text-white bg-primary hover:bg-primary-hover focus:outline-none',
          'focus:ring-4 focus:ring-primary-100 font-medium'
        ),
        'primary-outline': clsx(
          'text-primary bg-background hover:bg-primary-100/20 focus:outline-none',
          'focus:ring-4 focus:ring-primary-100 font-semibold border border-primary-200'
        ),
        secondary: clsx(),
        'secondary-outline': clsx(
          'text-secondary border stroke-1 bg-transparent focus:ring-4 focus:ring-primary-100',
          'focus:border focus:border-secondary-100 focus:outline-none'
        )
      },
      rounded,
      shadow
    },
    defaultVariants: {
      rounded: 'default',
      variant: 'secondary',
      shadow: 'none'
    }
  }
)

export type ButtonProps = W.Infer<typeof Button>

export default Button
