import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Reviews from '../../Reviews/Reviews';
import AddReview from '../../Reviews/AddReview';
import { Link } from 'react-router-dom';
import AxiosBase from '../../Axios/AxiosBase';
import axios from 'axios';
import { useRef } from 'react';
import GetLoginInfo from '../../Resuse/GetLogInfo/GetLoginInfo';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    useQuery,
  } from '@tanstack/react-query'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const RoomDetails = () => {
    // const [room,setRoom] = useState(null);
    const {user} = GetLoginInfo();
    const [show_review,setShow_review] = useState(false);
    const [image,setImage] = useState(0);
    const {id} = useParams();
    const [bookingDetails,setBookingDetails] = useState({})
    const [bookingLoading,setBookingLoading] =  useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = new Date();
    const navigate = useNavigate();
    const current_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const [check_in,set_check_in ] = useState(null);
    
const {data:room,isLoading,refetch} = useQuery({
    queryKey:['room-details'],
    queryFn:async()=>{
        const res = await fetch(`https://ass11-gl0jvmq72-siam-hasans-projects.vercel.app/api/v1/room/get?id=${id}`);
        const data = res.json();
        return data;
    }
})
   useEffect(()=>{
    const c_d = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    set_check_in(c_d)
   },[])
    if(!room){
       
        return;
    }

    const handleDateChange = (date) => {
        
      const newDate = new Date(date)
            const c_d = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
          setSelectedDate(date);
          set_check_in(c_d)     
        
      };
   
const handleBooking = ()=>{
    if(!user){
        navigate('/login')
    }
    const user_email = user.email;
    const image = room.images[0];
    const room_id = room._id;
    const price = room.price;
    const check_in_date = check_in;
    const booking_date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    console.log(booking_date)
    const booking = {
       user_email,image,room_id,price,check_in_date,booking_date
    }
    console.log(booking)
    
    if(room.available_seats > 0){
       
        AxiosBase().get(`/api/v1/find/booking?check_in_date=${check_in_date}&room_id=${room_id}`)
        .then(res => {
            
            if(res.data.length > 0){
                Swal.fire({
                    title: "The room is booked on this date!",
                    text: "Try on another date.",
                    icon: "error"
                  });
              return;
            }
            setBookingDetails(booking)
            document.getElementById('my_modal_1').showModal()
           
        })
    }

}
const confrimeBooking = ()=>{
    setBookingLoading(true)
    AxiosBase().post('/api/v1/booking/new',bookingDetails)
    .then(()=>{
        const available_seats = room.available_seats -1;
        AxiosBase().patch(`/api/v1/update-room?id=${room._id}`,{available_seats})
        .then((res)=>{
           if(res.data.modifiedCount > 0){
            setBookingLoading(false)
            refetch()
            document.getElementById('my_modal_1').close()
            toast.success('Booking successful!')
            window.location.reload();
           }
        })
    })
    
  
    
    
}


    return (
       <div className=''>
        <Helmet>
            <title>Grand Luminary || ROOM DETAILS</title>
        </Helmet>
         <div className='min-h-[90vh] pb-8 font-pop max-w-7xl mx-auto lg:px-0 px-2'>
           
           <div className=' gap-3 '>
            <div className='col-span-2 border-'>
                <img src={room.images[image]} alt="" className='md:w-10/12 md:h-[500px] w-full md:rounded-md' />
            </div>
            <div className='flex items-center flex-wrap gap-3 py-3'>
         {
            room.images.map((item,index)=>{
    return <div key={index} onClick={()=>{
        setImage(index)
    }}>
    
                    <img src={item} alt="" className={` md:rounded-md h-32 border-black ${image === index && "border-4"}`}/>
                </div>
            })
         }
            </div>
    
         
           </div>
           
           <div className='pb-2 md:flex justify-between py-6'><div>
           <p>Price/room/night starts from</p>
    <h2 className="text-3xl font-semibold text-amber-500 ">${room.price}</h2>
                    </div>
                    <div>
    
    <div className='md:flex items-center gap-5'>
    <div className='flex items-center gap-1'>
    <div>
    <p className='text-black'>Check-in date</p>
      <DatePicker
        showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // Set minimum date to today
        className='w-72 py-3 border-black border-2 rounded outline-none'
      />
    </div>
       
    
    </div> 
   <div className='mt-5'>
   <button className={`text-white    ${room.available_seats === 0 ? "bg-[#b5b4b4] " : "bg-red-500"}  rounded-md px-9 py-2 `}disabled = {room.available_seats === 0 ? true : false}  onClick={handleBooking}>Book room</button>
   
   </div>
    </div>
                        </div></div>
           <div className='grid lg:grid-cols-3 gap-5 py-9 '>
           <div className=' border-2 border-black rounded-lg p-5'>
           <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Room size:</h3> <h3>{room.room_size} Sqft</h3>
      </div>
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
        <div className='md:col-span-2 p-5 border-black rounded-lg border-2'>
            <p className='text-black font-semibold'>Description:</p>
            <p className='text-black'>{room.description}</p>
        </div>
    
    </div>
    <div>
    <h1 className='text-3xl text-black pb-5 flex items-center gap-2'>Special <p className='text-green-600'> offers:</p></h1>
    {
        room.special_offers.length  > 0 ? <div className=' grid md:grid-cols-2 gap-5 py-8'>
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
   :
   <div className='min-h-[20vh] flex justify-center items-center'>
   <h1 className='text-3xl text-black mt-7 text-center flex items-center gap-2'>No offer <p className='text-red-500'>available</p></h1>
   </div>
    }
    </div>
    <div>
        <h1 className='text-3xl text-black pb-5'>Our guests reviews:</h1>
        <Reviews></Reviews>
    </div>
  

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  {bookingLoading ? <div className='flex justify-center items-center'> <span className="loading loading-dots loading-lg text-red-600"></span> <br />
  <h2 className='text-center text-black'>Processing</h2></div> :  <div>
   <div className='flex justify-center items-center'>
    <img src="/images/Form/booking.jpg" alt="" className='w-10/12' />
   </div>
   <div>
    <h2 className='text-black font-semibold'>Booking details:</h2>
    <div>
        <h2 className='text-black flex justify-between'>Check in date <p>{bookingDetails.check_in_date}</p></h2>
        <h2 className='text-black flex justify-between'>Booking date <p>{bookingDetails.booking_date}</p></h2>
        <h2 className='text-black flex justify-between'>Price <p>${bookingDetails.price}</p></h2>
           
     <div className="flex justify-between gap-5">
     <button className='px-5 py-2 bg-red-500 text-white' onClick={()=>{
             document.getElementById('my_modal_1').close()
            }}>Cancel</button>
     <button className='px-5 py-2 bg-green-500 text-white' onClick={confrimeBooking}>Confrime</button> 
     </div>
      
    </div>
   </div>
    <div className="modal-action">
      <form method="dialog">
    
      </form>
      
    </div>
  </div>
}
  </div>
</dialog>
            </div>
            <div>

            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
       </div>
    );
}

export default RoomDetails;
