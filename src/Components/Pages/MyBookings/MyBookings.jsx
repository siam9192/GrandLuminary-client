import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Booking from './Booking';

const MyBookings = () => {
    return (
        <div className='max-w-7xl mx-auto font-pop'>
            <Navbar></Navbar>      
          
           <div className='py-4'>
                <h1 className='text-2xl text-black'>You have 5 bookings</h1>
               <div className='grid md:grid-cols-2 gap-5'>
                <Booking></Booking>
                <Booking></Booking>
               </div>
           </div>
        </div>
    );
}

export default MyBookings;
