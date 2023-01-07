import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StatisticER</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="statistics, inflation, inflation in usa, inflation germany, inflation europe, inflation usa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
