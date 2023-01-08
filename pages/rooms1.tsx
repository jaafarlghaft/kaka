import React from 'react'
import PageHero from '../components/PageHero'
import Room from '../components/Room'

function rooms1() {
  return (
    <>
        <div className="untree_co--site-main">
            <PageHero title="Our Rooms" img="s8.jpg" />
            <div  className="untree_co--site-section pb-0">
            <div  className="container-fluid px-md-0 mb-10">
                <div  className="row justify-content-center text-center site-section pt-0">
                    <div  className="col-md-6">
                        <h2  className="display-4" data-aos="fade-up">Enjoy Your Stay</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Camping Akka offers two types of rooms, with or without air-conditioning. A capacity of 30 rooms with air conditioning
25 rooms without air conditioning</p>
                    </div>
                </div>
            </div>
            <div  className="container px-md-0">
                <div className="row no-gutters align-items-stretch room-animate site-section" >
                    <div className="col-sm-12 col-md-4 col-lg-4 p-1 mb-2 border border-top-0" >
                        <div className="img-wrap"  data-jarallax-element="-100">
                        <div  className="bg-image" style={{backgroundColor: "#efefef", backgroundImage: `url('images/r4.jpg')`}}></div>
                        </div>
                        <h3  className="display-4 heading">Single Room</h3>
                    <div  className="room-exerpt">
                      <div  className="room-price mb-4">$200<span  className="per">/night</span></div>
                      
                      <p><a href="#"  className="readmore">More Details</a></p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 p-1">
                        <div className="img-wrap"  data-jarallax-element="-100">
                        <div  className="bg-image" style={{backgroundColor: "#efefef", backgroundImage: `url('images/r2.jpg')`}}></div>
                        </div>
                        <h3  className="display-4 heading">Room with air-conditioner</h3>
                    <div  className="room-exerpt">
                      <div  className="room-price mb-4">$200<span  className="per">/night</span></div>
                      
                      <a className='btn' href="/">Book Now</a>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 p-1">
                        <div className="img-wrap"  data-jarallax-element="-100">
                        <div  className="bg-image" style={{backgroundColor: "#efefef", backgroundImage: `url('images/r3.jpg')`}}></div>
                        </div>
                        <h3  className="display-4 heading">Room with air-conditioner</h3>
                    <div  className="room-exerpt">
                      <div  className="room-price mb-4">$200<span  className="per">/night</span></div>
                      
                      <a className='btn' href="/">Book Now</a>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default rooms1