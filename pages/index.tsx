import type { NextPage } from 'next'
import {sanityClient , urlFor } from '../sanity'
import { Category, Post } from '../typings'
import { useRouter } from "next/router";
import Typewriter from 'typewriter-effect';

interface Props{
  categories :[Category]
  items :[Post]
}

export default function  NextPage({categories, items}: Props) {
  const router = useRouter();
 
  return (
    <>
      <div>
        <div id="site-wrap" >
         
          <div
            className="cover-parallax-1 overlay-1 padding"
            data-scrollax-parent="true"
          >
            <div
              className="cover"
              data-scrollax="properties: { translateY: '30%' }"
            >
              <img src="./images/img_isotope_5.jpg" alt="jbdkjd" />
            </div>

            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-md-12 col-lg-12 text-center"
                  data-aos="fade"
                >
                  <h3 className="heading mb-5">
                   <Typewriter
                 options={{
                  strings: ['Welcome To', 'Soyez les bienvenus chez','欢迎 ' , 'ようこそ'],
                  autoStart: true,
                  loop: true,
                }}
                  /></h3>
                 
                  <h3 className="heading mb-5">La Rose Des Sables Pizzeria</h3>
                  <h5 className="heading ">Our Menu</h5>
                </div>
              </div>
            </div>

            <a
              href="#next-section"
              className="templateux-mouse js-smoothscroll"
            >
              <div className="scroll"></div>
            </a>
          </div>

          <div className="templateux-section" id="next-section">
            <div className="container">

            {categories.map(cat=> (
              <div className="row">
                <div className="col-md-12 text-center mb-5" data-aos="fade">
                  <h2 className="display-4 mb-4">{cat.title}</h2>
                  <div className="row justify-content-center">
                   
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <div
                    className="tab-content text-left"
                    data-aos="fade"
                    data-aos-delay="400"
                  >

                   
                      <div className="row">
                      {items.filter(item => item.categories[0].title == cat.title).map(item => (
                        <div className="col-md-6">
                          <div className="media block-templateux-menu-item">
                            <img
                              className="mr-3 img-fluid"
                              src={urlFor(item.mainImage).url()!}
                              alt="Free Template by Free-Template.co"
                            />
                            <div className="media-body">
                              <h5 className="mt-0">{item.title}</h5>
                              <p>
                                {item.description}
                              </p>
                              <h6 className="text-primary menu-price">
                                {item.price} dhs
                              </h6>
        
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                  </div>
                </div>
              </div>

            ))}
            
            </div>
          </div>
          
        </div>
      </div>
      <footer className="templateux-footer">
      <div className="container">

        <div className="row pt-5 text-center">
          <div className="col-md-2 text-center"><h5>
          Bon Appetit
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Guten appetit
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Buon appetito
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Buen provecho
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Bom apetite
          </h5></div>
        </div> 
        <div className="row pt-5 text-center">
          <div className="col-md-2 text-center"><h5>
          Smaklig måltid
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          食福 
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Smakelijk!
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Приятного аппетита!
          </h5></div>
          <div className="col-md-2 text-center"><h5>
          Bom apetite
          </h5></div>
        </div> 
      </div>
    </footer> 

   
  </>
  )
}



export async function getServerSideProps() {
  const query1 = `*[_type == "category"]`
  const query2 = `*[_type == "post"]{
    _id,
    title,
    price,
    description,
    mainImage,
    slug,
    "categories": categories[]->
  }`
  const categories = await sanityClient.fetch(query1)
  const items = await sanityClient.fetch(query2)

  return {
    props: {categories: categories, items:items}, // will be passed to the page component as props
  }
}