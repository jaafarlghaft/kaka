import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from '../components/head'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
   
 <Head></Head>
            <Component {...pageProps} />
            <script src="./js/scripts-all.js"></script>
  <script src="./js/main.js"></script>
  </>

}

export default MyApp;
