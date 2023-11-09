import React, { useEffect, useState } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import Rating from 'react-rating';
import Slider from 'react-slick';
import './featured.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrNext,GrPrevious} from 'react-icons/gr'
import AxiosBase from '../Axios/AxiosBase';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Featured = () => {
    const [featured,setFeatured] = useState([]);

    useEffect(()=>{
  AxiosBase().get('/api/v1/rooms')
  .then(data => {
    const result = data.data.filter(d=> d.ratting > 2)
    setFeatured(result)
  })
  AOS.init();
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
              <h1 className='text-4xl text-black font-semibold font-lato py-3'>Featured rooms for you</h1>
              <div className=' gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  bg-white rounded-lg '>
              
               {
                featured.map((item,index)=>{
                    return <div className=' ' key={index} data-aos="zoom-in-up">
                             <img src={item.images[0]} alt="" className='w-full md:h-72' />
                             <div className='px-2'>
                                <h1 className='text-black text-2xl py-2'>${item.price}/night</h1>
                                <div>
                                    <div className='flex items-center gap-1 my-2'>
                                   <div className='pr-3 border-r-2 border-gray-500'>
                                         
                                   <Rating initialRating={item.ratting} readonly  emptySymbol={<AiOutlineStar className='text-xl text-amber-400'></AiOutlineStar>}
  fullSymbol={<AiFillStar className='text-xl text-amber-400'></AiFillStar>}/>
                                   </div>
                                   <div>
                                    <p>Review {item.total_review}</p>
                                   </div>
  </div>
  <Link to = {`/rooms/details/${item._id}`}><button className='w-full bg-black py-2 text-white'>Book now</button></Link>
                                </div>
                             </div>
                    </div>
                })
               }
              
              </div>
              </div>
              </div>
    );
}

export default Featured;
