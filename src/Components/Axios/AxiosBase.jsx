import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
   const AxiosContext =  axios.create({
        baseURL:'localhost:5000',
        withCredentials: true
    })
   
    return AxiosContext;
}

export default AxiosBase;
