import React from 'react'
import Footer from './Footer'
import MainHeader from './MainHeader'
import OffCanvasMenu from './OffCanvasMenu'

function Layout({children}:any) {
  return (
    <>
    <div id="untree_co--overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
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