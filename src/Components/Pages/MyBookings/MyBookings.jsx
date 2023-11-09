import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Booking from './Booking';
import AxiosBase from '../../Axios/AxiosBase';
import { fireBaseContext } from '../../../AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet';
const MyBookings = () => {
    const {user,loading} = useContext(fireBaseContext);
    useEffect(()=>{
 

    },[])
    const {data:bookings,isLoading,refetch} = useQuery({
        queryKey:['booking-data'],
        queryFn:async()=>{
            const res = await fetch(`https://ass11-gl0jvmq72-siam-hasans-projects.vercel.app/api/v1/bookings?user_email=${user.email}`,{
                method:'GET',
                credentials : 'include'
            });
            return await res.json();
        }
    })
 if(isLoading){
    return;
 }
    
    return (
        <>
        <Helmet>
            <title>Grand Luminary || MY BOOKING</title>
        </Helmet>
        <div className='max-w-7xl mx-auto font-pop'>
            <Navbar></Navbar>      
          
           <div className='py-4  min-h-[80vh]'>
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
      <Footer></Footer>
        </>
    );
}

export default MyBookings;
