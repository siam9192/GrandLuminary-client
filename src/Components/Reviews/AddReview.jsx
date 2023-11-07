import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
import AxiosBase from '../Axios/AxiosBase';
const AddReview = () => {
    const params = useParams();
    const {user} = GetLoginInfo();
    const [userRating,setUserRating] = useState(1);
    const [bookings,setBooking] = useState([]);
    const [room,setRoom] = useState({});
    const date = new Date()
    const review_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    useEffect(()=>{
     if(user){
          
        AxiosBase().get(`/api/v1/bookings?user_email=${user.email}&room_id=${params.id}`)
     .then(res =>{
        setBooking(res.data)
       
     })
     
     }
     },[user])
     useEffect(()=>{
        AxiosBase().get(`/api/v1/room/${params.id}`)
        .then(res => setRoom(res.data))
     },[])
    const submitReview = (e)=>{
        e.preventDefault()
   const review_text = e.target.review.value;
   const total_review = room.total_review + 1;
   const total_ratting  = room.total_ratting + userRating;
   const review = {
    user_email : user.email,
    user_image: user.photoURL,
    room_id: params.id,
    ratting: userRating,
    review_text
   }
   console.log(review_date)
   const updateRoomData = {
    total_ratting: room.total_ratting + userRating,
    ratting: total_ratting / total_review,
    total_review: room.total_review + 1
   }
   AxiosBase().post('/api/v1/reviews/post',review)
   .then((res)=>{
    if(res.data.insertedId){
        AxiosBase().patch(`/api/v1/update-room?id=${params.id}`,updateRoomData)
    }
   })
  
    }
    return (
        <div className={`py-7 ${bookings.length > 0 ? "block" : "hidden"}`}>
        <h1 className="text-2xl text-black">Your review:</h1>
    
        <div>
            <div className='flex items-center gap-3'><p className="text-2xl">Ratting:</p><Rating value={userRating} size = "large" onChange={(event,value)=>{
                if(value < 2){
                    return;
                }
                setUserRating(value)
            }}/></div>
            
                <form onSubmit={submitReview}>
              <div className='w-1/2'>
              <textarea name="review"  className='w-full border-2 min-h-[200px] mt-4 resize-none p-2' placeholder='Write about your experience ' required></textarea>
                <div className="text-end py-2">
                <button type='submit' className='text-white px-8 py-2 bg-orange-500'>Submit review</button>
                </div>
              </div>
                </form>
            </div>
        </div>

    );
}

export default AddReview;
