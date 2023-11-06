import { useEffect, useState } from "react";

// import { Rating } from "@mui/material";
// import Rating from "react-rating";
import AddReview from "./AddReview";
import Review from "./Review";

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
return <Review review={review}></Review>
       })
            }
        </div>
      
        </>
    );
}

export default Reviews;
