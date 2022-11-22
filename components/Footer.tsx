import Script from 'next/script'
import React from 'react'

function Footer() {
  return (
    <footer  className="untree_co--site-footer">
        <div  className="container">
          <div  className="row">
            <div  className="col-md-4 pr-md-5">
              <h3>About Us</h3>
              <p>The whole team of Hotel Zaghro is at your disposal, to welcome you, inform you or book you a room.</p>
              <p><a href="#"  className="readmore">Read more</a></p>
            </div>
            <div  className="col-md-8 ml-auto">
              <div  className="row">
                <div  className="col-md-3">
                  <h3>Navigation</h3>
                  <ul  className="list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/rooms">Rooms</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
                <div  className="col-md-9 ml-auto">
                  <div  className="row mb-3">
                    <div  className="col-md-6">
                      <h3>Address</h3>
                      <address> 1,5 kms route de Zagora, Tarmigte<br />
                      Ouarzazate 45000 <br /> Morocco</address>
                    </div>
                    <div  className="col-md-6">
                      <h3>Telephone</h3>
                      <p>
					  Phone:  +212(0)5 24 85 41 35 <br />
					  Fax:  +212(0)5 24 85 47 09 <br />
					  Cellular: +212(0)6 61 31 84 02
                      </p>
                    </div>
                  </div>

                  <h3  className="mb-0">Quick request</h3>
                  <p>Contact us directly on Whatsapp</p>
                  <form action="#" method=""  className="form-subscribe">
                    <div  className="form-group d-flex">
                      <input type="email"  className="form-control mr-2" placeholder="Enter your email" />
                      <input type="submit" value="Subscribe"  className="btn btn-black px-4 text-white mr-2" />
                      <a href="" className="btn btn-black px-4 text-white"><i className='icon-whatsapp'></i></a>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
          <div  className="row mt-5 pt-5 align-items-center">
            <div  className="col-md-6 text-md-left">
             
              <p>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> <a href="index.html">Hotel Saghro</a>. All Rights Reserved. Design by <a href="https://itbakni.com" target="_blank"  className="text-primary">ITBakni.com</a>
              </p>
            
            </div>
            <div  className="col-md-6 text-md-right">
              <ul  className="icons-top icons-dark">
              <li className='mr-1'>
                <a href="#"><span  className="icon-facebook"></span></a>
              </li >
              <li className='mr-1'>
                <a href="#"><span  className="icon-twitter"></span></a>
              </li>
              <li className='mr-1'>
                <a href="#"><span  className="icon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span  className="icon-tripadvisor"></span></a>
              </li>
            </ul>

            </div>
          </div>
        </div>
        
      </footer>
	)
}

export default Footer