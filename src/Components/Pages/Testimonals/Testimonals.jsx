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

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const Testimonals = () => {
  const [reviews, setUserReviews] = useState([])
  useEffect(() => {
    AxiosBase().get('/api/v1/reviews')
      .then(res => setUserReviews(res.data.slice(0, 5)))
  }, [])
  // console.log(reviews)
  return (
    <div className='max-w-7xl mx-auto py-16'>
      <h1 className='text-black text-3xl text-center font-semibold'>What our guests says</h1>
     
    </div>


  );
}

export default Testimonals;
