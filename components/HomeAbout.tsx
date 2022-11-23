import React from 'react'

function HomeAbout() {
  return (
    <section  className="untree_co--site-section float-left pb-0 featured-rooms">
    <div  className="container-fluid pt-5">
      <div  className="suite-wrap overlap-image-1">
        <div  className="suite">
          <div  className="image-stack">
            <div  className="image-stack-item image-stack-item-top" data-jarallax-element="-50">
              <div  className="overlay"></div>
              <img src="images/s8.jpg" alt="Image"  className="img-fluid pic1" />
            </div>
            <div  className="image-stack-item image-stack-item-bottom">
              <div  className="overlay"></div>
              <img src="images/s5.jpg" alt="Image"  className="img-fluid pic2" />
            </div>
          </div>
        </div> 

        <div  className="suite-contents" data-jarallax-element="50">
          <h1  className="suite-title">Hotel Zaghro</h1>
          <div  className="suite-excerpt">
            <p>Hotel Zaghro is located in the south of Ouarzazate, in the rural part of Tabount, where starts the road to Zagora. It is a Moroccan hotel, managed for years by a Moroccan family. Its facilities are exactly what you need in order to relax in a nice and welcoming environment. The hotel has a large swimming pool, and its room are traditionally decorated following the ways of Berbers of south Morocco.</p>
          </div>
        </div>
      </div>
      <div  className="suite-wrap overlap-image-2" style={{marginBottom: "20px"}}> 
        <div  className="suite">
          <div  className="image-stack">
            <div  className="image-stack-item image-stack-item-top" >
              <div  className="overlay"></div>
              <img src="images/s1.jpg" alt="Image"  className="img-fluid pic1" />
            </div>
            <div  className="image-stack-item image-stack-item-bottom" data-jarallax-element="-50">
              <div  className="overlay"></div>
              <img src="images/s4.jpg" alt="Image"  className="img-fluid pic2" />
            </div>
          </div>
        </div>

        <div  className="suite-contents" data-jarallax-element="50">
          <h1 className="suite-title">A pleasant budget hotel in Ouarzazate</h1>
          <div  className="suite-excerpt">
            <p>With no less than 55 bedrooms, it can host groups, nevertheless, it is not too large a hotel, and guests travelling on their own will not have the feeling their are lost in a large resort.<br/>The large restaurant in extended by tables laid around the swimming pool and in the lounge. It is large enough to be comfortable..</p>
            <p><a href="#"  className="readmore">More Details</a></p>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default HomeAbout