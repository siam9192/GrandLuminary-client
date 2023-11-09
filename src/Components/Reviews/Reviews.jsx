import { useEffect, useState } from "react";

// import { Rating } from "@mui/material";
// import Rating from "react-rating";
import AddReview from "./AddReview";
import Review from "./Review";
import AxiosBase from "../Axios/AxiosBase";
import { useParams } from "react-router-dom";

const Reviews = ({change}) => {
    const [reviews,setReviews] = useState([]);
    const params = useParams();
    useEffect(()=>{
        AxiosBase().get(`/api/v1/reviews?room_id=${params.id}`)
        .then(res => setReviews(res.data))
    },[])

const handleReviews = (review)=>{
setReviews(review)
}
    return (
        <>
      {
        reviews.length > 0 ?   <div className="grid lg:grid-cols-2 gap-5">
        {
   reviews.map((review,index)=>{
return <Review review={review}></Review>
   })
        }
    </div>:
<div className="min-h-[20vh]">
    <h1 className="text-center text-black text-3xl">No reviews</h1>
</div>
      }
      <AddReview reviews = {reviews} setReviews = {handleReviews} change={change}></AddReview>
      
        </>
    );
}

export default Reviews;
