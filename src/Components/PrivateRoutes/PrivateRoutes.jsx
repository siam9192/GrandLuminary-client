import React from 'react';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const PrivateRoutes = ({children}) => {
    const {user,loading} = GetLoginInfo();
    const {pathname,state}= useLocation();
  console.log(state)
    if(loading){
        return <div className='min-h-[80vh] flex justify-center items-center'>
<span class="loading loading-bars loading-lg text-[#FF1F3D] "></span>
        </div>
    }
if(user){
    return children;
}
else{
        return <Navigate to='/login' state={pathname} replace></Navigate>
    
}

}


export default PrivateRoutes;
