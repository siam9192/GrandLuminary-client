
import { NavLink } from 'react-router-dom';
import GetLoginInfo from '../Resuse/GetLogInfo/GetLoginInfo';
const Navbar = () => {
    const {user,logout} = GetLoginInfo();
   
    return (
        <div className='flex items-center justify-between max-w-7xl mx-auto font-rob py-4 border-b border-black'>
            
            <nav className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <div>
                <img src="/images/Logo/Logo.png" alt="" className='w-20' />
                </div>
                <h1 className='text-black font-bold text-3xl'>Grand Luminary</h1>
            </div>
               <ul className='flex items-center gap-2 black text-xl text-black'>
 <NavLink to= '/'>HOME</NavLink>
 <NavLink to='/rooms'>ROOMS</NavLink>
 <NavLink to='/mybooking'>MY BOOKINGS</NavLink>
 <NavLink to='/about'>ABOUT US</NavLink>
               </ul>
               <ul className='flex gap-5'>
               {
    !user ? <>
    <NavLink to='/signup' className='px-6 py-3 bg-black text-white'>SIGN UP</NavLink>
    <NavLink to='/login' className='px-6 py-3 bg-black text-white'>LOGIN</NavLink>
    </>
    :
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost border-2 border-black btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-72 border-2  text-black`}>
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
            </nav>
        </div>
    );
}

export default Navbar;
