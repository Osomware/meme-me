import React from 'react'
import type { AppProps } from 'next/app'

import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />

export default App
