import React from 'react'
import Footer from './Footer'
import MainHeader from './MainHeader'
import OffCanvasMenu from './OffCanvasMenu'

function Layout({children}:any) {
  return (
    <>
    <OffCanvasMenu/>
    <main className="untree_co--site-wrap">
    <main className="untree_co--site-main">
     <MainHeader />
     {children}
     <Footer/>
    </main>
    </main>
    </>
  )
}

export default Layout