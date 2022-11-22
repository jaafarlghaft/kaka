import React from 'react'

function Room() {
  return (
    <div  className="row no-gutters align-items-stretch room-animate site-section">
    <div  className="col-md-7 img-wrap" data-jarallax-element="-100">
      
      <div  className="bg-image h-100" style={{backgroundColor: "#efefef", backgroundImage: `url('images/room_1_a.jpg')`}}>
      
      </div>
    </div>
    <div  className="col-md-5">
      <div  className="row justify-content-center">
        <div  className="col-md-8 py-5">
          <h3  className="display-4 heading">King Bedroom</h3>
          <div  className="room-exerpt">
            <div  className="room-price mb-4">$200<span  className="per">/night</span></div>
            <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress </p>
            <p>Small, lower-priced hotels may offer only the most basic guest services and facilities. </p>

            <div  className="row mt-5">
              <div  className="col-12">
                <h3  className="mb-4">Amenities</h3>
                <ul  className="list-unstyled ul-check">
                  <li>32-inch LCD TV with cable channels and DVD player</li>
                  <li>Handheld and mounted rain shower heads</li>
                  <li>Wi-Fi access</li>
                  <li>Safety deposit box</li>
                  <li>Mini-bar</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Room