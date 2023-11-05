import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
 fetch('rooms.json')
 .then(res => res.json())
 .then(data => setRooms(data))
    },[])
    const changeRoute = (id)=>{
        navigate(`/rooms/details/${id}`)
    }
    return (
        
        <div className='min-h-[90vh]  font-pop mb-2'>
            <div className='flex'>
            <div className='w-1/4 space-y-2 px-2 py-14  '>
                  <h2 className='text-xl text-black'>filters</h2>
                  
                  <div className='space-y-2'>
              
                <h2 className='text-black'>Min price</h2>
                <input type="text" className='w-full b-2 border-2 outline-none py-3 px-2  rounded-lg' />
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Max price</h2>
                <input type="text" className='w-full b-2 border-2 outline-none py-3 px-2  rounded-lg' />
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Sort by price</h2>
                  <select className='w-full b-2 border-2 outline-none py-3 px-2  rounded-lg'>
                    <option value='All'>All</option>
                    <option value='Low to high '>Lowest to highest</option>
                    <option value='High to low'>Height to lowest</option>
                    <option>Ok</option>
                  </select>
                  
                </div>
                </div>
                
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[90vh] overflow-scroll'>
                {
                    rooms.map((room,index)=>{
                            return <div className=' bg-white hover:cursor-pointer' key={index} onClick={()=>{
                                changeRoute(room.id)
                            }}>
                                     <img src={room.roomImages[0]} alt="" className='w-full h-72 rounded-lg' />
                                     <div className='px-2'>
                                        <h1 className='text-black text-2xl py-2'>${room.pricePerNight}/Night</h1>
                                        <div>
                                            <div className='flex rooms-center gap-1 my-2'>
                                           <div className='pr-3 border-r-2 border-gray-500'>
                                                 
                                           <Rating initialRating={room.ratting} readonly  emptySymbol={<AiOutlineStar className='text-xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-xl text-amber-400'></AiFillStar>}/>
                                           </div>
                                           <div>
                                            <p>Review({room.reviews.length})</p>
                                           </div>
          </div>
                                        </div>
                                     </div>
                            </div>
                    })
                }
                
            </div>
            </div>
            <div className="checkout-pop">
                
            </div>
        </div>
    );
}

export default Rooms;
