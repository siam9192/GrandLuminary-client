import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Booking from './Booking';
import AxiosBase from '../../Axios/AxiosBase';
import { fireBaseContext } from '../../../AuthProvider/AuthProvider';

const MyBookings = () => {
    const [bookings,setBookings] = useState([]);
    const {user,loading} = useContext(fireBaseContext);
    useEffect(()=>{
 AxiosBase().get(`/api/v1/bookings?user_email=${user.email}`)
 .then(res => setBookings(res.data))
    },[])
    console.log(bookings)
    return (
        <div className='max-w-7xl mx-auto font-pop'>
            <Navbar></Navbar>      
          
           <div className='py-4'>
                <h1 className='text-2xl text-black py-3'>You have {bookings.length} bookings</h1>
               <div className='grid md:grid-cols-2 gap-5'>
                {
                    bookings.map((booking,index)=>{
                       return <Booking booking={booking} key = {index}></Booking>
                    })
                }
               </div>
           </div>
        </div>
    );
}

export default MyBookings;
