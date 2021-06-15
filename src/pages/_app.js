
import '../../styles/globals.css'

import Footer from "../components/footer"
import HeadOfDoc from "../components/head"
import Navbar from '../components/navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadOfDoc />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
