
import '../../styles/globals.css'

import Footer from "../components/footer"
import Navbar from '../components/navbar'
import { HeadDoc } from '../components/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadDoc />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
