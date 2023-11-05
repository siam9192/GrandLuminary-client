import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Routes = () => {
    return (
        <>
        <div >
          <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Routes;
