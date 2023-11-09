
import { NavLink } from 'react-router-dom';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
import {AiOutlineMenu,AiOutlineBook} from 'react-icons/ai';
import {MdOutlineBedroomChild} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {AiOutlineHome,AiOutlineLogin} from 'react-icons/ai';
import {BiLogOutCircle} from 'react-icons/bi'
import {IoMdCreate} from 'react-icons/io'
import {RxCross1} from 'react-icons/rx'
import { useState } from 'react';
const Navbar = () => {
    const {user,logout} = GetLoginInfo();
    const [toggle,setToggle] = useState(false)
   
    return (
      <div className='flex items-center justify-between max-w-7xl mx-auto   w-full py-6'>
            <div className='flex items-center gap-2'>
                <div>
                <img src="/images/Logo/Logo.png" alt="" className='w-20' />
                </div>
                <h1 className='text-black font-bold text-3xl'>Grand Luminary</h1>
            </div>
            <nav>
               <ul className='lg:flex items-center gap-2 text-black text-xl lg:block hidden  '>
 <NavLink to='/'className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } >HOME</NavLink>
 <NavLink to='/rooms'className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } >ROOMS</NavLink>
 <NavLink to='/mybooking'className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } >MY BOOKING</NavLink>
 <NavLink to='/add-post'>POST</NavLink>
 <NavLink to='/about'className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } >ABOUT US</NavLink>
 {
    !user ? <>
    <NavLink to='/signup'className='px-7 py-2 bg-black text-white'>SIGN UP</NavLink>
    <NavLink to='/login'className='px-7 py-2 bg-black text-white'>LOGIN</NavLink>
    </>
    :
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost border-2 border-white btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className={`menu menu-sm dropdown-content bg-black mt-3 z-[1] p-2 shadow rounded-box md:w-72 border-2  text-white`}>
        <li className=''>
        
          <a className="justify-between text-xl">
            {user.displayName}
           
          </a>
        </li>
        <li className='text-red-500'  onClick={()=>{
                 
          logout()

        }}><a>Logout</a></li>
      </ul>
      
    </div>
    }
 
 
               </ul>
               <div className='lg:hidden block text-black text-2xl mx-2' onClick={()=> setToggle(!toggle)}>
      {
        toggle? <RxCross1></RxCross1> :<AiOutlineMenu></AiOutlineMenu>
      }
      </div>
            </nav>
          <ul className={`lg:hidden flex flex-col ${toggle ? "left-0" : "-left-[100%]"} duration-200 md:duration-0 text-black font-semibold space-y-7 shadow-xl z-[10] bg-white bg-white top-0 px-20 py-5 h-full fixed`}>
          <NavLink className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } to = '/'><div className='flex items-center gap-1'><AiOutlineHome></AiOutlineHome><h3>HOME</h3></div></NavLink>
          <NavLink className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } to='/rooms'><div className='flex items-center gap-1'><MdOutlineBedroomChild></MdOutlineBedroomChild><h3>ROOMS</h3></div></NavLink>
          <NavLink className={({ isActive, isPending }) =>
    isActive
    ? "text-pink-600"
    : isPending
    ? "pending"
    : ""
  } to='/mybooking'><div className='flex items-center gap-1'><AiOutlineBook></AiOutlineBook><h3>MY BOOKING</h3></div></NavLink>
         {
          !user && <>
           <NavLink to='/signup'><div className='flex items-center gap-1'><IoMdCreate></IoMdCreate><h3>SIGN UP</h3></div></NavLink>
          <NavLink to='/login'><div className='flex items-center gap-1'><AiOutlineLogin></AiOutlineLogin><h3>LOGIN</h3></div></NavLink>
          </>
         }   
         {
          user && <>
            <NavLink  onClick={logout}><div className='flex items-center gap-1'><BiLogOutCircle></BiLogOutCircle><h3>LOGOUT</h3></div></NavLink>
          </>
         }
  
          <NavLink to= '/about'><div className='flex items-center gap-1' ><FcAbout></FcAbout><h3>ABOUT US</h3></div></NavLink>
          {
            user && <div>
            
              <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full border-2 border-red-500'/>
            </div>
          }
          </ul>
         
        </div>
    );
}

export default Navbar;
