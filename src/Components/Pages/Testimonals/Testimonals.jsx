import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AxiosBase from '../../Axios/AxiosBase';
import Slider from "react-slick";
import Rating from 'react-rating';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [reviews, setUserReviews] = useState([])
  useEffect(() => {
    AxiosBase().get('/api/v1/reviews')
      .then(res =>{
        // console.log(res.data)
          setUserReviews(res.data)
      })
    
  }, [])
  // console.log(reviews)
  return (
    <div className='max-w-7xl mx-auto py-16 font-pop'>
      <h1 className='text-black text-4xl text-center font-semibold'>What our guests says</h1>
     <div>
<Slider {...settings}>
{
  reviews.map((review,index)=>{
   return <div className='py-9'>
      <div className='flex justify-center items-center flex-col '>
        <img src={review.user_image} alt="" className='w-32 h-32 rounded-full'/>
        <h1 className='text-2xl text-black py-1'>{review.user_name}</h1>
        <Rating initialRating={review.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/>
          <p>{review.review_text}</p>
      </div>
    </div>
  })
}
</Slider>
     </div>
    </div>


  );
}

export default Testimonals;
