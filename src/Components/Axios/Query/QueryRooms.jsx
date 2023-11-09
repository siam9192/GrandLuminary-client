import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosBase from '../AxiosBase';

const QueryRooms = (min_price,max_price,sort_type) => {
    const {data:rooms,isLoading,refetch} = useQuery({
        queryKey:["rooms"],
        queryFn:async()=>{
            const res = await  fetch (`https://ass11-gl0jvmq72-siam-hasans-projects.vercel.app/api/v1/rooms?min_price=${min_price}&max_price=${max_price}&sort_type=${sort_type}`);
            // return await data.json();
            const data = await res.json();
            const result = data.filter(d=> d.available_seats !== 0);
            return result;

        }
    })
    
   return {rooms,isLoading,refetch}
}

export default QueryRooms;
