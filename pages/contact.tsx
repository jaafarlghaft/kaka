import React from 'react'
import PageHero from '../components/PageHero';



function contact()  {
  return (
    <>
    <div className="untree_co--site-hero inner-page bg-light" style={{backgroundColor: "#fff"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="site-hero-contents" data-aos="fade-up">
                  <h1 className="hero-heading">Contact Us</h1>
                  <div className="sub-text w-75">
                    <p>Detailed contact information of Hotel Zaghro, in Tabount, Ouarzazate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div  className="untree_co--site-section">
          <div  className="container">
              <div  className="row">
                <div  className="col-12" data-aos="fade-up">
                  <h2  className="display-4 mb-5">Fill the form</h2>
                </div>
                <div  className="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="#">
                    <div  className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text"  className="form-control" id="name" />
                    </div>
                    <div  className="form-group">
                      <label htmlFor="email2">Your Email *</label>
                      <input type="text"  className="form-control" id="email2" />
                    </div>
                    <div  className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text"  className="form-control" id="subject" />
                    </div>
                    <div  className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea name="message"  className="form-control" id="message" cols={30} rows={10}/>
                    </div>
                    <div  className="form-group">
                      <input type="submit" value="Send"  className="btn btn-black px-5 text-white" />
                    </div>
                  </form>
                </div>
                <div  className="col-md-4 ml-auto"  data-aos="fade-up" data-aos-delay="200">
                  <div  className="media-29190">
                    <span  className="label">Email</span>
                    <p><a href="#">hotelrestaurantzaghro@yahoo.fr</a></p>
                  </div>
                  <div  className="media-29190">
                    <span  className="label">Phone</span>
                    {/* <p><a href="#">+30 931 3829 399</a></p> */}
                    <p>Phone: +212(0)5 24 85 41 35</p>
                    <p>Fax: +212(0)5 24 85 47 09</p>
                    <p>Cellular: +212(0)6 61 31 84 02</p>
                  </div>
                  <div  className="media-29190">
                    <span  className="label">Address</span>
                    <p>1,5 kms route de Zagora, Tarmigte<br/>
                    Ouarzazate 45000<br/>
                    Morocco
                    </p>
                  </div>
                  <div  className="media-29190">
                    <span  className="label">Social</span>
                    <ul  className="icons-top icons-dark">
                      <li className='mr-1'>
                        <a href="#"><span  className="icon-facebook"></span></a>
                      </li>
                      <li className='mr-1'>
                        <a href="#"><span  className="icon-twitter"></span></a>
                      </li>
                      <li className='mr-1'>
                        <a href="#"><span  className="icon-instagram"></span></a>
                      </li>
                      <li className='mr-1'>
                        <a href="#"><span  className="icon-tripadvisor"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            
          </div>
        </div>
    </>
    
  )
}

export default contact;