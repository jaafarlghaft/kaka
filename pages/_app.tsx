import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Script from 'next/script';
import Head from 'next/head';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (<>

           <Head>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
           <meta name="description" content="" />
           <meta name="keywords" content="" />
           <meta name="author" content="" />
           <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
           <title>Camping Akka| Hotel Restaurant</title>
           </Head>
           <Layout>
            <Component {...pageProps} />
           </Layout>
            <Script src="/js/vendor/jquery-3.3.1.min.js" strategy="beforeInteractive" />
            <Script src="/js/vendor/popper.min.js"strategy="beforeInteractive" />
            <Script src="/js/vendor/bootstrap.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/owl.carousel.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/jarallax.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/jarallax-element.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/ofi.min.js"strategy="beforeInteractive"/>
            <Script src="/js/vendor/aos.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/jquery.lettering.js" strategy="beforeInteractive" />
            <Script src="/js/vendor/jquery.sticky.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/TweenMax.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/ScrollMagic.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/scrollmagic.animation.gsap.min.js" strategy="beforeInteractive"/>
            <Script src="/js/vendor/debug.addIndicators.min.js"strategy="beforeInteractive" />
            <Script src="/js/main.js" />
           </>
);

}

export default MyApp;
