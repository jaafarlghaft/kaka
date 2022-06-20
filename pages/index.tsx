import type { NextPage } from 'next'
import {sanityClient , urlFor } from '../sanity'
import { Category, Post } from '../typings'
import { useRouter } from "next/router";



interface Props{
  categories :[Category]
  items :[Post]
}

export default function  NextPage({categories, items}: Props) {
  const router = useRouter();
 
  return (
    <>
     
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
                      {items.filter((item:any) => {
                        return item.categories[0].title == cat.title
                      }).map(item => (
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
                                {item.en_desc}
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



export async function getServerSideProps() {
  const query1 = `*[_type == "category"]`
  const query2 = `*[_type == "post"]{
    _id,
    title,
    price,
    en_desc,
    mainImage,
    slug,
    "categories": categories[]->{
      slug,
      title,
    }
  }`
  const categories = await sanityClient.fetch(query1)
  const items = await sanityClient.fetch(query2)

  return {
    props: {categories: categories, items:items}, // will be passed to the page component as props
  }
}