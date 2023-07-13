import clsx from 'clsx'
import React from 'react'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

import '~/styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className={clsx(montserrat.className)}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
