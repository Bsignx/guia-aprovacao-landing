import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#11111" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Guia da Aprovação - Seja um Policial Militar agora mesmo!."
        description="Se você é um concurseiro e sonha em ser policial, atenção!!!
A policia militar do estado de São Paulo pode ser uma ótima oportunidade. Com 2 editais por ano a PM-SP é, sem dúvidas a melhor opção para quem deseja alcançar o tão sonhado cargo público."
        canonical=""
        openGraph={{
          url: 'https://guia-aprovacao.netlify.app/',
          title: 'Guia da Aprovação - Seja um Policial Militar agora mesmo!.',
          description:
            'Se você é um concurseiro e sonha em ser policial, atenção!!! A policia militar do estado de São Paulo pode ser uma ótima oportunidade.Com 2 editais por ano a PM- SP é, sem dúvidas a melhor opção para quem deseja alcançar o tão sonhado cargo público.',
          images: [{ url: 'https://guia-aprovacao.netlify.app/img/cover.png' }],
          site_name: 'Guia da Aprovação',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@bsignx',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
