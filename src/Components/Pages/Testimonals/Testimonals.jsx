import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AxiosBase from '../../Axios/AxiosBase';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Rating from 'react-rating';
const Testimonals = () => {
    const [reviews,setUserReviews] = useState([])
    useEffect(()=>{
        AxiosBase().get('/api/v1/reviews')
        .then(res => setUserReviews(res.data.slice(0,5)))
    },[])
    console.log(reviews)
    return (
        <div className='grid md:grid-cols-2 gap-5 max-w-7xl mx-auto py-7'>
        <div>
          <h1 className='text-3xl text-black  font-semibold font-pop py-2'>Why chose us</h1>
           <p>Unmatched Hospitality: Our dedicated team is committed to making your visit memorable. Expect warm welcomes and personalized attention from the moment you arrive.Prime Location: Situated in the heart of [Your Location], we offer convenience and easy access to top attractions, restaurants, and business hubs.Luxurious Accommodations: Our well-appointed rooms and suites are designed for your comfort and relaxation, offering modern amenities and elegance.Luxurious Accommodations: Our well-appointed rooms and suites are designed for your comfort and relaxation, offering modern amenities and elegance.Wellness and Relaxation: Rejuvenate your body and mind in our spa and fitness facilities, where you can pamper yourself with spa treatments or stay active in our state-of-the-art fitness center.</p>
        </div>
        <div className=' border-2 border-black'>
        <h1 className='text-black text-3xl  font-semibold px-8 '>User testimonials</h1>
          <div className='p-6'>
        <Swiper
        navigation={true}
            pagination={{ clickable: true }}
           
      autoplay={{ delay: 3000 }}
      modules={[Navigation]}
    >
            {
                reviews.map((item,index)=>{
                return  <SwiperSlide>    <div className="border-2 py-5 px-10 h-full" key={index}>
     <div className="flex justify-between items-center">
        <div className="flex items-center gap-2"><img src={item.user_image} alt="" className="w-10 h-10 rounded-full" /><h3 className="text-black">{item.user_name}</h3><Rating initialRating={item.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/></div>
        
       
     </div>
     <p className="text-black pt-3">{item.review_text}</p>
        </div>
        
               </SwiperSlide>
                })
            }
            
            </Swiper>
            </div>
        </div>
      </div>
    );
}

export default Testimonals;
