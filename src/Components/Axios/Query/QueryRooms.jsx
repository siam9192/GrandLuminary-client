import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosBase from '../AxiosBase';

const QueryRooms = () => {
    const {data:rooms,isLoading} = useQuery({
        queryKey:["rooms"],
        queryFn:async()=>{
            const data = await  fetch (`http://localhost:5000/api/v1/rooms`);
            return await data.json();

        }
    })
    
   return {rooms,isLoading}
}

export default QueryRooms;
