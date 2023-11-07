import React, { useContext, useEffect, useRef, useState } from 'react';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineAreaChart} from 'react-icons/ai';
import {FaUserCheck} from 'react-icons/fa';
import {BsFillStopwatchFill} from 'react-icons/bs';
import axios from 'axios';
import AxiosBase from '../../Axios/AxiosBase';
import QueryRooms from '../../Axios/Query/QueryRooms';
const AddPost = () => {
    const [userData,setUserData] = useState({});  
    // const {user} = useContext(fireBaseContext);
    const [photos,setPhotos] = useState([]);
    const [offers,setOffers] = useState([]);
    const photoInput = useRef();
    const offer = useRef();

  console.log(QueryRooms())
function addPhoto (){

    const find = photos.find(photo => photo === photoInput.current.value);
    if(photoInput.current.value === ''){
return;
    }
    if(find){
        return;
    }
   
    if(photos.length < 6){
    setPhotos([...photos,photoInput.current.value])
    }
    photoInput.current.value=''

}
const addOffer = ()=>{
setOffers([...offers,offer.current.value])
offer.current.value='';
// console.log("Working")
}

const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
const room = {
    images:photos,
    price: parseInt(form.price.value),
    total_ratting: 0,
    ratting: 0,
    room_size: form.room_size.value,
     total_seats: parseInt(form.total_seats.value),
     available_seats: 3,
     special_offers: offers,
     total_review : 0,
            description:form.description.value
}
console.log(room)

AxiosBase().post('/api/v1/rooms/new',room)
.then(res => e.target.reset())

}

    return (
        <div className='flex font-pop '>
            <div className='w-[40%] h-[100vh] bg-black p-5 sticky top-0  space-y-3'>
                <h1 className='text-2xl text-white font-medium'>Share Your Rental Property Listing</h1> 
                <p className='text-white'>By posting your rental property on our platform, you gain access to a wide and diverse audience actively searching for homes to rent. We make sure your listing gets the attention it deserves.</p>
                <div className='space-y-8'>
                    <div className=' flex items-center gap-1 text-white '>
                       <MdOutlineTravelExplore></MdOutlineTravelExplore> <p>Maximize Your Exposure</p>
                    </div>
                    <div className=' flex items-center gap-1 text-white '>
                       <AiOutlineAreaChart></AiOutlineAreaChart> <p> Reach Qualified Tenants</p>
                    </div>
                    <div className=' flex items-center gap-1 text-white '>
                       <FaUserCheck></FaUserCheck> <p> User-Friendly Platform</p>
                    </div>
                    <div className=' flex items-center gap-1 text-white '>
                       <BsFillStopwatchFill></BsFillStopwatchFill> <p> 24/7 Visibility</p>
                    </div>
                </div>
            </div>
            <div className='w-full px-10 py-2'>
    <h1 className='text-3xl'>Add Your Property to Our Listings</h1>
    <div className='py-5'>
       <form className='space-y-8' onSubmit={handleSubmit}>
        <div>
            <p className='py-2 '>Photos:</p>
            <div className='flex gap-4 items-center'>
            {photos.map(photo =>{
                return <div>
                    <img src={photo} alt="" className='w-32' />
                    </div>
            })}
            </div>
        </div>
       <div className='flex items-center'>
        <input type="text" ref={photoInput} className='w-full py-2 px-2 outline-none border-2' placeholder='Photo URL'/>  <button className='btn btn-primary' onClick={()=>{
            addPhoto()
        }}>+</button>
        </div>
        <div>
           
        </div>
        <div className='flex items-center gap-5'>
    
        <div>
            <label className=''>Total seat:</label>
        <input type="text" name='total_seats'  className='w-full py-2 px-2 outline-none border-2' required/> 
        </div>
        </div>
       < div className='flex items-center gap-5'>
        <div className='flex-1'>
            <label className=''>Price:</label>
        <input type="text" name='price'  className='w-full py-2 px-2 outline-none border-2' required/> 
        </div>
        <div className='flex-1'>
            <label className=''>Room size:</label>
        <input type="text" name='room_size'  className='w-full py-2 px-2 outline-none border-2' required/> 
        </div>
        </div>
        
    
        <div >
            <div className='py-3'>
                <h1 className=''>Features:</h1> <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '> {
                
                offers.map((item,index)=>{
                    return <div className='p-2 bg-gray-200 rounded'>{item}</div>
                })}</div>
                </div>
            <label className=''>Add Features:</label>
        <div className='flex items-center'><input type="text" name='features' ref={offer} className='w-full py-2 px-2 outline-none border-2'/> <button className='btn  btn-primary' onClick={addOffer}>+</button></div>
        </div>
        <div className=''><label htmlFor="">Description</label>
        <textarea name="description" id="" placeholder='write something about your properties' className='w-full py-2 px-2 outline-none border-2 resize-none h-32' required>

        </textarea> 
        </div>
        <button type='submit' className='btn btn-primary w-full'>Submit post</button>
       </form>
    
    </div>
    
            </div>
        </div>
    );
}

export default AddPost;
