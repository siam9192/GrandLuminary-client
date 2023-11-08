import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { Axios } from 'axios';
import AxiosBase from '../Components/Axios/AxiosBase';
// import AxiosSecure from '../Axios/AxiosSecure';
export const fireBaseContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
   return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = ()=>{
        setUser(null);
        AxiosBase().post('/api/v1/logout')
        return signOut(auth);
    }
    useEffect(()=>{
const observer = onAuthStateChanged(auth,currentUser =>{
    if(currentUser){
        setUser(currentUser);
       
    }
    else{
        setUser(null);
        AxiosBase().post('/api/v1/logout')
    }
    setLoading(false);
        return ()=> observer();
})
    },[])
  
    return (
        <div>
           <fireBaseContext.Provider value={{user,loading,createUser,login,logout}}>
                 {children}
           </fireBaseContext.Provider>
        </div>
    );
}

export default AuthProvider;
