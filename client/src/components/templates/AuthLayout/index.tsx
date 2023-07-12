import clsx from 'clsx'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React, { FC, ReactNode } from 'react'
import { Carousel } from 'react-responsive-carousel'

import GoogleIcon from '~/utils/icons/GoogleIcon'
import FacebookIcon from '~/utils/icons/FacebookIcon'
import LogoWitTitle from '~/utils/icons/LogoWithTitle'
import useScreenCondition from '~/hooks/useScreenCondition'
import { carouselImages } from '~/utils/constants/carouselImages'

export type AuthLayoutProps = {
  children: ReactNode
  metaTitle: string
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, metaTitle }): JSX.Element => {
  // SCREEN SIZE CONDITION HOOKS
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  return (
    <>
      <Head>
        <title>{`Meme me - ${metaTitle}`}</title>
      </Head>
      <main className="flex min-h-screen h-screen overflow-hidden">
        {!isMediumScreen && (
          <section className="h-full bg-primary-hover flex-1 flex items-center justify-center">
            <div className="w-full max-w-md select-none space-y-6">
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showThumbs={false}
                showStatus={false}
              >
                {carouselImages.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    width={500}
                    height={500}
                    placeholder="blur"
                    loading="lazy"
                    blurDataURL={item}
                    onError={() => '/images/image-error.png'}
                    alt=""
                  />
                ))}
              </Carousel>
              <div className="text-center space-y-1.5">
                <h1 className="text-xl font-semibold text-white">Connect with every application</h1>
                <p className="text-primary-100 text-xs">
                  be part of the community where laughter should be sharable
                </p>
              </div>
            </div>
          </section>
        )}
        <section className="w-full md:w-[50%] overflow-auto">
          <div className="h-full flex items-start justify-center flex-col px-8">
            <div className="max-w-md w-full mx-auto inline-flex flex-col space-y-10">
              {/* Information */}
              <div className="space-y-6">
                <LogoWitTitle className="w-52 -mx-9 -my-4" />
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl text-secondary">Log in to your Account</h2>
                  <p className="text-secondary-200 text-sm font-medium">
                    Welcome back! Select method to log in:
                  </p>
                </div>
              </div>
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-x-4 text-sm font-medium">
                <button
                  type="button"
                  className={clsx(
                    'relative inline-flex items-center justify-center border border-stroke-2',
                    'outline-primary py-3.5 px-4 rounded transition ease-in-out duration-150',
                    'hover:shadow-default-primary active:scale-95'
                  )}
                >
                  <div className="left-3 absolute flex items-center">
                    <GoogleIcon className="w-7 h-7" />
                  </div>
                  <span className="text-center font-medium text-secondary">Google</span>
                </button>
                <button
                  type="button"
                  className={clsx(
                    'relative inline-flex items-center justify-center border border-stroke-2',
                    'outline-primary py-3.5 px-4 rounded transition ease-in-out duration-150',
                    'hover:shadow-default-primary active:scale-95'
                  )}
                >
                  <div className="absolute left-3 flex items-center">
                    <FacebookIcon className="w-7 h-7 scale-150" />
                  </div>
                  <span className="text-center font-medium text-secondary">Facebook</span>
                </button>
              </div>
              {/* Separator */}
              <div className="relative border-b border-stroke-2 flex items-center justify-center">
                <span className="absolute bg-white px-2 text-sm text-secondary-100 font-medium">
                  or continue with email
                </span>
              </div>

              {/* Form */}
              <div>{children}</div>

              {/* Question */}
              <div className="text-center text-sm font-medium text-secondary-200 space-x-2">
                <span>Don&apos;t have an account?</span>
                <Link href="#" className="text-fancyBlue hover:underline outline-primary">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AuthLayout
