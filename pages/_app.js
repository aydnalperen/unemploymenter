import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StatisticER</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" 
        content="statistics, statisticer, inflation, inflation in usa, inflation germany, inflation europe, inflation usa,world bank data,
        world bank statistics, world bank api,umemployment usa, united states statistics, human development index, statistics by year,
        
        " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
