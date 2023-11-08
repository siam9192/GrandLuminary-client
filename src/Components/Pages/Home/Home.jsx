import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Parallax } from 'react-parallax';
import './Home.css'
import Featured from '../../Featured/Featured';
import {FiMail} from 'react-icons/fi';
import Footer from '../../Footer/Footer';
// import {Swiper,Swiperslider} from 'swiper/react';
import Testimonals from '../Testimonals/Testimonals';
const Home = () => {
  const [reviews,setReviews] = useState([]);
  useEffect(()=>{
 fetch('reviews.json')
 .then(res => res.json())
 .then(data => setReviews(data))
  },[])
    return (
        <div>
            <Banner></Banner>
         
           <Featured></Featured>
         
            {/* why chose us sections */}
            <Testimonals></Testimonals>
            <Parallax bgImage='/images/hotel/banner/banner4.jpg' strength={600} bgClassName='gradient-background'>
            <div className='news-latter grid grid-cols-2 my-10 font-lato max-w-7xl mx-auto  min-h-52'>
              <div className='py-10 max-w-7xl mx-auto  space-y-4 '>
              <h1 className='text-4xl text-blue-600 font-semibold font-lato'>sign up for newsletter</h1>
              <p className='text-white '>Sign up for our mailing list to get latest updates and offers</p>
              <div className='  text-white bg-transparent border-2 border-white placeholder:text-white pr-2 pl-5 py-3 outline-none rounded-md flex items-center gap-1'>
                <FiMail className=' text-xl text-white top-3 '></FiMail>
                <input type="text" placeholder='Enter your email' className=' bg-transparent placeholder:text-white outline-none  w-full border-r-2' />
                <button className='text-white hover:text-black bg-transparent '>Subscribe</button>
              </div>
              </div>
              <div className='text-black px-8 py-4 space-y-3 font-lato border-2 border-gray-300'>
                <h3 className='text-3xl text-black'>Summer Holidays 20% OFF</h3>
                <p>Offer valid for stays now through December 2021</p>
                <button className='text-black  bg-white border-2 border-black hover:bg-black hover:text-white duration-200 px-7 py-3'>GET CODE</button>
              </div>
            </div>
            </Parallax>
            <Footer></Footer>
        </div>
    );
}

export default Home;
