import React, { useEffect, useState } from 'react';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './offers.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const Offers = () => {
    const [offers,setOffers] = useState([])
    useEffect(()=>{
        fetch('/offers.json')
        .then(res=> res.json())
        .then(data => setOffers(data))
    },[])
  
    return (
        <div className='max-w-7xl mx-auto font-pop py-2'>
            <h1 className='text-black text-3xl  font-semibold py-3 '>Special offers and promotion </h1>
             <Swiper
        navigation={true}
        
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
  
      modules={[Navigation,Autoplay]}
    >
    {
     offers.map((item,index)=>{
return <SwiperSlide>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
   <img src={item.image} alt="" className='w-full md:h-72'/>
   
   <div className='space-y-8'>
    <h1 className='text-black  text-3xl font-semibold'>{item.heading}</h1>
    <p className='text-black '>{item.description}</p>
    <button className='px-8 py-3 bg-black text-white'>Book now</button>
   </div>
   </div>
</SwiperSlide>
        })
    }
    </Swiper>
        </div>
        
    );
}

export default Offers;
