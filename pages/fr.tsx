import React from 'react'
import { sanityClient, urlFor  } from '../sanity'
import { Category, Post } from '../typings'


interface Props{
    categories :[Category]
    items :[Post]
  }

  
function fr({categories, items}: Props) {
  return (
  <>
  <div className="templateux-section" id="next-section">
            <div className="container">

            {categories.map(cat=> (
              <div className="row">
                <div className="col-md-12 text-center mb-5" data-aos="fade">
                  <h2 className="display-4 mb-4">{cat.fr_title}</h2>
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
                      {items.filter((item:any) => {
                        return item.categories[0].fr_title == cat.fr_title
                      }).map(item => (
                        <div className="col-md-6">
                          <div className="media block-templateux-menu-item">
                            <img
                              className="mr-3 img-fluid"
                              src={urlFor(item.mainImage).url()!}
                              alt="Free Template by Free-Template.co"
                            />
                            <div className="media-body">
                              <h5 className="mt-0">{item.fr_title}</h5>
                              <p>
                                {item.fr_desc}
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
  </>
  )
}

export default fr

export async function getServerSideProps() {
    const query1 = `*[_type == "category"]`
    const query2 = `*[_type == "post"]{
      _id,
      fr_title,
      price,
      fr_desc,
      mainImage,
      slug,
      "categories": categories[]->{
        slug,
        fr_title,
      }
    }`
    const categories = await sanityClient.fetch(query1)
    const items = await sanityClient.fetch(query2)
  
    return {
      props: {categories: categories, items:items}, // will be passed to the page component as props
    }
  }