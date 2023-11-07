import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Booking from './Booking';
import AxiosBase from '../../Axios/AxiosBase';
import { fireBaseContext } from '../../../AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';
const MyBookings = () => {
    // const [bookings,setBookings] = useState([]);
    const {user,loading} = useContext(fireBaseContext);
    useEffect(()=>{
 
//  .then(res => setBookings(res.data))
    },[])
    const {data:bookings,isLoading,refetch} = useQuery({
        queryKey:['booking-data'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/api/v1/bookings?user_email=${user.email}`);
            return await res.json();
        }
    })
 if(isLoading){
    return;
 }
    
    return (
        <div className='max-w-7xl mx-auto font-pop'>
            <Navbar></Navbar>      
          
           <div className='py-4'>
                <h1 className='text-2xl text-black py-3'>You have {bookings.length} bookings</h1>
               <div className='grid md:grid-cols-2 gap-5'>
                {
                    bookings.map((booking,index)=>{
                       return <Booking booking={booking} refetch= {refetch} key = {index}></Booking>
                    })
                }
               </div>
           </div>
        </div>
    );
}

export default MyBookings;
