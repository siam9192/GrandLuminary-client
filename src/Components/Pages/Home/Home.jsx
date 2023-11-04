import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Featured from '../../Featured/Featured';
import {FiMail} from 'react-icons/fi';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Featured></Featured>
            <div className='news-latter my-10 font-lato min-h-52'>
              <div className='py-10 max-w-7xl mx-auto  space-y-4'>
              <h1 className='text-4xl text-white font-semibold font-lato'>sign up for newsletter</h1>
              <p className='text-white '>Sign up for our mailing list to get latest updates and offers</p>
              <div className=' w-1/2 text-white bg-transparent border-2 border-white placeholder:text-white pr-2 pl-5 py-3 outline-none rounded-md flex items-center gap-1'>
                <FiMail className=' text-xl text-white top-3 '></FiMail>
                <input type="text" placeholder='Enter your email' className=' bg-transparent placeholder:text-white outline-none  w-full border-r-2' />
                <button className='text-white hover:text-black bg-transparent '>Subscribe</button>
              </div>
              </div>
            </div>
        </div>
    );
}

export default Home;
