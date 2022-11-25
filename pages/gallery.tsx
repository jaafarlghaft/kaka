import React from 'react'

function gallery() {
  return (
    <>
     <section className="untree_co--site-hero inner-page" style={{backgroundImage: `url('/images/S4.jpg')`}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center">
                <div className="site-hero-contents" data-aos="fade-up">
                  <h1 className="hero-heading text-white">Gallery</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
    <section className="untree_co--site-section">
    <div className="container">
      <div className="row justify-content-center text-center pt-0 pb-5">  
        <div className="col-lg-6 section-heading" data-aos="fade-up">
          <h3 className="text-center"></h3>
        </div>
      </div>
      <div className="row gutter-2">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="">
          <a href="images/s1.jpg" data-fancybox="gallery">
            <img src="images/s1.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/s2.jpg" data-fancybox="gallery">
            <img src="images/s2.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <a href="images/s3.jpg" data-fancybox="gallery">
            <img src="images/s3.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <a href="images/s4.jpg" data-fancybox="gallery">
            <img src="images/s4.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
          <a href="images/s5.jpg" data-fancybox="gallery">
            <img src="images/s5.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="">
          <a href="images/s6.jpg" data-fancybox="gallery">
            <img src="images/s7.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/s8.jpg" data-fancybox="gallery">
            <img src="images/s8.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default gallery