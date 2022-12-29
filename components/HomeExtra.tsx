import React from 'react'

function HomeExtra() {
  return (
    <section  className="untree_co--site-section">
          <div  className="container">
            <div  className="row">
              <div  className="col-12 section-heading" data-aos="fade-up">
                <h3>Enjoy your stay at Camping Akka</h3>
                <div className="w-100 mb-5">
                  <p>Camping Akka offers many different Moroccan specialities, each as delicious as the others.<br/> The large restaurant in extended by tables laid around the swimming pool and in the lounge. It is large enough to be comfortable.</p>
                  </div>
              </div>
              </div>
              <div  className="row">
              <div  className="col-md-4">
                <div  className="post-entry" data-aos="fade-up" data-aos-delay="100">
                  <a href="#"  className="thumb"><img src="images/s7.jpg" alt="Image"  className="img-fluid"/></a>
                  <div  className="post-entry-contents">
                    <h3>Camping Akka's restaurant serves a delicious Moroccan food</h3>
                    {/* <div  className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div> */}
                    <p>For your meal, you can select our large restaurant, or a table at the swimming pool. The perfect solution for a cool lunch in swimming suit !</p>
                    <a href="/restaurant"  className="readmore">Read more</a>
                  </div>
                </div>
              </div>
              <div  className="col-md-4">
                <div  className="post-entry" data-aos="fade-up" data-aos-delay="200">
                  <a href="#"  className="thumb"><img src="images/s5.jpg" alt="Image"  className="img-fluid"/></a>
                  <div  className="post-entry-contents">
                    <h3>A large swimming pool for young and not so young swimmers</h3>
                    {/* <div  className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div> */}
                    <p>The inner yard of the hotel is set around a large swimming pool. The pool has a shallow part where the children can play safely (under your watch).</p>
                    <a href="#"  className="readmore">Read more</a>
                  </div>
                </div>
              </div>
              <div  className="col-md-4">
                <div  className="post-entry" data-aos="fade-up" data-aos-delay="100">
                  <a href="#"  className="thumb"><img src="images/car-rentals.png" alt="Image"  className="img-fluid"/></a>
                  <div  className="post-entry-contents">
                    <h3>Rent a car and explore the area</h3>
                    {/* <div  className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div> */}
                    <p>In cooperation with the hotel, the rental car agency Saghrocar, situated just nearby, proposes rental cars starting at 30 € / day, 32 € / with air-conditionning.</p>
                    <a href="/restaurant"  className="readmore">Read more</a>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </section>
  )
}

export default HomeExtra