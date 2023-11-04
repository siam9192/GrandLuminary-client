import React from 'react';
import { NavLink } from 'react-router-dom';
const BannerNavbar = () => {
    return (
        <div className='flex items-center justify-between max-w-7xl mx-auto font-rob'>
            <div className='flex items-center gap-2'>
                <div>
                <img src="images/Logo/Logo.png" alt="" className='w-20' />
                </div>
                <h1 className='text-white font-bold text-3xl'>Grand Luminary</h1>
            </div>
            <nav>
               <ul className='flex items-center gap-2 text-white text-xl'>
 <NavLink>Home</NavLink>
 <NavLink>Rooms</NavLink>
 <NavLink>My Bookings</NavLink>
 <NavLink>Login</NavLink>
 <NavLink to='/signup'>Sign up</NavLink>
 <NavLink>Contact</NavLink>
               </ul>
            </nav>
        </div>
    );
}

export default BannerNavbar;
