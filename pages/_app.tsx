import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ReactElement } from 'react'

library.add(fab, far)

function MyApp({ Component, pageProps }): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
