
import '../../styles/globals.css'

import Footer from "../components/footer"
import Navbar from '../components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
      </Head>
      <body>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </body>
    </>
  )
}

export default MyApp
