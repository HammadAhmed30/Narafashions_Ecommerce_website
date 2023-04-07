import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="width-100 main_black_background">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
