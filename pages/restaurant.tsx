import React from 'react'
import PageHero from '../components/PageHero'

function restaurant() {
  return (
    <>
    <div className="untree_co--site-main ">
   
    <div  className="untree_co--site-hero inner-page" style={{backgroundImage: `url('/images/s7.jpg')`}}>
    <div  className="container">
      <div  className="row align-items-center justify-content-center">
        <div  className="col-md-7 text-center">
          <div  className="site-hero-contents " data-aos="fade-up">
            <h1  className="hero-heading text-white">Our Restaurant</h1>
            <div  className="sub-text text-center">
                    <p className='text-white '>Hotel Zaghro's restaurant serves a delicious Moroccan food</p>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div  className="untree_co--site-section float-left pb-0 featured-rooms">
        <div  className="container pt-40">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div  className="suite-contents" data-jarallax-element="50">
                            <h1 className="suite-title">A pleasant budget hotel in Ouarzazate</h1>
                            <div  className="suite-excerpt pr-5">
                                <p>We propose a three-course menu, with <strong>starter</strong>, <b>main course</b> and <b>dessert</b>. Everything is cooked at the hotel, with fresh products bought at the local market.
                                Depending of the season, you will start with a salad or a soup.<br />
                                The main course can be a tajine, grilled skewers or a couscous.<br />
                                As dessert, in most of the cases, you will appreciate a plate of fresh fruits, or Moroccan cakes.<br />
                                Our hotel does not sell alcohol, but you can buy your own one and drink it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div  className="suite">
                            <div  className="image-stack-item image-stack-item-bottom" data-jarallax-element="-50">
                            <div  className="overlay"></div>
                            <img src="images/s4.jpg" alt="Image"  className="img-fluid pic2" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            
        </div>
    </div>
    <div className="untree_co--site-section">

          <div className="container-fluid px-0">

            <div className="row align-items-stretch">
              <div className="col-9 relative" data-aos="fade-up" data-aos-delay="">
                <div className="owl-carousel owl-gallery-big">
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res1.jpg')`}}></div>
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res2.jpg')`}}></div>
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res3.jpg')`}}></div>
                </div>

                <div className="slider-counter text-center"></div>

              </div>
              <div className="col-3 relative"  data-aos="fade-up" data-aos-delay="100">

                <div className="owl-carousel owl-gallery-small">
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res1.jpg')`}}><a href="#"></a></div>
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res2.jpg')`}}><a href="#"></a></div>
                  <div className="slide-thumb bg-image" style={{backgroundImage: `url('images/res3.jpg')`}}><a href="#"></a></div>
                </div>

              </div>
            </div>
          </div>

        </div>
    </div>
    <div  className="untree_co--site-section float-right pb-29 featured-rooms">
        <div  className="container pt-40">
                <div className="row">
                <div className="col-lg-6 col-md-6">
                        <div  className="suite">
                            <div  className="image-stack-item image-stack-item-bottom" data-jarallax-element="-50">
                            <div  className="overlay"></div>
                            <img src="images/s4.jpg" alt="Image"  className="img-fluid pic2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div  className="suite-contents" data-jarallax-element="50">
                            <h1 className="suite-title">Meswhi or Mechoui</h1>
                            <div  className="suite-excerpt pr-5">
                                <p>Meswhi is a traditional Moroccan festive meal, with a lamb that has been slowly cooked in a closed clay oven , for hours. Because it takes so long to prepare, it must be ordered (at least a day ahead). We serve meswhi with salads and harira (Moroccan soup), a couscous and various dessert. The meal is finished with a green mint tea.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default restaurant