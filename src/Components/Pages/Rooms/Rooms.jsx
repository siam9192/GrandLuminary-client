import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import QueryRooms from '../../Axios/Query/QueryRooms';
const Rooms = () => {
   
    const navigate = useNavigate();
   const {rooms,isLoading} =  QueryRooms();
    const changeRoute = (id)=>{
        navigate(`/rooms/details/${id}`)
    }
    if(isLoading){
        return ;
    }
    return (
        
        <div className='min-h-[90vh]  font-pop mb-2 max-w-7xl mx-auto'>
            <div className=''>
            <div className='flex justify-between gap-5 pb-2 border-b-2'>
               
                  
                  <div className='space-y-2'>
              
                <h2 className='text-black'>Min price</h2>
                <input type="text" className='w-full b-2 border-2 border-primary outline-none py-3 px-2  rounded-lg' />
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Max price</h2>
                <input type="text" className='w-full b-2 border-2 outline-none py-3 px-2  border-primary rounded-lg' />
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Sort by price</h2>
                  <select className='w-full b-2 border-2 outline-none py-3 px-2  border-primary rounded-lg'>
                    <option >All</option>
                    <option >low to high</option>
                    <option>high to low</option>
                   
                  </select>
                  
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Sort by review</h2>
                  <select className='w-full b-2 border-2 outline-none py-3 px-2  border-primary rounded-lg'>
                    <option >All</option>
                    <option >low to heigh</option>
                    <option >heigh to low</option>
                   
                  </select>
                  
                </div>
                </div>
                
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                {
                    rooms.map((room,index)=>{
                            return <div className=' bg-white hover:cursor-pointer' key={index} onClick={()=>{
                                changeRoute(room._id)
                            }}>
                                     <img src={room.images[0]} alt="" className='w-full h-72' />
                                     <div className='px-2'>
                                        <h1 className='text-black text-2xl py-2'>${room.price}/Night</h1>
                                        <div>
                                            <div className='flex rooms-center gap-1 my-2'>
                                           <div className='pr-3 border-r-2 border-gray-500'>
                                                 
                                           <Rating initialRating={room.ratting} readonly  emptySymbol={<AiOutlineStar className='text-xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-xl text-amber-400'></AiFillStar>}/>
                                           </div>
                                           <div>
                                            <p>Review({room.total_review})</p>
                                           </div>
          </div>
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

export default Rooms;
