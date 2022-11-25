import React from 'react'

function MainHero() {
  return (
    <section  className="owl-carousel owl-hero">

    <div  className="untree_co--site-hero overlay" style={{backgroundImage: `url('/images/s6-min.jpg')`}}>
      <div  className="container">
        <div  className="row align-items-center justify-content-center">
          <div  className="col-md-8">
            <div  className="site-hero-contents text-center" >
              <h1  className="hero-heading">Welcome to Hotel Saghro</h1>
              <div  className="sub-text">
                <h2 className='text-white'>2 Stars Hotel in Ouarzazate</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  className="untree_co--site-hero overlay"  style={{backgroundImage: `url('/images/s2-min.jpg')`}}>
      <div  className="container">
        <div  className="row align-items-center justify-content-center">
          <div  className="col-md-7">
            <div  className="site-hero-contents text-center" >
              <h1  className="hero-heading">Enjoy Your Stay</h1>
              <div  className="sub-text">
                <h2 className='text-white'>Witheir in families or solo travellers, Hotel Zaghro is managed by a Moroccan family that will treat you as a friend.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}

export default MainHero