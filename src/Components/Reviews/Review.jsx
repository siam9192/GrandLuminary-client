import React, { useEffect } from 'react';
import Rating from "react-rating";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import moment from 'moment/moment';
import Aos from 'aos';
const Review = ({review}) => {
useEffect(()=>{
  Aos.init()
})
    // const timeLaps = moment("20111031", "YYYYMMDD").fromNow(); // 12 years ago
    const date = new Date();
    const currentDate =`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    return (
        <div className="border-2 p-5 " data-aos="zoom-in-up">
     <div className="flex justify-between items-center">
        <div className="flex items-center gap-2"><img src={review.user_image} alt="" className="w-10 h-10 rounded-full" /><h3 className="text-black">{review.user_name}</h3><Rating initialRating={review.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/></div>
        <div> {review.post_date === currentDate ? "Today" : review.post_date}</div>
       
     </div>
     <p className="text-black pt-3">{review.review_text}</p>
        </div>
        
    );
}

export default Review;
