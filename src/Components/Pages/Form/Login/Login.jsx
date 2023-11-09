import React from 'react';
import { useState,useContext } from 'react';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import { fireBaseContext } from '../../../../AuthProvider/AuthProvider';
import AxiosBase from '../../../Axios/AxiosBase';
import {AiFillGoogleCircle} from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../../Firebase/firebase.config';
import { Helmet } from 'react-helmet';
const Login = () => {
    const {login} = useContext(fireBaseContext);
    const [toggle,setToggle] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {state} = useLocation();
    
    const [err,setErr] = useState('');
    const handleLogin = (e)=>{
        e.preventDefault();
        setLoading(true)
        setErr('' )
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
login(email,password)
.then(res=>{
    console.log(res.user)
AxiosBase().post(`/api/v1/jwt`,{email:res.user.email})
setLoading(false)
if(state){
    navigate(state);
}
else{
    navigate('/')

}
})
.catch(error =>{
    setLoading(false)
   setErr(error.code)
})
form.reset()
    }
    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth,provider)
         .then(res=>{
            AxiosBase().post('/api/v1/jwt')
            if(state){
                navigate(state);
            }
            else{
                navigate('/');
            }
         })
    }
    return (
        <div>
            <Helmet>
                <title>Grand Luminary || LOGIN</title>
            </Helmet>
        <div className='grid md:grid-cols-2 min-h-[100vh] font-pop'>
         <div className='md:py-10 py-2 mx-2 flex flex-col justify-center '>
          <h1 className='text-4xl text-center text-black'>Login Now</h1>
          <form className='space-y-6' onSubmit={handleLogin} >
            <div className='space-y-2'>
                <h3>Your email</h3>
                <input type="text" placeholder='karim@gmail.com' name='email' className='w-full py-3 bg-gray-200 border-2 outline-none rounded px-2' required/>
            </div>
            <div className='space-y-2'>
                <h3>Password</h3>
                <input type="text" name='password' className='w-full py-3 bg-gray-200 border-2 outline-none rounded px-2' required/>
            </div>
            {
            err && <p className='text-red-600'>{err}</p>
         }
            <button type='submit' className='w-full py-2 text-white bg-blue-600'>Login</button>
            <h1 className='text-black'>Don't have an account?<Link to='/signup' className = "text-blue-600 font-semibold"> Sign up</Link></h1>
         
          </form>
          <div className='md:flex justify-center items-center py-6' onClick={googleLogin}>
           <button className='md:w-1/2 bg-base-100 py-3 border-2  text-4xl rounded-full  px-4 flex justify-between hover:bg-gray-200 items-center '><AiFillGoogleCircle></AiFillGoogleCircle><h2 className='text-xl text-black'>Login with google</h2></button>
           </div>
         </div>
         
         <div className='banner_sign h-full flex justify-center items-center lg:block hidden'>
               <img src="images/Form/login.jpg" alt="" className='w-full h-full' />
         </div>
        </div>
    </div>
    );
}

export default Login;
