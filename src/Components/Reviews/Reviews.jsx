import { useEffect, useState } from "react";

// import { Rating } from "@mui/material";
// import Rating from "react-rating";
import AddReview from "./AddReview";
import Review from "./Review";
import AxiosBase from "../Axios/AxiosBase";

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        AxiosBase().get('/api/v1/reviews')
        .then(res => setReviews(res.data))
    },[])


const submitReview = ()=>{

}

    return (
        <>
        <div className="grid lg:grid-cols-2 gap-5">
            {
       reviews.map((review,index)=>{
return <Review review={review}></Review>
       })
            }
        </div>
      
        </>
    );
}

export default Reviews;
