import clsx from 'clsx'
import { isEmpty } from 'lodash'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { Disclosure } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { ChevronDown, ChevronLeft, MapPin } from 'react-feather'
import { generateClientDropzoneAccept } from 'uploadthing/client'
import React, { FC, ReactNode, useCallback, useState } from 'react'

import Carousel from './../Carousel'
import usePost from '~/hooks/usePost'
import { useStore } from '~/utils/zustand'
import Spinner from '~/utils/icons/Spinner'
import { Emoji } from '~/utils/types/emoji'
import { useZustand } from '~/hooks/useZustand'
import { useUploadThing } from '~/utils/uploadthing'
import Button from '~/components/atoms/Buttons/ButtonAction'
import DialogTemplate from '~/components/templates/DialogTemplate'
import UploadPhotoVideoIcon from '~/utils/icons/UploadPhotoVideoIcon'
import { UserPostFormValues, UserPostSchema } from '~/utils/yup-schema'
import EmojiPopoverPicker from '~/components/molecules/EmojiPopoverPicker'
import SwitchGroupTemplate from '~/components/templates/SwitchGroupTemplate'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

export type UploadPostModalProps = {
  isOpen: boolean
  closeModal: () => void
}
const UploadPostModal: FC<UploadPostModalProps> = ({ isOpen, closeModal }): JSX.Element => {
  // * CURRENT USER HOOKS
  const user = useZustand(useStore, (state) => state.user)
  // * AVATAR CONFIG
  const myConfig = genConfig(user?.email as AvatarFullConfig)

  // * USE STATES
  const [files, setFiles] = useState<File[]>([])
  const [fileUrls, setFileUrls] = useState<string[]>([])
  const [isHideCountPostAndLike, setIsHideCountPostAndLike] = useState<boolean>(false)
  const [isTurnOffComment, setTurnOffComment] = useState<boolean>(false)

  // * REACT HOOK FORM
  const {
    reset,
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(UserPostSchema)
  })

  const isFileExist = files

  // * USE POST HOOK
  const { handlePostMutation } = usePost()
  const postMutation = handlePostMutation()

  // * UPLOAD THING HOOKS
  const { startUpload } = useUploadThing('mediaPost', {
    onClientUploadComplete: (res) => {
      const mediaUrls = res?.map((file) => file.fileUrl)
      setValue('mediaUrls', mediaUrls)
    },
    onUploadError: () => {}
  })

  // * UPLOAD THING ONDROP
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles) // * USE TO PREPARE TO UPLOAD IN `UPLOADTHING`

    // * USE TO PARTIALLY DISPLAY THE IMAGE/VIDEOS
    const urls = acceptedFiles.map((file) => URL.createObjectURL(file))
    setFileUrls(urls)
  }, [])

  const fileTypes = ['image', 'video']
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: !isEmpty(fileTypes) ? generateClientDropzoneAccept(fileTypes) : undefined
  })

  // * HANDLE TO RESET THE POST
  const handleReset = (): void => {
    setFileUrls([])
    setFiles([])
    reset({
      mediaUrls: undefined,
      captions: '',
      location: ''
    })
  }

  const handleSubmitPost: SubmitHandler<UserPostFormValues> = async (data): Promise<void> => {
    const uploads = await startUpload(files)
    if (!isEmpty(uploads)) {
      await postMutation.mutateAsync(
        {
          title: data.captions ?? '',
          mediaUrls: {
            set: data?.mediaUrls ?? []
          },
          isHideLikeAndCount: isHideCountPostAndLike,
          isTurnOffComment
        },
        {
          onSettled() {
            handleReset()
            closeModal()
          }
        }
      )
    } else {
      toast.error('Something went wrong!')
    }
    reset()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files
    const fileArray = files !== null ? Array.from(files) : []
    setFiles(fileArray) // * USE TO PREPARE TO UPLOAD IN `UPLOADTHING`

    // * USE TO PARTIALLY DISPLAY THE IMAGE/VIDEOS
    const urls = fileArray.map((file) => URL.createObjectURL(file))
    setFileUrls(urls)
  }

  // * THIS WILL AUTOMATICALLY ADD THE VALUE WITH EMOJI
  const handleEmojiSelect = (emoji: Emoji): void => {
    const captions = watch('captions')
    if (captions !== undefined) {
      setValue('captions', captions + emoji.native)
    }
  }

  return (
    <DialogTemplate
      {...{
        isOpen,
        closeModal
      }}
      className={clsx(
        'w-ful font-normal text-secondary !rounded-[20px] !overflow-visible',
        !isEmpty(isFileExist) ? 'max-w-[710px]' : 'max-w-xl'
      )}
    >
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handleSubmitPost)}
      >
        <header className="flex items-center justify-between py-2.5 px-3 border-b border-stroke-3">
          {!isEmpty(isFileExist) ? (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleReset}
              className="rounded-full outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft />
            </button>
          ) : (
            <span></span>
          )}
          <h1 className="font-semibold text-center">Create new post</h1>
          {!isEmpty(isFileExist) ? (
            <button
              type="submit"
              className={clsx(
                'outline-primary p-0.5 text-primary hover:text-primary-200 text-sm',
                isSubmitting ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''
              )}
            >
              {isSubmitting ? <Spinner width={5} height={5} /> : 'Share'}
            </button>
          ) : (
            <span></span>
          )}
        </header>
        <main
          className={clsx(
            'font-light min-h-[550px]',
            isEmpty(isFileExist) && 'flex place-content-center'
          )}
        >
          {/* Upload Videos/Photos  */}
          {isEmpty(isFileExist) && (
            <section className="flex items-center justify-center flex-col">
              <div
                {...getRootProps()}
                className="flex items-center flex-col p-4 border border-dashed border-secondary-100 rounded-lg"
              >
                <input {...getInputProps()} className="hidden" />
                <UploadPhotoVideoIcon className="text-secondary w-40 h-36" />
                <h1 className="text-xl">Drag photos and videos here</h1>
              </div>
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
                className="mt-4 text-base !font-light px-3 py-1"
              >
                Select from computer
              </Button>
            </section>
          )}
          {!isEmpty(isFileExist) && (
            <section className="relative h-full flex flex-col-reverse md:flex-row">
              <div className="min-h-[550px] rounded-bl-2xl h-full w-full flex justify-center items-center max-w-sm overflow-hidden bg-black">
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
              <div className="w-full md:w-80 p-4">
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
                <section className="relative mt-2">
                  <textarea
                    placeholder="Write a caption"
                    {...register('captions')}
                    maxLength={200}
                    className={clsx(
                      'w-full min-h-[15vh] focus:outline-none border-0 focus:ring-0 p-0 resize-none',
                      'custom-scrollbar text-sm placeholder:text-secondary-100 text-secondary',
                      isSubmitting ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''
                    )}
                    disabled={isSubmitting}
                  ></textarea>
                  <div className="flex items-center justify-between text-secondary-200">
                    <EmojiPopoverPicker
                      {...{
                        handleEmojiSelect
                      }}
                    />
                    <span className="text-xs">{`${watch('captions')?.length ?? 0}/200`}</span>
                  </div>
                </section>
                <section className="mt-3 flex items-center justify-between text-secondary-200 space-x-2">
                  <input
                    type="text"
                    {...register('location')}
                    placeholder="Add location"
                    className={clsx(
                      'w-full p-0 m-0 border-0 text-sm focus:outline-none focus:bottom-0 focus:ring-0',
                      'placeholder:text-secondary-200 text-secondary',
                      isSubmitting ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''
                    )}
                    disabled={isSubmitting}
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
                        <SwitchGroupTemplate
                          {...{
                            label: 'Turn off commenting',
                            content:
                              'Only you will see the total number of likes and views on this post. You change this alter by going to the ... menu at the top of the post. To hide like counts on other’s post, go to your account settings.',
                            checked: isHideCountPostAndLike,
                            onChange: setIsHideCountPostAndLike,
                            isActive: isHideCountPostAndLike
                          }}
                        />
                        <SwitchGroupTemplate
                          {...{
                            label: 'Hide like and view counts on this post',
                            content:
                              'You can change this later by going to the ... menu at the top of your post.',
                            checked: isTurnOffComment,
                            onChange: setTurnOffComment,
                            isActive: isTurnOffComment
                          }}
                        />
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
