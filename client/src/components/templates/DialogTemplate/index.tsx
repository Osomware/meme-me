import clsx from 'clsx'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, FC, ReactNode, useRef, ComponentProps } from 'react'

export type DialogTemplateProps = {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
  className?: string
} & ComponentProps<'div'>

const DialogTemplate: FC<DialogTemplateProps> = (props): JSX.Element => {
  const refDiv = useRef<HTMLDivElement>(null)
  const { isOpen, closeModal, children, className, ...rest } = props

  const handleDialogClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal} initialFocus={refDiv}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary-200/10 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto custom-scrollbar">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                {...rest}
                as="div"
                className={clsx(
                  'transform overflow-hidden rounded-lg text-left bg-white',
                  'align-middle shadow-xl shadow-secondary-100/70 transition-all w-full max-w-7xl',
                  className
                )}
                ref={refDiv}
                onClick={handleDialogClick} // Prevent click event propagation
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

DialogTemplate.defaultProps = {
  isOpen: false
}

export default DialogTemplate
