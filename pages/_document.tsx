import { Html, Head, Main, NextScript} from 'next/document'
import React from 'react'
import { Header } from '../components/Header/Header'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}