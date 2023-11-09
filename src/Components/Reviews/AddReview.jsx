import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
import AxiosBase from '../Axios/AxiosBase';
const AddReview = ({reviews,setReviews,onChange}) => {
    const params = useParams();
    const {user} = GetLoginInfo();
    const [userRating,setUserRating] = useState(1);
    const [bookings,setBooking] = useState([]);
    const[hidden,setHidden] = useState(true);
    const [room,setRoom] = useState({});
    const date = new Date();
    const review_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    useEffect(()=>{
     if(user ){
           
        AxiosBase().get(`/api/v1/bookings?user_email=${user.email}&room_id=${params.id}`)
        .then(res =>{
          if(res.data.length === 0){
            setHidden(false)
            return;
          }
          AxiosBase().get(`/api/user/review?user_email=${user.email}&room_id=${params.id}`)
          .then(res=>{
            if(res.data.length > 0){
                setHidden(false);
                return;
            }

            
          })
          
        })
     
     }
     },[user,reviews])
     useEffect(()=>{
        AxiosBase().get(`/api/v1/room/get/?id=${params.id}`)
        .then(res => setRoom(res.data))
     },[])
    
     
    const submitReview = (e)=>{
        e.preventDefault()
        document.getElementById('my_review_1').showModal();
        const date = new Date();
        const post_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
   const review_text = e.target.review.value;
   const total_review = room.total_review + 1;
   const total_ratting  = room.total_ratting + userRating;
   const review = {
    user_email : user.email,
    user_name: user.displayName,
    user_image: user.photoURL,
    room_id: params.id,
    ratting: userRating,
    review_text,
    post_date
}
   const updateRoomData = {
    total_ratting: room.total_ratting + userRating,
    ratting: total_ratting / total_review,
    total_review: room.total_review + 1
   }
   AxiosBase().post('/api/v1/reviews/post',review)
   .then((res)=>{
    if(res.data.insertedId){
        AxiosBase().patch(`/api/v1/update-room?id=${params.id}`,updateRoomData);
        document.getElementById('my_review_1').close();
        setReviews ([...reviews,review])
 setHidden(false)
    }
   })
  
    }
    return (
        <>
        <div className={`p-5 mt-8 bg-gray-200 rounded-lg ${hidden && user ? "block":"hidden"}`}>
        <h1 className="text-3xl text-black pb-5 text-center">Post your review:</h1>
    
        <div>
            <div className='flex items-center gap-3'><p className="text-2xl">Ratting:</p><Rating value={userRating} size = "large" onChange={(event,value)=>{
                if(value < 2){
                    return;
                }
                setUserRating(value)
            }}/></div>
            
                <form onSubmit={submitReview}>
              <div className=''>
              <textarea name="review"  className='w-full border-2 min-h-[200px] mt-4 resize-none p-2 border-black outline-none ' placeholder='Write about your experience ' required></textarea>
                <div className="text-end py-2">
                <button type='submit' className='text-white px-8 py-2 bg-orange-500'>Submit review</button>
                </div>
              </div>
                </form>
            </div>
        </div>
        <dialog id="my_review_1" className="modal">
  <div className="modal-box">
   <div className='flex justify-center items-center'> <span className="loading loading-dots loading-lg text-red-600"></span> <br />
  <h2 className='text-center text-black'>Processing</h2></div> 
  </div>
</dialog>
</>
    );
}

export default AddReview;
