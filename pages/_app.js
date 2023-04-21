import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  

  return (
    <div className="width-100 main_black_background">
      <Component {...pageProps} />
    </div>
  )
}
