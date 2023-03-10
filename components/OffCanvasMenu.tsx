import Link from 'next/link'
import React from 'react'

function OffCanvasMenu() {
  return (
    <nav  className="untree_co--site-mobile-menu">
    <div  className="close-wrap d-flex">
      <a href='#' className="d-flex ml-auto js-menu-toggle">
        <div  className="close-times">
          <span  className="bar1"/>
          <span  className="bar2"/>
        </div>
        </a>
    </div>
    <div  className="site-mobile-inner"></div>
  </nav>
  )
}

export default OffCanvasMenu