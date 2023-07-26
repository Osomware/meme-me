import clsx from 'clsx'
import React from 'react'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Montserrat } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'

import '~/styles/globals.css'
import { queryClient } from '~/lib/queryClient'

const montserrat = Montserrat({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className={clsx(montserrat.className)}>
      <Toaster position="top-center" containerClassName="font-medium text-sm" />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}

export default App
