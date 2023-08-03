import clsx from 'clsx'
import { isEmpty } from 'lodash'
import dynamic from 'next/dynamic'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC, ReactNode, useState } from 'react'
import { Disclosure, Switch } from '@headlessui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { ChevronDown, ChevronLeft, MapPin, Smile } from 'react-feather'

import Carousel from './../Carousel'
import { useStore } from '~/utils/zustand'
import { useZustand } from '~/hooks/zustandHooks'
import Button from '~/components/atoms/Buttons/ButtonAction'
import DialogTemplate from '~/components/templates/DialogTemplate'
import UploadPhotoVideoIcon from '~/utils/icons/UploadPhotoVideoIcon'
import { UserPostFormValues, UserPostSchema } from '~/utils/yup-schema'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type UploadPostModalProps = {
  isOpen: boolean
  closeModal: () => void
}

const UploadPostModal: FC<UploadPostModalProps> = ({ isOpen, closeModal }): JSX.Element => {
  const user = useZustand(useStore, (state) => state.user)
  const myConfig = genConfig(user?.email as AvatarFullConfig)

  const [fileUrls, setFileUrls] = useState<string[]>([])
  const [isHideCountPostAndLike, setIsHideCountPostAndLike] = useState<boolean>(false)
  const [isTurnOffComment, setTurnOffComment] = useState<boolean>(false)

  const { reset, watch, register, setValue, handleSubmit } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(UserPostSchema)
  })

  const isFileExist = watch('files')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files
    const fileArray = files !== null ? Array.from(files) : []
    setValue('files', fileArray)

    const urls = fileArray.map((file) => URL.createObjectURL(file))
    setFileUrls(urls)
  }

  const handleReset = (): void => {
    setFileUrls([])
    reset({
      files: undefined,
      captions: '',
      location: ''
    })
  }

  const handleSubmitPost: SubmitHandler<UserPostFormValues> = async (data): Promise<void> => {
    const payload = {
      ...data,
      isHideCountPostAndLike,
      isTurnOffComment
    }
    alert(JSON.stringify(payload, null, 2))
    handleReset()
    closeModal()
  }

  return (
    <DialogTemplate
      {...{
        isOpen,
        closeModal
      }}
      className={clsx(
        'w-ful font-normal text-secondary rounded-[20px]',
        !isEmpty(isFileExist) ? 'max-w-[710px]' : 'max-w-xl'
      )}
    >
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handleSubmitPost)}
      >
        <header className="flex items-center justify-between py-2.5 px-3 border-b border-stroke-3">
          {!isEmpty(isFileExist) ? (
            <button type="button" onClick={handleReset} className="rounded-full outline-primary">
              <ChevronLeft />
            </button>
          ) : (
            <span></span>
          )}
          <h1 className="font-semibold text-center">Create new post</h1>
          {!isEmpty(isFileExist) ? (
            <button
              type="submit"
              className="outline-primary p-0.5 text-primary hover:text-primary-200 text-sm"
            >
              Share
            </button>
          ) : (
            <span></span>
          )}
        </header>
        <main
          className={clsx(
            'overflow-hidden font-light h-[550px]',
            isEmpty(isFileExist) && 'flex place-content-center'
          )}
        >
          {/* Upload Videos/Photos */}
          {isEmpty(isFileExist) && (
            <section className="flex items-center justify-center flex-col">
              <UploadPhotoVideoIcon className="text-secondary w-40 h-36" />
              <h1 className="text-xl">Drag photos and videos here</h1>
              <input
                type="file"
                id="file-upload"
                name="file-upload"
                accept="image/*, video/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple={true}
              />
              <Button
                type="button"
                variant="primary"
                onClick={() => document.getElementById('file-upload')?.click()}
                className="mt-4 text-base font-light px-3 py-1"
              >
                Select from computer
              </Button>
            </section>
          )}
          {!isEmpty(isFileExist) && (
            <section className="relative h-full flex">
              <div className="h-full w-full flex justify-center items-center max-w-sm overflow-hidden bg-black">
                <Carousel>
                  {
                    fileUrls?.map((asset, idx) => {
                      if (asset.endsWith('.mp4')) {
                        return (
                          <video key={idx} src={asset} autoPlay muted loop className="w-full">
                            Your browser does not support the video tag.
                          </video>
                        )
                      } else {
                        return (
                          <img
                            key={idx}
                            src={asset}
                            alt=""
                            className="w-full h-full flex-1 object-fill"
                          />
                        )
                      }
                    }) as ReactNode[]
                  }
                </Carousel>
              </div>
              <div className="overflow-y-auto custom-scrollbar h-[550px] w-80 p-4">
                <div className="flex items-center space-x-2">
                  <ReactNiceAvatar
                    className={clsx(
                      'w-8 h-8',
                      'border-[3px] border-white rounded-full outline-4 shadow shrink-0'
                    )}
                    {...myConfig}
                  />
                  <h2 className="font-medium">{user?.username}</h2>
                </div>
                <section className="mt-2">
                  <textarea
                    placeholder="Write a caption"
                    {...register('captions')}
                    maxLength={200}
                    className={clsx(
                      'w-full min-h-[15vh] focus:outline-none border-0 focus:ring-0 p-0 resize-none',
                      'custom-scrollbar text-sm placeholder:text-secondary-100 text-secondary'
                    )}
                  ></textarea>
                  <div className="flex items-center justify-between text-secondary-200">
                    <button type="button" className="outline-none hover:text-secondary-300">
                      <Smile className="w-6 h-6 stroke-1" />
                    </button>
                    <span className="text-xs">0/200</span>
                  </div>
                </section>
                <section className="mt-3 flex items-center justify-between text-secondary-200 space-x-2">
                  <input
                    type="text"
                    {...register('location')}
                    placeholder="Add location"
                    className={clsx(
                      'w-full p-0 m-0 border-0 text-sm focus:outline-none focus:bottom-0 focus:ring-0',
                      ' placeholder:text-secondary-200 text-secondary'
                    )}
                  />
                  <MapPin className="w-6 h-6 stroke-1" />
                </section>
                <Disclosure>
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="mt-3 flex w-full py-2 items-center justify-between outline-primary rounded-lg">
                        <h1 className={clsx('text-secondary text-sm', open ? 'font-semibold' : '')}>
                          Advanced settings
                        </h1>
                        <ChevronDown
                          className={clsx(open ? '-rotate-180 transform' : '', 'w-6 h-6')}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-sm text-gray-500 space-y-4">
                        <section>
                          <Switch.Group>
                            <div className="flex items-center justify-between">
                              <Switch.Label className="mr-2 text-secondary-300">
                                Hide like and view counts on this post
                              </Switch.Label>
                              <Switch
                                checked={isHideCountPostAndLike}
                                onChange={setIsHideCountPostAndLike}
                                className={clsx(
                                  isHideCountPostAndLike ? 'bg-primary' : 'bg-secondary-200',
                                  'relative inline-flex h-6 w-12 items-center rounded-full transition-colors',
                                  'focus:outline-none focus:ring-2 ',
                                  'focus:ring-offset-2 focus:ring-primary-200'
                                )}
                              >
                                <span
                                  className={clsx(
                                    isHideCountPostAndLike ? 'translate-x-6' : 'translate-x-1',
                                    'inline-block h-4 w-4 transform rounded-full',
                                    'bg-white transition-transform'
                                  )}
                                />
                              </Switch>
                            </div>
                          </Switch.Group>
                          <p className="mt-2 text-secondary-200 text-xs">
                            Only you will see the total number of likes and views on this post. You
                            change this alter by going to the ... menu at the top of the post. To
                            hide like counts on other’s post, go to your account settings.
                          </p>
                        </section>
                        <section>
                          <Switch.Group>
                            <div className="flex items-center justify-between">
                              <Switch.Label className="mr-2 text-secondary-300">
                                Turn off commenting
                              </Switch.Label>
                              <Switch
                                checked={isTurnOffComment}
                                onChange={setTurnOffComment}
                                className={clsx(
                                  isTurnOffComment ? 'bg-primary' : 'bg-secondary-200',
                                  'relative inline-flex h-6 w-12 items-center rounded-full transition-colors',
                                  'focus:outline-none focus:ring-2 ',
                                  'focus:ring-offset-2 focus:ring-primary-200'
                                )}
                              >
                                <span
                                  className={clsx(
                                    isTurnOffComment ? 'translate-x-6' : 'translate-x-1',
                                    'inline-block h-4 w-4 transform rounded-full',
                                    'bg-white transition-transform'
                                  )}
                                />
                              </Switch>
                            </div>
                          </Switch.Group>
                          <p className="mt-2 text-secondary-200 text-xs">
                            You can change this later by going to the ... menu at the top of your
                            post.
                          </p>
                        </section>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
          )}
        </main>
      </form>
    </DialogTemplate>
  )
}

export default UploadPostModal
