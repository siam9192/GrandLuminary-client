import React from 'react';
import './Banner.css'
import BannerNavbar from './BannerNavbar';
import { Parallax } from 'react-parallax';
const Banner = () => {
    return (
        <>
        <Parallax  strength={600} bgClassName='banner'>
        <div className='banner font-lato min-h-[100vh] '>
            <BannerNavbar></BannerNavbar>
            <div className='flex justify-center items-center pt-40'>
               <div>
                <h1 className='text-6xl text-white text-center font-semibold'>Experience the Epitome of  Opulence <br />  at Grand Luminary</h1>
                <div className='text-center my-10'><button className = 'px-8 py-3 text-white bg-blue-500 text-xl rounded-full'>Explore Now</button></div>
               </div>
            </div>
        </div>
        </Parallax>
        </>
    );
}

export default Banner;
