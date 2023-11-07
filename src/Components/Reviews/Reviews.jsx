import { useEffect, useState } from "react";

// import { Rating } from "@mui/material";
// import Rating from "react-rating";
import AddReview from "./AddReview";
import Review from "./Review";
import AxiosBase from "../Axios/AxiosBase";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const params = useParams();
    useEffect(()=>{
        AxiosBase().get(`/api/v1/reviews?room_id=${params.id}`)
        .then(res => setReviews(res.data))
    },[])


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
<div>
    <h1 className="text-center text-black text-3xl">No reviews</h1>
</div>
      }
      
        </>
    );
}

export default Reviews;
