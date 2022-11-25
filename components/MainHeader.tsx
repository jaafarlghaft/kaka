import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


function MainHeader() {
  let router = useRouter()
  
  return (

   <header  className={`untree_co--site-nav js-sticky-nav ${router.asPath === '/about' || router.asPath === '/contact' ? 'dark'  : ''}`}>
        <div  className="container d-flex align-items-center">
          <div  className="logo-wrap">
            <Link href="/"><a className="untree_co--site-logo"><img src="/images/logo-01.png" alt="Hotel Saghro" width={150}/></a></Link>
          </div>
          <div  className="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul  className="site-nav-ul js-clone-nav">
              <li  className={`${router.asPath === '/' ? "active" : '' }`}><Link href="/">Home</Link></li>
              <li  className={`${router.asPath === '/about' ? "active" : '' }`}><Link href="/about">About Us</Link></li>
              <li  className={`${router.asPath === '/rooms' ? "active" : '' }`}><Link href="/rooms">Rooms</Link></li>
              <li  className={`${router.asPath === '/gallery' ? 'active' : '' }`}><Link href="/gallery">Gallery</Link></li>
              <li  className={`${router.asPath === '/contact' ? 'active' : '' } `}><Link href="/contact">Contact</Link></li>
              <li  className="has-children">
              <Link href={`/${router.locale}`}>{router.locale}</Link>
                <ul  className="dropdown">
                  {router.locales?.map( (local)  =>
                  local !== router.locale ?
                    <li key={local}>
                    <Link href={`/${local}`}>{local}</Link>
                    </li>
                  :''
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div  className="icons-wrap text-md-right">
            <ul  className="icons-top d-none d-lg-block">
              <li className="mr-1">
                <Link href="https://www.facebook.com/hotelzaghro/" target={"_blank"}><a><span  className="icon-facebook"/></a></Link>
              </li>
              <li className="mr-1">
                <Link href="#"><a><span  className="icon-instagram"/></a></Link>
              </li>
              <li>
                <Link href="https://www.tripadvisor.com/Hotel_Review-g304018-d639581-Reviews-Zaghro_Hotel-Ouarzazate_Draa_Tafilalet.html" target={"_blank"}><a><span  className="icon-tripadvisor"/></a></Link>
              </li>
            </ul>
            <Link href="#"><a className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span /></a>
            </Link>
          </div>
        </div>
      </header>
  )
}

export default MainHeader