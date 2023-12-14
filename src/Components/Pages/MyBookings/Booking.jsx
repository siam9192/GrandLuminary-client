import React from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import AxiosBase from '../../Axios/AxiosBase';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Booking = ({booking,refetch}) => {
   const [selectedValue,setSelectedValue] = useState(new Date(booking.check_in_date))
    const [isUpdating,setUpdating] = useState(false);
   const [check_in_value,set_check_in_value] = useState(booking.check_in_date)
    const {data:room,isLoading,refetch:roomFetch} = useQuery({
        queryKey:['book-data'],
        queryFn:async()=>{
            const res = await fetch(`https://ass11-gl0jvmq72-siam-hasans-projects.vercel.app/api/v1/room/get?id=${booking.room_id}`);
            return await res.json();
        }
        })
        const handleDateChange = (date) => {
        
          const newDate = new Date(date)

              // setSelectedDate(date);
              set_check_in_value(c_d)  
              console.log(c_d)
              setSelectedValue(new Date(date))  
            
          };
          
    const handleCancel =()=>{
        const date = new Date();
        const currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        
//         const date1 = moment(currentDate);
// const date2 = moment(booking.check_in_date);
// const dif = date1.diff(date1,'days');
const available_seats = room.available_seats+1;
const date1 = new Date(currentDate);
const date2 = new Date (booking.check_in_date);
const time = date2.getTime()-date1.getTime();
const dif = time/(1000*60*60*24)

if(dif <=0 ){
  Swal.fire({
    title: "You can not cancel it right now",
    text: "Cancel date expired.",
    icon: "error"
  });
}
if(dif > 0){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to cancel this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText:"No",
        confirmButtonText: "i'm sure!"
      }).then((result) => {
        if (result.isConfirmed) {
        AxiosBase().delete(`/api/v1/booking/delete/${booking._id}`)
        
            .then(res =>{
                AxiosBase().patch(`/api/v1/update-room?id=${room._id}`,{available_seats})
                .then(res =>{
                    if(res.data.modifiedCount){
                        Swal.fire({
                            title: "Canceled!",
                            text: "Your booking has been canceled.",
                            icon: "success"
                          });
                          refetch()
                          roomFetch()
                    }
                })
              
          })
        
        }
      });
}
    }
    const  openUpdate = ()=>{
        document.getElementById('my_update').showModal()
    }
    const handleUpdate = ()=>{
    if(check_in_value === booking.check_in_date){
        document.getElementById('my_update').close()
       Swal.fire({
                    title: "The room is booked on this date!",
                    text: "Try on another date.",
                    icon: "error"
                  });

       return;
    }
    setUpdating(true)
    
    AxiosBase().get(`/api/v1/find/booking?check_in_date=${check_in_value}&room_id=${booking.room_id}`)
    .then((res)=>{
      // console.log(inputCheck_in.current.value)
     if(res.data.length !== 0){
      console.log(0)
      return;
      
     }
   
     AxiosBase().patch(`/api/v1/booking/update?id=${booking._id}`,{check_in_date: check_in_value})
     .then((res)=>{
     if(res.data){
         if(res.data.modifiedCount>0){
             Swal.fire({
                 title: "Updated!",
                 text: "Your booking has been updated.",
                 icon: "success"
               });
               refetch()
         }
     }
     
     document.getElementById('my_update').close()
     setUpdating(false)
     })
    })

    }
    return (
        <>
        <div className='border-2 md:flex justify-between   gap-1'>
            <div><img src={booking.image} alt="" className='md:w-60  w-full md:h-52'/></div>
            <div className='p-2 md:h-full flex flex-col'>
            <div className='flex-grow pb-4'>
            <h1 className='flex items-center text-2xl text-black'>${booking.price} <p className='text-xl'>(per/night)</p></h1>
                <h1 className='flex text-black'>Check-in date: {booking.check_in_date}</h1>
                <h1 className='flex text-black'>Booking date: {booking.booking_date}</h1>
            </div>
            <div className='flex gap-3'><button className=' bg-transparent border-blue-700 hover:bg-black hover:text-white py-1 px-5 border-2 rounded-full ' onClick={openUpdate}>Update</button><button className=' bg-transparent border-red-500 py-1 px-5 border-2 rounded-full hover:bg-black hover:text-white' onClick={handleCancel}>Cancel</button></div>
            </div>
           
        </div>
         <dialog id="my_update" className="modal">
         <div className="modal-box">
         {isUpdating ? <div className='flex justify-center items-center'> <span className="loading loading-dots loading-lg text-red-600"></span> <br />
         <h2 className='text-center text-black'>Updating</h2></div> :  <div>
          <div className='flex justify-center items-center'>
           <img src="/images/Form/update.jpg" alt="" className='w-10/12' />
          </div>
          <div>
        
           <div >
              <div className='flex  items-center mb-10'>
              <div>
              <p className='py-2 text-black'>Select your new check in date</p>
                {/* <input type="date" defaultValue={booking.check_in_date} className='w-full border-2 border-black rounded py-3 ' onChange={(e)=>{
                  set_check_in_value(e.target.value)
                }}/> */}
              <DatePicker
        showIcon
        selected={selectedValue}
        onChange={handleDateChange}
        minDate={new Date()} // Set minimum date to today
        className='w-72 py-3 border-black border-2 rounded outline-none'
      />
              </div>
                </div>
              
            <div className="flex justify-between gap-5">
            <button className='px-5 py-2 bg-red-500 text-white' onClick={()=>{
                    document.getElementById('my_update').close()
                   }}>Cancel</button>
            <button className='px-5 py-2 bg-green-500 text-white' onClick={handleUpdate}>Update</button> 
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
    </>
    );
}

export default Booking;
