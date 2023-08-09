import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { Popover } from '@headlessui/react'
import { WinkingFace } from '@icon-park/react'
import React, { ComponentProps, FC } from 'react'
import data from '@emoji-mart/data/sets/14/facebook.json'

import { Emoji } from '~/utils/types/emoji'
import PopoverTransition from '~/components/templates/PopoverTransition'

const EmojiPicker = dynamic(async () => await import('@emoji-mart/react'), {
  ssr: false
})

type Props = {
  handleEmojiSelect: (emoji: Emoji) => void
  panelPosition?: string
} & ComponentProps<'div'>

const EmojiPopoverPicker: FC<Props> = (props): JSX.Element => {
  const { handleEmojiSelect, panelPosition, ...rest } = props

  return (
    <Popover as="div" className="">
      {({ open }) => (
        <>
          <Popover.Button
            type="button"
            className={classNames(
              'text-slate-400 outline-none hover:text-slate-500',
              'transition duration-150 ease-in-out',
              open ? '!text-slate-500' : ''
            )}
          >
            <WinkingFace theme="outline" size="22" strokeWidth={2} />
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0" />
          <PopoverTransition>
            <Popover.Panel>
              <div className={classNames('absolute z-40', panelPosition)} {...rest}>
                <EmojiPicker data={data} onEmojiSelect={handleEmojiSelect} theme="light" />
              </div>
            </Popover.Panel>
          </PopoverTransition>
        </>
      )}
    </Popover>
  )
}

EmojiPopoverPicker.defaultProps = {
  panelPosition: 'right-0'
}

export default EmojiPopoverPicker
