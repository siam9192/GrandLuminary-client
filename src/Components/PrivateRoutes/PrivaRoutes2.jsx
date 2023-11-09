import React from 'react';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';;
   
const PrivateRoutes2 = ({children}) => {
    const {user,loading} = GetLoginInfo();
  const {pathname,state}= useLocation();

if(user && state){
    return <Navigate to={state} replace></Navigate>
}
if(!user){
    return children;
    
}
else{
    
    return <Navigate to='/' state={pathname} replace></Navigate>
}

}
    


export default PrivateRoutes2;
