import React from 'react';
import Rating from "react-rating";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import moment from 'moment/moment';
const Review = ({review}) => {
    const timeLaps = moment("20111031", "YYYYMMDD").fromNow(); // 12 years ago
    return (
        <div className="border-2 p-5 ">
     <div className="flex justify-between items-center">
        <div className="flex gap-2"><img src={review.user_image} alt="" className="w-10 h-10 rounded-full" /><h3 className="text-black">{review.user_name}</h3><Rating initialRating={review.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/></div>
        <div> {timeLaps}</div>
       
     </div>
     <p className="text-black">{review.review_text}</p>
        </div>
        
    );
}

export default Review;
