import React, { useState } from 'react';
import { Rating } from '@mui/material';
const AddReview = () => {
    const [userRating,setUserRating] = useState(0);
    const submitReview = (e)=>{
   const review_text = e.target.review.value;
   console.log(typeof userRating)
   const review = {

   }
    }
    return (
        <div className="py-7">
        <h1 className="text-2xl text-black">Your review:</h1>
        <div className="text-center my-4"><button className="px-7 py-2 bg-orange-500 text-white">Add review</button></div>
        <div>
            <div className='flex items-center gap-3'><p className="text-2xl">Ratting:</p><Rating size = "large" onChange={(event,value)=>{
                setUserRating(value)
            }}/></div>
            <div>
                <form onSubmit={submitReview}>
              <div className='w-1/2'>
              <textarea name="review"  className='w-full border-2 min-h-[200px] mt-4 resize-none p-2' placeholder='Write about your experience '></textarea>
                <div className="text-end py-2">
                <button type='submit' className='text-white px-8 py-2 bg-orange-500'>Submit review</button>
                </div>
              </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default AddReview;
