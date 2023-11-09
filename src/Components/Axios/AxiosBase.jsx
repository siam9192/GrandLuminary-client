import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
   const AxiosContext =  axios.create({
        baseURL:'https://ass11-gl0jvmq72-siam-hasans-projects.vercel.app',
        withCredentials: true
       
    })
   
    return AxiosContext;
}

export default AxiosBase;
