import React, { useEffect,useState } from 'react';
import './checkout.css'
import {RxCrossCircled} from 'react-icons/rx'
import { useParams } from 'react-router-dom';
import GetLoginInfo from '../../../Resuse/GetLogInfo/GetLoginInfo';
import Swal from 'sweetalert2'
const Checkout = () => {
    const [room,setRoom] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const {roomId} = useParams();
    const {user} = GetLoginInfo();
    const [bookingDetails,setBookingDetails] = useState({});
    const currentDate = new Date();
    const [checkInDate,setCheckInDate] = useState(currentDate)
    const [activeStatus,setActiveStatus] = useState(false);
console.log(new Date().getDay())
    useEffect(()=>{
        fetch('/rooms.json')
        .then(res => res.json())
        .then(data => {
        const find = data.find(item => item.id == roomId);
        console.log(find)
        setRoom(find);
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
 const user_email = user.email;
 const name = e.target.name.value;
 const phone_number = e.target.phone_number.value;
 const room_no = room.room_no;
 const beds = room.beds
 const price = room.pricePerNight;
 const check_in_date = e.target.check_in.value;
 const notes = e.target.notes.value;
 setBookingDetails({user_email,name,phone_number,room_no,beds,price,check_in_date,notes})
console.log(phone_number)
//  setActiveStatus(true)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText:"Later",
    confirmButtonText: "Yes, checkout"
  }).then((result) => {
    if (result.isConfirmed) {
    //   Swal.fire({
    //     title: "Deleted!",
    //     text: "Your file has been deleted.",
    //     icon: "success"
    //   });
    setActiveStatus(true)
    }
  });

    }
    console.log(bookingDetails)
    return (
        <div className='max-w-7xl mx-auto min-h-[90vh] font-pop grid md:grid-cols-2 grid-cols-1 duration-300'>
            <form action="" onSubmit={submitCheckOut}>
                <h1 className='text-3xl text-black font-semibold pb-3'>Checkout</h1>
                <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Your Name:</h1>
                        <input type="text" name='name' className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Phone Number</h1>
                        <input type="text" name='phone_number' className='w-full py-2 border-2 px-2' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Room No:</h1>
                        <input type="text" value={room.id} className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Beds:</h1>
                        <input type="text" value={room.totalSeat} className='w-full py-2 border-2 px-2' readOnly/>
                        </div>
                    </div>
                  <div className="flex items-center space-x-4">
                  <div className='flex-1'>
                            <h1 className='text-black my-2'>Check-in Date</h1>
                        <input type="date" name='check_in' className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Price/night:</h1>
                        <input type="number" name='price' className='w-full py-2 border-2 px-2' />
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
             <div className="bg-white w-1/2 rounded-lg p-5 relative ">
                <div className=''>
                    <div className='flex justify-center'><img src="/images/Form/sucess.png" alt="" className='w-20' /></div>
                    <h1 className='text-black text-2xl text-center'>Checkout successful</h1>
                </div>
             <h1 className='text-3xl text-black'>Checkout summery</h1>
          <div className=' '>
            <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Hotel room no: </h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.room_no} </h1>
          </div>
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Beds: </h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.beds} </h1>
          </div>
        
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Check-in Date:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.check_in_date} </h1>
          </div>
          
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Price (per/night):</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.price} </h1>
          </div>
          
          {/* <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Guests:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.price} </h1>
          </div> */}
          
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Your name:</h1> <h1 className='text-xl py-2 text-black'>{bookingDetails.name} </h1>
          </div>
        
          <div className='flex justify-between'>
          <h1 className='text-xl py-2'>Your Phone Number:</h1> <h1 className='text-xl py-2 text-black'> {bookingDetails.phone_number} </h1>
          </div>
          </div>

          <div>
            {/* <div className='flex justify-between items-center py-2 border-b-2'> <h3 className='text-2xl'>Total:</h3> <h3 className='text-2xl text-black' >$1299</h3></div>
            <div className='flex justify-between items-center py-2 pb-2'> <h3 className='text-2xl'>Advance:</h3> <h3 className='text-2xl text-black' >$1299</h3></div>
            <div className='flex justify-between items-center py-2'> <h3 className='text-2xl'>Remaining:</h3> <h3 className='text-2xl text-black' >$239</h3></div> */}
            {/* <div><button className='bg-black text-white w-full py-2'>Checkout now</button></div> */}
            <div className='text-2xl text-black absolute top-2 right-2' onClick={()=> {
                setActiveStatus(false)
                setBookingDetails({})
            }}> <RxCrossCircled></RxCrossCircled></div>
         
          </div>
             </div>
            </div>
        </div>
    );
}

export default Checkout;
