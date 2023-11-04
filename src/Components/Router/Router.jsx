import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Form/SignUp/SignUp';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    }
])


export default Router;
