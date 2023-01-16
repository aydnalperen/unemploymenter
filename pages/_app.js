import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StatisticER</title>
        <meta charSet="UTF-8" />
        <meta name="keywords"
          content="statistics, statisticer, inflation, inflation in usa, inflation germany, inflation europe, inflation usa,world bank data,
        world bank statistics, world bank api,umemployment usa, united states statistics, human development index, statistics by year,
        stat graphs, statistics graphics, simple statistics,world bank stats, wb stats
        " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Head>
      <Script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8252929364939554"
        crossorigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
