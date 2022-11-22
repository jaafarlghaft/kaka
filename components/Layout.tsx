import React from 'react'
import Footer from './Footer'
import Head from './Head'
import Nav from './Nav'

function Layout({children}) {
  return (
    <>
    <Head />
    <body>
    <Nav />
    {children}
    <Footer />
    </body>
    </>
  )
}

export default Layout