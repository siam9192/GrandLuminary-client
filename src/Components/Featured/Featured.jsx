import React, { useEffect, useState } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import Rating from 'react-rating';
import Slider from 'react-slick';
import './featured.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrNext,GrPrevious} from 'react-icons/gr'
const Featured = () => {
    const [featured,setFeatured] = useState([]);

    useEffect(()=>{
  fetch('/rooms.json')
  .then(res => res.json())
  .then(data => setFeatured(data))
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    
        nextArrow:<GrNext ></GrNext>,
        prevArrow:<GrPrevious></GrPrevious>,
        responsive:[
{
    breakpoint: 768,
    settings:{
        slidesToShow:2
    }
},
{
    breakpoint:640,
    settings:{
        slidesToShow:1
    }
}
        ]
       
      };
    return (
        <div className='bg-[rgb(189,238,234) my-10 font-pop'>
              
        
        <div className='py-5 max-w-7xl mx-auto px-5'>
              <h1 className='text-3xl text-black font-semibold font-lato py-3'>Featured rooms for you</h1>
              <div className=' gap-5  bg-white rounded-lg '>
                <Slider {...settings}>
               {
                featured.map((item,index)=>{
                    return <div className=' bg-white shadow-xl ' key={index}>
                             <img src={item.roomImages[0]} alt="" className='w-full h-72' />
                             <div className='px-2'>
                                <h1 className='text-black text-2xl py-2'>${item.pricePerNight}/Night</h1>
                                <div>
                                    <div className='flex items-center gap-1 my-2'>
                                   <div className='pr-3 border-r-2 border-gray-500'>
                                         
                                   <Rating initialRating={item.ratting} readonly  emptySymbol={<AiOutlineStar className='text-xl text-amber-400'></AiOutlineStar>}
  fullSymbol={<AiFillStar className='text-xl text-amber-400'></AiFillStar>}/>
                                   </div>
                                   <div>
                                    <p>Review {item.reviews.length}</p>
                                   </div>
  </div>
                                </div>
                             </div>
                    </div>
                })
               }
               </Slider>
              </div>
              </div>
              </div>
    );
}

export default Featured;
