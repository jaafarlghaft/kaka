import React from 'react'

function PageHero({title , img}:any) {
  return (
    <div  className="untree_co--site-hero inner-page" style={{backgroundImage: `url('/images/${img}')`}}>
    <div  className="container">
      <div  className="row align-items-center justify-content-center">
        <div  className="col-md-7 text-center">
          <div  className="site-hero-contents" data-aos="fade-up">
            <h1  className="hero-heading text-white">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageHero