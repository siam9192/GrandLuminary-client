import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Reviews from '../../Reviews/Reviews';
import AddReview from '../../Reviews/AddReview';
import { Link } from 'react-router-dom';
const RoomDetails = () => {
    const [room,setRoom] = useState(null);
    const [show_review,setShow_review] = useState(false);
    const [image,setImage] = useState(0);
    const {id} = useParams();
    useEffect(()=>{
fetch('/rooms.json')
.then(res => res.json())
.then(data => {
const find = data.find(item => item.id == id);
console.log(find)
setRoom(find);
})
// console.log(data)
},[])
   
    if(!room){
        return;
    }

    return (
       <div className=''>
         <div className='min-h-[90vh] pb-8 font-pop max-w-7xl mx-auto'>
           
           <div className='grid grid-cols-3 gap-3 h-[500px]'>
            <div className='col-span-2 border-'>
                <img src={room.roomImages[image]} alt="" className='w-full h-[500px] rounded-md' />
            </div>
            <div className='grid grid-cols-2 gap-3'>
         {
            room.roomImages.map((item,index)=>{
    return <div onClick={()=>{
        setImage(index)
    }}>
    
                    <img src={item} alt="" className={` rounded-md h-32 border-red-500 ${image === index && "border-4"}`}/>
                </div>
            })
         }
            </div>
    
         
           </div>
           <div className='pb-2 flex justify-between '><div>
                    <h1 className='text-black text-2xl '>Room no:{room.id}</h1>
                    <div className='pr-3 border-r-2 border-gray-500'>
                                                     
                                               <Rating initialRating={room.ratting} readonly  emptySymbol={<AiOutlineStar className='text-2xl text-amber-400'></AiOutlineStar>}
              fullSymbol={<AiFillStar className='text-2xl text-amber-400'></AiFillStar>}/>
                                               </div>
                                               <div>
                                                <p>Review({room.reviews.length})</p>
                                               </div>
                    </div>
                    <div>
    <p>Price/room/night starts from</p>
    <h2 className="text-3xl font-semibold text-amber-500 text-end">${room.pricePerNight}</h2>
    <div className='text-end'>
    <Link to = {`/rooms/checkout/${room.id}`}>
    <button className='text-white bg-red-500 rounded-md px-9 py-2'>Book room</button>
    </Link>
    </div>
                        </div></div>
           <div className='grid grid-cols-3 gap-5 py-9 '>
           <div className=' border-2 p-5'>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Total seat:</h3> <h3>{room.totalSeat}</h3>
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Available seat:</h3> <h3>{room.availableSeat}</h3>
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Availability:</h3> {room.availability ? <h1 className='text-green-600'>Available</h1> : <h1 className='text-red-700'>Unavailable</h1>}
      </div>
      <div className='flex justify-between items-center  '>
      <h3 className='text-xl  text-black'>Price:</h3> <h3>${room.pricePerNight}</h3>
      </div>
        </div>
        <div className='col-span-2 p-5 border-2'>
            <p className='text-black font-semibold'>Description:</p>
            <p className='text-black'>{room.roomDescription}</p>
        </div>
       
    
    </div>
    <div>
        <h1 className='text-3xl text-black pb-5'>Our guests reviews:</h1>
        <Reviews></Reviews>
    </div>
    {
        show_review && <AddReview></AddReview>
    }
            </div>
            <div>

            </div>
            
       </div>
    );
}

export default RoomDetails;
