import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosBase from '../AxiosBase';

const QueryRooms = (min_price,max_price,sort_type) => {
    const {data:rooms,isLoading,refetch} = useQuery({
        queryKey:["rooms"],
        queryFn:async()=>{
            const data = await  fetch (`http://localhost:5000/api/v1/rooms?min_price=${min_price}&max_price=${max_price}&sort_type=${sort_type}`);
            return await data.json();

        }
    })
    
   return {rooms,isLoading,refetch}
}

export default QueryRooms;
