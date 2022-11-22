import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


function MainHeader() {
  let router = useRouter()
  
  return (

   <nav  className={`untree_co--site-nav js-sticky-nav ${router.asPath === '/about' || router.asPath === '/contact' ? 'dark'  : ''}`}>
        <div  className="container d-flex align-items-center">
          <div  className="logo-wrap">
            <a href="/"  className="untree_co--site-logo"><img src="/images/logo-01.png" alt="Hotel Saghro" width={150}/></a>
          </div>
          <div  className="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul  className="site-nav-ul js-clone-nav">
              <li  className={`${router.asPath === '/' ? "active" : '' }`}><Link href="/">Home</Link></li>
              <li  className={`${router.asPath === '/about' ? "active" : '' }`}><Link href="/about">About Us</Link></li>
              <li  className={`${router.asPath === '/rooms' ? "active" : '' }`}><a href="/rooms">Rooms</a></li>
              <li  className={`${router.asPath === '/gallery' ? 'active' : '' }`}><a href="/gallery">Gallery</a></li>
              <li  className={`${router.asPath === '/contact' ? 'active' : '' } `}><a href="/contact">Contact</a></li>
              <li  className="has-children">
                <a href={`/${router.locale}`}>{router.locale}</a>
                <ul  className="dropdown">
                  {router.locales?.map( (local)  =>
                  local !== router.locale ?
                    <li key={local}>
                    <a href={`/${local}`}>{local}</a>
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
                <a href="#"><span  className="icon-facebook"></span></a>
              </li>
              <li className="mr-1">
                <a href="#"><span  className="icon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span  className="icon-tripadvisor"></span></a>
              </li>
            </ul>
            <a href="#"  className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </nav>
  )
}

export default MainHeader