import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

function Footer() {
  return (
    <footer className="untree_co--site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pr-md-5">
            <h3>About Us</h3>
            <p>The whole team of Hotel Zaghro is at your disposal, to welcome you, inform you or book you a room.</p>
          </div>
          <div className="col-md-8 ml-auto">
            <div className="row">
              <div className="col-md-3">
                <h3>Navigation</h3>
                <ul className="list-unstyled">
                  <li><Link href="/" ><a href="/">Home</a></Link></li>
                  <li><Link href="/about" ><a href="/about">About Us</a></Link></li>
                  <li><Link href="/rooms" ><a href="/rooms">Rooms</a></Link></li>
                  <li><Link href="/gallery" ><a href="/gallery">Gallery</a></Link></li>
                  <li><Link href="/contact" ><a href="/contact">Contact</a></Link></li>
                </ul>
              </div>
              <div className="col-md-9 ml-auto">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <h3>Address</h3>
                    <address> 1,5 kms route de Zagora, Tarmigte<br />
                      Ouarzazate 45000 <br /> Morocco</address>
                  </div>
                  <div className="col-md-6">
                    <h3>Telephone</h3>
                    <p>
                      Phone:  +212(0)5 24 85 41 35 <br />
                      Fax:  +212(0)5 24 85 47 09 <br />
                      Cellular: +212(0)6 61 31 84 02
                    </p>
                  </div>
                </div>

                <h3 className="mb-0">Quick request</h3>
                <p>Contact us directly on Whatsapp</p>
                <div className="form-subscribe">
                  <div className="form-group d-flex">
                  <Link href="/"><a className="btn btn-black px-4 text-white"><i className='icon-whatsapp'/></a></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5 text-center align-items-center">
          <div className="col-md-6 text-md-left">
            <p>
              Copyright &copy; 2022 Hotel Saghro, All Rights Reserved. Design by <Link href="https://itbakni.com" target="_blank"><a className="text-primary">ITBakni.com</a></Link>
            </p>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="icons-top icons-dark">
              <li className='mr-1'>
              <Link href="https://www.facebook.com/hotelzaghro/" target={"_blank"}><a><span className="icon-facebook"/></a></Link>
              </li >
              <li className='mr-1'>
              <Link href="https://www.facebook.com/hotelzaghro/" target={"_blank"}><a><span className="icon-instagram"/></a></Link>
              </li>
              <li>
              <Link href="https://www.tripadvisor.com/Hotel_Review-g304018-d639581-Reviews-Zaghro_Hotel-Ouarzazate_Draa_Tafilalet.html" target={"_blank"}><a><span className="icon-tripadvisor"/></a></Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer