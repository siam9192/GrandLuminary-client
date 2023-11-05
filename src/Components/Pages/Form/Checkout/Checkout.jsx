import React, { useEffect,useState } from 'react';
import './checkout.css'
import { useParams } from 'react-router-dom';
const Checkout = () => {
    const [room,setRoom] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const {roomId} = useParams();
    const [checkoutDetails,setCheckoutDetails] = useState(null);
    const currentDate = new Date();
    
    useEffect(()=>{
        fetch('/rooms.json')
        .then(res => res.json())
        .then(data => {
        const find = data.find(item => item.id == roomId);
        console.log(find)
        setRoom(find);
        })
        // console.log(data)
        },[])
        if(!room){
            return
        }
        const handleCheckout = ()=>{

        }
    return (
        <div className='max-w-7xl mx-auto min-h-[90vh] font-pop grid md:grid-cols-2 grid-cols-1'>
            <form action="">
                <h1 className='text-3xl text-black font-semibold'>Checkout</h1>
                <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Your Name:</h1>
                        <input type="text" name='name' className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Phone Number</h1>
                        <input type="text" name='phone_number' className='w-full py-2 border-2 px-2' />
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Room No:</h1>
                        <input type="text" className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Beds:</h1>
                        <input type="text" className='w-full py-2 border-2 px-2' />
                        </div>
                    </div>
                  <div className="flex items-center space-x-4">
                  <div className='flex-1'>
                            <h1 className='text-black my-2'>Check-in Date</h1>
                        <input type="date" name='check_in' className='w-full py-2 border-2 px-2' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black my-2'>Price/night:</h1>
                        <input type="number" name='price' className='w-full py-2 border-2 px-2' />
                        </div>

                  </div>
                  <div>
                    <textarea className='w-full border-2 resize-none h-52 p-2' placeholder='Notes(optional)'></textarea>
                  </div>
                  <button className='text-white bg-black py-3 w-full'>Checkout</button>
                </div>

            </form>
            <div>
                <img src="/images/Form/checkout.jpg" alt="" />
            </div>
            <div className="checkout-pop py-20 font-pop hidden">
            <form action="" className='bg-white p-5 md:min-w-[600px] rounded-lg'>
             <div>
                <div className=''>
                    <div className='flex items-center gap-2'>
                    <div className='flex-1'>
                    <h3 className=' text-black py-2'>Room No:</h3>
                 <input type="text" value={room.id} readOnly className=' w-full  mx-auto py-2 border-2 px-2' />
                  </div>
                  <div className='flex-1'>
                    <h3 className=' text-black py-2'>Beds:</h3>
                 <input type="text"value={room.totalSeat} className=' w-full  mx-auto py-2 border-2 px-2'  />
                  </div>
                    </div>
                  <div>
                    <h3 className='text-black py-2'>Check in date:</h3>
                 <input type="date" className=' w-full  mx-auto py-2 border-2' />
                  </div>
                  <div>
                    <h3 className='text-black py-2'>Check Out date:</h3>
                 <input type="date" min={currentDate} className='w-full  mx-auto py-2 border-2' />
                
                  </div>
                </div>
             </div>
            </form>
            </div>
        </div>
    );
}

export default Checkout;
