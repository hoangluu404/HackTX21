import 'tailwindcss/tailwind.css'
import './css/styles.css'
import Base from '../layouts/base'

function MyApp({ Component, pageProps }) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )

}

export default MyApp
