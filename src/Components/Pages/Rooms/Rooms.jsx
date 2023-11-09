import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import QueryRooms from '../../Axios/Query/QueryRooms';
import AddReview from '../../Reviews/AddReview';
import { Helmet } from 'react-helmet';
const Rooms = () => {
   const [minimumPrice,setMinimumPrice] = useState(0);
   const [maxPrice,setMaxPrice] = useState(2000)
   const [sort_type,set_sort_type] = useState("All")
    const navigate = useNavigate();
    const {rooms,isLoading,refetch} =  QueryRooms(minimumPrice,maxPrice,sort_type);
    const changeRoute = (id)=>{
        navigate(`/rooms/details/${id}`)
    }
    const handleSearch = ()=>{
      refetch()
    }
    if(isLoading){
        return  <div className='max-w-7xl min-h-[80vh] mx-auto flex justify-center items-center'>
            <span class="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        
        <div className='min-h-[90vh]  font-pop mb-2 max-w-7xl mx-auto lg:px-0 px-2'>
            <Helmet>
                <title>Grand Luminary || ROOMS</title>
            </Helmet>
            <div className=''>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5  pb-2 border-b-2 pt-1  '>
               
                  
                  <div className='space-y-2'>
              
                <h2 className='text-black'>Min price</h2>
                <input type="text" value={minimumPrice} className='w-full b-2 border-2 border-primary outline-none py-3 px-2  bg-gray-200 rounded-lg' onChange={(e)=> setMinimumPrice(e.target.value)}/>
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Max price</h2>
                <input type="text" value={maxPrice} className='w-full b-2 border-2 outline-none py-3 px-2  border-primary bg-gray-200 rounded-lg' onChange={(e)=>setMaxPrice(e.target.value)}/>
                </div>
                <div className='space-y-2'>
                <h2 className='text-black'>Sort by price</h2>
                  <select className='w-full b-2 border-2 outline-none py-3 px-2  border-primary rounded-lg bg-gray-200' onChange={(e)=> set_sort_type(e.target.value)}>
                    <option >All</option>
                    <option >low to high</option>
                    <option>high to low</option>
                   
                  </select>
                  
                </div>
                <div className='space-y-2 '>
                <h2 className='text-black'>Search</h2>
                  <button className='bg-red-500 text-white w-full py-3'onClick={handleSearch}>Search</button>
                </div>
                </div>
                
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-5'>
                {
                    rooms.map((room,index)=>{
                            return <div className=' bg-white hover:cursor-pointer border-2' key={index} onClick={()=>{
                                changeRoute(room._id)
                            }}>
                                     <img src={room.images[0]} alt="" className='w-full h-72' />
                                     <div className='px-2'>
                                        <h1 className='text-black text-2xl py-2'>${room.price}/night</h1>
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
