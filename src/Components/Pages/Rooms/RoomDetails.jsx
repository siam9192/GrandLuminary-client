import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Reviews from '../../Reviews/Reviews';
import AddReview from '../../Reviews/AddReview';
import { Link } from 'react-router-dom';
import AxiosBase from '../../Axios/AxiosBase';
import axios from 'axios';
import { useRef } from 'react';
import GetLoginInfo from '../../Resuse/GetLogInfo/GetLoginInfo';
const RoomDetails = () => {
    const [room,setRoom] = useState(null);
    const {user} = GetLoginInfo();
    const [show_review,setShow_review] = useState(false);
    const [image,setImage] = useState(0);
    const {id} = useParams();
    const check_in = useRef(null);
    const [bookingDetails,setBookingDetails] = useState({})


    useEffect(()=>{
AxiosBase().get(`/api/v1/room?id=${id}`)
.then(data => {
setRoom(data.data)
})

},[])
   
    if(!room){
        return;
    }


const handleBooking = ()=>{
    const date = new Date();
    const user_email = user.email;
    const image = room.images[0];
    const room_id = room._id;
    const price = room.price;
    const check_in_date = check_in.current.value;
    const booking_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const booking = {
       user_email,image,room_id,price,check_in_date,booking_date
    }

    if(room.available_seats > 0){
        AxiosBase().get(`/api/v1/find/booking?check_in_date=${check_in_date}&room_id=${room_id}`)
        .then(res => {
            if(res.data.length > 0){
              console.log('not avai')
              return;
            }
            setBookingDetails(booking)
            document.getElementById('my_modal_1').showModal()
           
        })
    }

}
const confrimeBooking = ()=>{
    AxiosBase().post('/api/v1/booking/new',bookingDetails)
    .then(()=>{
        const available_seats = room.available_seats -1;
        AxiosBase().patch(`/api/v1/update-room/${room._id}`)
        .then(()=>{
            
        })
    })
  
    
    
}

    return (
       <div className=''>
         <div className='min-h-[90vh] pb-8 font-pop max-w-7xl mx-auto'>
           
           <div className=' gap-3 '>
            <div className='col-span-2 border-'>
                <img src={room.images[image]} alt="" className='w-10/12 h-[500px] rounded-md' />
            </div>
            <div className='flex items-center gap-3 py-3'>
         {
            room.images.map((item,index)=>{
    return <div onClick={()=>{
        setImage(index)
    }}>
    
                    <img src={item} alt="" className={` rounded-md h-32 border-red-500 ${image === index && "border-4"}`}/>
                </div>
            })
         }
            </div>
    
         
           </div>
           
           <div className='pb-2 flex justify-between py-6'><div>
           <p>Price/room/night starts from</p>
    <h2 className="text-3xl font-semibold text-amber-500 ">${room.price}</h2>
                    </div>
                    <div>
    
    <div className='flex items-center gap-5'>
    <div className='flex items-center gap-1'>
        <p className='text-black'>Check-in date</p>
    <input type="date" ref = {check_in} className='w-72 py-2 border-black border-2 rounded outline-none'/>
    </div>
    <button className='text-white bg-red-500 rounded-md px-9 py-2' onClick={handleBooking}>Book room</button>
   
    </div>
                        </div></div>
           <div className='grid grid-cols-3 gap-5 py-9 '>
           <div className=' border-2 border-black rounded-lg p-5'>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Total seat:</h3> <h3>{room.total_seats}</h3>
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Available seat:</h3> <h3>{room.available_seats}</h3>
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Availability:</h3> {room.available_seats !== 0? <h1 className='text-green-600'>Available</h1> : <h1 className='text-red-700'>Unavailable</h1>}
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Price:</h3> <h3>${room.price}</h3>
      </div>
        </div>
        <div className='col-span-2 p-5 border-black rounded-lg border-2'>
            <p className='text-black font-semibold'>Description:</p>
            <p className='text-black'>{room.description}</p>
        </div>
    
    </div>
    <div>
    <h1 className='text-3xl text-black pb-5'>Special Offers:</h1>
    <div className=' grid md:grid-cols-2 gap-5 py-8'>
         {
            room.special_offers.map((item,index)=>{
              return  <div className='border-2 border-black p-5 rounded-lg' key={index}>
                    {
                        item
                    }
                </div>
            })
         }
    </div>
    </div>
    <div>
        <h1 className='text-3xl text-black pb-5'>Our guests reviews:</h1>
        <Reviews></Reviews>
    </div>

     

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   <div className='flex justify-center items-center'>
    <img src="/images/Form/booking.jpg" alt="" className='w-10/12' />
   </div>
   <div>
    <h2 className='text-black font-semibold'>Booking details:</h2>
    <div>
        <h2 className='text-black flex justify-between'>Check in date <p>{bookingDetails.check_in_date}</p></h2>
        <h2 className='text-black flex justify-between'>Booking date <p>{bookingDetails.booking_date}</p></h2>
        <h2 className='text-black flex justify-between'>Price <p>${bookingDetails.price}</p></h2>
    </div>
   </div>
    <div className="modal-action">
      <form method="dialog">
       
     <div className="flex justify-between gap-5">
     <button className='px-5 py-2 bg-red-500 text-white' >Cancel</button>
     <button className='px-5 py-2 bg-green-500 text-white' onClick={confrimeBooking}>Confrime</button> 
     </div>
      </form>
    </div>
  </div>
</dialog>
            </div>
            <div>

            </div>
            
       </div>
    );
}

export default RoomDetails;
