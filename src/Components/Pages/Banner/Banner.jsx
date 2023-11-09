import React from 'react';
import './Banner.css'
import BannerNavbar from './BannerNavbar';
import { Parallax } from 'react-parallax';
import {AiOutlineArrowRight} from'react-icons/ai'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
    
        <div className='banner font-lato lg:min-h-[100vh] min-h-[70vh]'>
            <BannerNavbar></BannerNavbar>
            <div className='lg:flex justify-center items-center lg:pt-40 pt-10'>
               <div>
                <h1 className='md:text-6xl text-5xl text-white md:text-center font-semibold'>Experience the Epitome of  Opulence <br />  at Grand Luminary</h1>
                <div className='text-center my-10 md:flex justify-center items-center'><Link to = '/rooms'><button className = 'md:px-8 px-4 md:py-4  py-4 rounded-md  text-white bg-secondary text-xl flex gap-2 items-center'><h2>EXPLORE ROOMS</h2><AiOutlineArrowRight></AiOutlineArrowRight></button></Link></div>
               </div>
            </div>
        </div>
       
        </>
    );
}

export default Banner;
