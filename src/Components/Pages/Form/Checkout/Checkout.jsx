import React, { useEffect,useState } from 'react';
import './checkout.css'
import {RxCrossCircled} from 'react-icons/rx'
import { useParams } from 'react-router-dom';
import GetLoginInfo from '../../../Resuse/GetLogInfo/GetLoginInfo';
import Swal from 'sweetalert2'
import AxiosBase from '../../../Axios/AxiosBase';
const Checkout = () => {
    const [room,setRoom] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const {id} = useParams();
    const {user} = GetLoginInfo();
    const [bookingDetails,setBookingDetails] = useState({});
    const currentDate = new Date();
    const [checkInDate,setCheckInDate] = useState(currentDate)
    const [activeStatus,setActiveStatus] = useState(false);
   
console.log(new Date().getDay())
    useEffect(()=>{
       AxiosBase().get(`/api/v1/room/${id}`)
        .then(data => {
        setRoom(data.data)
        })
        // console.log(data)
        },[])
        if(!room){
            return
        }

    const checkout = ()=>{

    }
    const submitCheckOut = (e)=>{
        e.preventDefault();
 const form = e.target;
 const date = new Date();
 const user_email = user.email;
 const room_id = room._id;
 const price = room.price;
 const check_in_date = e.target.check_in.value;
 const check_out_date = e.target.check_out.value;
 const booking_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
 const notes = e.target.notes.value;
 setBookingDetails({user_email,room_id,price,check_in_date,check_out_date,booking_date,notes})
  setActiveStatus(true)
    
    }
   console.log(bookingDetails)
    return (
        <div className='max-w-7xl mx-auto min-h-[90vh] font-pop grid md:grid-cols-2 grid-cols-1 duration-300'>
            <form action="" onSubmit={submitCheckOut}>
                <h1 className='text-3xl text-black font-semibold pb-3'>Checkout</h1>
                <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                        
                    </div>
                
                    <div className='flex items-center space-x-3'>
                    
                    </div>
                  <div className="flex items-center space-x-4">
                  <div className='flex-1'>
                            <h1 className='text-black my-2'>Check-in Date</h1>
                        <input type="date" name='check_in' autoComplete='off'  className='w-full py-2 border-2 px-2' />
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Check-out Date</h1>
                        <input type="date" name='check_out' autoComplete='off'  className='w-full py-2 border-2 px-2' />
                        </div>
                        </div>
                        

                  </div>
                  <div>
                    <textarea name='notes' className='w-full border-2 resize-none h-52 p-2' placeholder='Notes(optional)'></textarea>
                  </div>
                  <button className='text-white bg-black py-3 w-full'>Checkout</button>
                </div>

            </form>
            <div>
                <img src="/images/Form/checkout.jpg" alt="" />
            </div>

            <div className={`checkout-pop flex justify-center ${activeStatus ? "block":"hidden"} py-20 font-pop `}>
             <div className="bg-white w-1/3 rounded-lg p-5 relative ">
                <div className=''>
                    <div className='flex justify-center'><img src="/images/Form/sucess.png" alt="" className='w-20' /></div>
                    <h1 className='text-black text-2xl text-center py-2'>Booking successful</h1>
                </div>
             <h1 className='text-3xl text-black'>Booking summery</h1>
          <div className=' '>
            <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Hotel room no: </h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.room_no} </h1>
          </div>
         
        
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Check-in Date:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.check_in_date} </h1>
          </div>
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Check-out Date:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.check_out_date} </h1>
          </div>
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Booking Date:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.booking_date} </h1>
          </div>
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Price (per/night):</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.price} </h1>
          </div>
          
          
          <div className='flex justify-between'>
          </div>

          <div>
            
            <div className='text-2xl text-black absolute top-2 right-2' onClick={()=> {
                setActiveStatus(false)
                setBookingDetails({})
            }}> <RxCrossCircled></RxCrossCircled></div>
         
          </div>
             </div>
            </div>
        </div>
        </div>
    );
}

export default Checkout;
