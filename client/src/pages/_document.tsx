import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body className="font-sans bg-white antialiased selection:bg-primary selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
