import React, { useEffect, useState } from 'react';
import './Weather.css'
import axios from 'axios';

const Weather = () => {
    const [weatherInfo,setWeatherInfo] = useState(null);
    const apiKey = '9fb195c31a55a3629c5b40118e44a5fa'
    useEffect(()=>{
         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${apiKey}`
          )
          .then(res =>{
            setWeatherInfo(res.data)
           
          })
    },[])

    const kelvinToCelsius = (temp) => temp - 273.15;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      
    const today = new Date();
    
  
    return (
        <div className='weather min-h-[100vh] font-pop'>
            <div className='max-w-7xl mx-auto py-10'>
              <h1 className='text-7xl text-white font-lato'>Weather around the hotel</h1>
              <div className='flex justify-between '>
                <div className='py-20'>
                    <div>
                        <h3 className='text-xl font-semibold text-white font-pop'>{days[today.getDay()].slice(0,3)},{months[today.getMonth()]},{today.getDate()}</h3>
                    </div>
                    <h1 className="text-3xl font-semibold text-white">{kelvinToCelsius(weatherInfo?.main.temp).toFixed(2)}&deg; C</h1>
                    <img src="https://i.ibb.co/Srx6nqm/pngwing-com-4.png" alt="" className='w-1/2' />
                <h1 className='text-2xl font-semibold py-3 text-white'>
                Mandarin Oriental, Bangkok
                    </h1>
                   
                    
                    
                </div>
                <div>
                 
                  <div className='py-20'>
                  <img src="https://i.ibb.co/4N8qGWw/pngwing-com-6.png" alt="" className='w-1/2'/>
                  <h1 className='text-3xl font-semibold py-3 text-white'>
                       Wind {weatherInfo?.wind.speed} <span className='text-2xl'>km/h</span>
                    </h1>
                    <h1 className='text-3xl font-semibold py-3 text-white'>
                       Humidity {weatherInfo?.main.humidity} %
                    </h1>
                   
                    <h1 className='text-3xl font-semibold py-3 text-white'>
                       Condition: {weatherInfo?.weather[0].description}
                    </h1>
                </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Weather;
