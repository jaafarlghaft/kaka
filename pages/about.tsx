
import PageHero from "../components/PageHero";
import Request from "../components/Request";


export default function  About() {

  return (
    <>
     <section  className="untree_co--site-hero inner-page bg-light" style={{backgroundColor: "#fff"}}>
          <div  className="container">
            <div  className="row align-items-center">
              <div  className="col-md-9">
                <div  className="site-hero-contents">
                  <h1  className="hero-heading">About Us</h1>
                  <div  className="sub-text w-75">
                    <p>Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="untree_co--site-section">

<div className="container px-md-0">
<div className="row justify-content-center  pt-0 ">  
    
      <div className="col-lg-8">
        <div className="row">
    
          <div className="col-12 section-heading" data-aos="fade-up">
        <h3 className="text-left">Camping Akka</h3>

          </div>
          <div className="col-lg-6">
      <div>
      <p>Camping Akka is located in the south of Tata, in the rural part of Tabount, where starts the road to Zagora. It is a Moroccan hotel, managed for years by a Moroccan family. Its facilities are exactly what you need in order to relax in a nice and welcoming environment. The hotel has a large swimming pool, and its room are traditionally decorated following the ways of Berbers of south Morocco.</p>                  
      <p>With no less than 55 bedrooms, it can host groups, nevertheless, it is not too large a hotel, and guests travelling on their own will not have the feeling their are lost in a large resort.</p>

      </div>
    </div>
    <div className="col-lg-6 section-heading" data-aos="fade-up">
      
      <div>
      <p>The large restaurant in extended by tables laid around the swimming pool and in the lounge. It is large enough to be comfortable.</p>                  
      <p>Prices are really reasonable, a single room can be rent for 110 dirhams, 200 dirhams if it has air-conditioning.</p>

      </div>
    </div>
        </div>
    
     
      </div>
     
   
    <div className="col-lg-4 " data-aos="fade-up">
    <img src="images/s6.jpg" alt="Image" className="img-fluid"  />
    
    </div>
  </div>
</div>
</section>
<section className="untree_co--site-section pt-0" >
          <div className="container">
            <div className="row justify-content-center py-5" style={{border:"1px solid #eee"}}>
              <div className="col-12">
                <div className="row mb-5 align-items-center">
                  <div className="col-md-4 mr-auto">
                    <h2 className="display-4">Ouarzazate, Morocco | All you have to know!</h2>
                  </div>
                  <div className="col-md-7 ml-auto">
                     <p>Ouarzazate in Morocco is around 200 kilometers south of Marrakech and is a popular stopover for round trips, but also for excursions and desert tours. The city itself is worth seeing, but the immediate area also has some great attractions to offer. Ouarzazate is best known for its film studios in which world-famous films were made, and for the Kasbah Taourirt, which is well-preserved and can be viewed from the inside. However, one of the best things to do in Ouarzazate is a visit to the clay town of Ait-Ben-Haddou, which is not far from Ouarzazate.</p>
                     </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <img src="images/slider_2.jpg" alt="Image" className="img-fluid" />
              </div>
            </div> */}
          </div>
        </section>
<section className="untree_co--site-section">

<div className="container px-md-0">
<div className="row justify-content-center  pt-0 pb-5">  

    <div className="col-lg-4 section-heading" data-aos="fade-up">
      <h3 className="text-left">Taourirt casbah</h3>
      <div>
      <p>The fortress of the former Glawi Pasha is built against the old houses of the medina, where was the small village of Ouarzazate before the French troops’ arrival. The casbah has been partially renovated thanks to UNESCO help and funds, and can be visited every day (with or without a guide).</p>                  
      <p>In the entrance yard, you can see the famous Krupp cannon that was given to the Glawi family, and marks the beginning of their ascent. The favourite’s apartment, the hammam (steam bath) and the large reception lounges display the remnants of the impressive wealth of the Glawis.</p>

      </div>
    </div>
    <div className="col-lg-4 " data-aos="fade-up">
    <img src="images/ouarzazate.jpg" alt="Image" className="img-fluid mb-4"  />
    
    </div>
    <div className="col-lg-4 section-heading" data-aos="fade-up">
      <h3 className="text-left">Film museum</h3>
      <div>
      <p>Just in front of the casbah, a museum of “film making in Ouarzazate” was created in the former Andromeda studios (This Italian production company still operates other studios outside of Ouarzazate). One can see large sets (partially re-created), and especially the ones built for a serial of biblical films that were made over a period of ten years.</p>                  
      <p>It is a funny experience to reach in five steps only the munificent palace of Ponce Pilate after leaving the cells of Roman circus. Many other sets are shown, and a very large room displays machines and cameras, showing a summary of film making history since the very beginnings.</p>

      </div>
    </div>
   
  </div>
</div>
</section>
<Request />

    </>
  )
}


