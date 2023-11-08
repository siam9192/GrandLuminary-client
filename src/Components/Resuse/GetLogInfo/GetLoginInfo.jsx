import React, { useContext } from 'react';
import { fireBaseContext } from '../../../AuthProvider/AuthProvider';

const GetLoginInfo = () => {
   const {user,loading,logout} = useContext(fireBaseContext);

   return {user,loading,logout}
}

export default GetLoginInfo;
