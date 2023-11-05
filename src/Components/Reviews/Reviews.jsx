import { useEffect, useState } from "react";
import Rating from "react-rating";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
// import { Rating } from "@mui/material";
// import Rating from "react-rating";
import AddReview from "./AddReview";

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
console.log(reviews)
const submitReview = ()=>{

}

    return (
        <>
        <div className="grid lg:grid-cols-2 gap-5">
            {
       reviews.map((review,index)=>{
        return <div className="border-2 p-5 ">
     <div className="flex justify-between items-center">
        <div className="flex items-center gap-2"><img src={review.user_image} alt="" className="w-10 h-10 rounded-full" /><h3 className="text-black">{review.user_name}</h3></div>
        <div> <Rating initialRating={review.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/></div>
       
     </div>
     <p className="text-black">{review.review_text}</p>
        </div>
       })
            }
        </div>
      
        </>
    );
}

export default Reviews;
