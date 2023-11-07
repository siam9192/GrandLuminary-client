import React from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import AxiosBase from '../../Axios/AxiosBase';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
const Booking = ({booking,refetch}) => {
    // useEffect(()=>{
    //     AxiosBase().get(`/api/v1/room/get?id=${booking.room_id}`)
    //     .then(res => setRoom(res.data))
    // },[])
    const {data:room,isLoading,refetch:roomFetch} = useQuery({
        queryKey:['book-data'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/api/v1/room/get?id=${booking.room_id}`);
            return await res.json();
        }
        })
 console.log(room)
    const handleCancel =()=>{
        const date = new Date();
        const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        
        const date1 = moment(currentDate);
const date2 = moment(booking.check_in_date);
const dif = date2.diff(date1,'days');
const available_seats = room.available_seats+1;
if(dif >= 1){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to cancel this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
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
    return (
        <div className='border-2 flex justify-between   gap-1'>
            <div><img src={booking.image} alt="" className='w-60 h-52'/></div>
            <div className='p-2 h-full flex flex-col'>
            <div className='flex-grow pb-4'>
            <h1 className='flex items-center text-2xl text-black'>${booking.price} <p className='text-xl'>(per/night)</p></h1>
                <h1 className='flex text-black'>Check-in date: {booking.check_in_date}</h1>
                <h1 className='flex text-black'>Check-out date: ${booking.check_out_date}</h1>
                <h1 className='flex text-black'>Booking date: ${booking.booking_date}</h1>
            </div>
            <div className='flex gap-3'><button className=' bg-transparent border-blue-700 py-1 px-5 border-2 rounded-full '>Update</button><button className=' bg-transparent border-red-500 py-1 px-5 border-2 rounded-full hover:bg-black hover:text-white' onClick={handleCancel}>Cancel</button></div>
            </div>
        </div>
    
    );
}

export default Booking;
