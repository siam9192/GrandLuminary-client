import React from 'react';
import './About.css'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet';
const About = () => {
    return (
        <>
        <Helmet>
            <title>Grand Luminary || ABOUT</title>
        </Helmet>
        <div className='max-w-7xl mx-auto font-lato pb-10'>
            {/* <img src="/images/hotel/banner/banner1.jpg" alt="" /> */}

                <Navbar></Navbar>
            
            <div className='about-banner min-h-[60vh] flex justify-center items-center'>
             <div>
                    <h1 className='text-5xl text-white font-bold text-center '>About Grand Luminary</h1>
             </div>
            </div>
            <div className='space-y-7 font-pop py-5'>
                <div>
                    <h1 className='text-xl font-semibold text-black'>About Grand Luminary:</h1>

                    <p className='text-black'>Welcome to Grand Luminary, where luxury meets comfort in the heart of [City Name]. Our hotel is more than just a place to stay; it's an experience that leaves a lasting impression.</p>
                </div>
            </div>
            <div>
                    <h1 className='text-xl font-semibold text-black'>Location:</h1>

                    <p className='text-black'>Situated in the vibrant [City Name] district, Grand Luminary offers a prime location for both business and leisure travelers. You'll find us [describe the specific location or neighborhood of your hotel].</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-black'>Luxurious Accommodations:</h1>

                    <p className='text-black'>At Grand Luminary, we take pride in offering spacious and elegantly designed rooms and suites. Our rooms are equipped with modern amenities to ensure your stay is both comfortable and enjoyable. Whether you're traveling for business or leisure, you'll find the perfect accommodation to suit your needs.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-black'>World-Class Dining:</h1>

                    <p className='text-black'>ndulge in a culinary journey at our in-house restaurant, where our talented chefs prepare exquisite dishes that cater to a variety of tastes. From fine dining to casual meals, our restaurant offers a diverse menu to satisfy your cravings.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-black'>Exceptional Service:</h1>

                    <p className='text-black'>Our dedicated and professional staff is committed to making your stay memorable. We're here to assist with your needs and provide personalized service to ensure your visit is nothing short of perfect.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-black'>Events and Meetings:</h1>

                    <p className='text-black'>Grand Luminary is an ideal venue for conferences, meetings, and special events. Our well-equipped facilities can accommodate a range of gatherings, from intimate gatherings to large corporate events.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-black'>Explore:</h1>

                    <p className='text-black'>With our convenient location, you're just moments away from [mention popular attractions and landmarks in the area]. We can help you arrange tours and experiences to make the most of your visit to [City Name].

At Grand Luminary, we're dedicated to delivering an exceptional experience, and we look forward to welcoming you as our guest. Your journey begins here.

Feel free to customize this template with specific details about your hotel, such as the year it was established, any awards or recognitions, and unique features that make your hotel stand out. Additionally, including high-quality images of your hotel's interior and exterior can provide a visual appeal to your "About Us" section on your website or promotional materials.</p>
                </div>

        </div>
        <Footer></Footer>
        </>
    );
}

export default About;
