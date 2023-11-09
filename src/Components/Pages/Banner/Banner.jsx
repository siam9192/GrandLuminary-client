import React from 'react';
import './Banner.css'
import BannerNavbar from './BannerNavbar';
import { Parallax } from 'react-parallax';
import {AiOutlineArrowRight} from'react-icons/ai'
const Banner = () => {
    return (
        <>
    
        <div className='banner font-lato lg:min-h-[100vh] min-h-[70vh]'>
            <BannerNavbar></BannerNavbar>
            <div className='lg:flex justify-center items-center lg:pt-40 pt-10'>
               <div>
                <h1 className='md:text-6xl text-5xl text-white md:text-center font-semibold'>Experience the Epitome of  Opulence <br />  at Grand Luminary</h1>
                <div className='text-center my-10 flex justify-center items-center'><button className = 'px-8 md:py-4  py-2 rounded-md  text-white bg-secondary text-xl flex gap-2 items-center'><h2>EXPLORE ROOMS</h2><AiOutlineArrowRight></AiOutlineArrowRight></button></div>
               </div>
            </div>
        </div>
       
        </>
    );
}

export default Banner;
