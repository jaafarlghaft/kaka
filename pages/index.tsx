import type { NextPage } from 'next'


import { useRouter } from "next/router";
import MainHero from '../components/MainHero';
import HomeAbout from '../components/HomeAbout';
import HomeFeatures from '../components/HomeFeatures';
import HomeExtra from '../components/HomeExtra';
import Request from '../components/Request';



// interface Props{
//     locale : String
//   }
  

export default function  NextPage() {

 
  return (
    <>
     <div className="untree_co--site-main">
     <MainHero />
     <HomeAbout />
     <HomeFeatures />
     <HomeExtra />
     <Request />
    
     </div>
  </>
  )
}

// export function getStaticProps({locale}:any){
//     return {
//         props:{
//             locale
//         }
//     }
// }

