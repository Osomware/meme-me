import clsx from 'clsx'
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

import Sidebar from '~/components/organisms/Sidebar'

type HomeLayoutProps = {
  children: ReactNode
  metaTitle: string
  className?: string
}

const HomeLayout: FC<HomeLayoutProps> = ({ children, metaTitle, className }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`Meme me - ${metaTitle}`}</title>
      </Head>
      <div className="min-h-screen h-screen bg-background flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        <main className={clsx('overflow-y-auto w-full custom-scrollbar', className)}>
          {children}
        </main>
      </div>
    </>
  )
}

export default HomeLayout
