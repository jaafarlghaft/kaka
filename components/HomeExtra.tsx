import React from 'react'

function HomeExtra() {
  return (
    <section  className="untree_co--site-section">
          <div  className="container">
            <div  className="row">
              <div  className="col-md-4 section-heading" data-aos="fade-up">
                <h3  className="text-left">Enjoy your stay at Hotel Zaghro Ouarzazate</h3>
                <div  className="w-75">
                  <p>Hotel Zaghro offers many different Moroccan specialities, each as delicious as the others.<br/> The large restaurant in extended by tables laid around the swimming pool and in the lounge. It is large enough to be comfortable.</p>
                  </div>
              </div>
              <div  className="col-md-4">
                <div  className="post-entry" data-aos="fade-up" data-aos-delay="100">
                  <a href="#"  className="thumb"><img src="images/s7.jpg" alt="Image"  className="img-fluid"/></a>
                  <div  className="post-entry-contents">
                    <h3><a href="#">Hotel Zaghro's restaurant serves a delicious Moroccan food</a></h3>
                    {/* <div  className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div> */}
                    <p>For your meal, you can select our large restaurant, or a table at the swimming pool. The perfect solution for a cool lunch in swimming suit !</p>
                    <p><a href="/restaurant"  className="readmore">Read more</a></p>
                  </div>
                </div>
              </div>

              <div  className="col-md-4">
                <div  className="post-entry" data-aos="fade-up" data-aos-delay="200">
                  <a href="#"  className="thumb"><img src="images/s5.jpg" alt="Image"  className="img-fluid"/></a>
                  <div  className="post-entry-contents">
                    <h3><a href="#">A large swimming pool for young and not so young swimmers</a></h3>
                    {/* <div  className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div> */}
                    <p>The inner yard of the hotel is set around a large swimming pool. The pool has a shallow part where the children can play safely (under your watch).</p>
                    <p><a href="#"  className="readmore">Read more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HomeExtra