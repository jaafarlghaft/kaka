import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from '../components/head'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Footer from '../components/Footer';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <>
 <Head></Head>
      <div>
        <div id="site-wrap" >
       
        <div
            className="cover-parallax-1 overlay-1 padding"
            data-scrollax-parent="true"
          >
            <div></div>
            <div
              className="cover"
              data-scrollax="properties: { translateY: '30%' }"
            >
              <img src="./images/hero_image.jpg" alt="jbdkjd" />
            </div>

            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-md-12 col-lg-12 text-center"
                  data-aos="fade"
                >
                  <h3 className="heading2 mb-5">
                   <Typewriter
                 options={{
                  strings: ['Soyez les bienvenus chez','Welcome To', 'Bienvenido a', 'Willkommen zu','Benvenuto a' ,'欢迎 ' , 'ようこそ'],
                  autoStart: true,
                  loop: true,
                }}
                  /></h3>
                 
                  <h3 className="heading mb-5">La Rose Des Sables</h3>
                  <h3 className="heading1 mb-5">Restaurant Pizzeria</h3>
                  <h3 className="heading2 ">Menu</h3>
                  <ul className="nav block-templateux-tab-nav nav-pills mb-5 pb-5" id="pills-tab" role="tablist">
              <li className="nav-item" data-aos="fade" data-aos-delay="100">
 
              <a className="nav-link " aria-selected="true"  href="/#next-section">Français</a>
            
              </li>
              <li className="nav-item" data-aos="fade" data-aos-delay="100">
             
              <a className="nav-link" aria-selected="true" href="/en#next-section">English</a>
             
              </li>
              <li className="nav-item" data-aos="fade" data-aos-delay="100">
     
              <a className="nav-link "aria-selected="true" href="/es#next-section">Spanish</a>
               
              </li>
            </ul>
                 
                 
                </div>
              </div>
            </div>

            <a
              href="#next-section"
              className="templateux-mouse js-smoothscroll"
            >
              <div className="scroll"></div>
            </a>
          </div>
            <Component {...pageProps} />
            <Footer />
            <script src="./js/scripts-all.js"></script>
  <script src="./js/main.js"></script>

  </div></div>
  </>

}

export default MyApp;
