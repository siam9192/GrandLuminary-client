import React from 'react';

const Booking = () => {
    return (
        <div className='border-2 flex justify-between   gap-1'>
            <div><img src="https://i.ibb.co/Hd6NhMN/Wivenhoe-House-Hotel-Feb-2023-emma-Cabielles-124-1367x912.webp" alt="" className='w-60 h-52'/></div>
            <div className='p-2 h-full flex flex-col'>
            <div className='flex-grow pb-4'>
            <h1 className='flex items-center text-2xl text-black'>$24 <p className='text-xl'>(per/night)</p></h1>
                <h1 className='text-black text-2xl'>Room no: 302</h1>
                <h1 className='flex text-black'>Check-in date: 10-23-23</h1>
                <h1 className='flex text-black'> Booking date:<p> 10-7-6</p></h1>
            </div>
            <div className='flex gap-3'><button className=' bg-transparent border-blue-700 py-1 px-5 border-2 rounded-full '>Update</button><button className=' bg-transparent border-red-500 py-1 px-5 border-2 rounded-full hover:bg-black hover:text-white'>Cancel</button></div>
            </div>
        </div>
    
    );
}

export default Booking;
