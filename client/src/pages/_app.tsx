import clsx from 'clsx'
import React from 'react'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Montserrat } from 'next/font/google'

import '~/styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className={clsx(montserrat.className)}>
      <Toaster position="bottom-left" containerClassName="font-medium text-sm" />
      <Component {...pageProps} />
    </div>
  )
}

export default App
