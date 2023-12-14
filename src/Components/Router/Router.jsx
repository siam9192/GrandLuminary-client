import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Form/SignUp/SignUp';
import Login from '../Pages/Form/Login/Login';
import Routes from '../Routes/Routes';
import Rooms from '../Pages/Rooms/Rooms';
import RoomDetails from '../Pages/Rooms/RoomDetails';
import MyBookings from '../Pages/MyBookings/MyBookings';
import About from '../Pages/About/About';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Faq from '../Pages/Faq/Faq';
import PrivateRoutes2 from '../PrivateRoutes/PrivaRoutes2';
import Weather from '../Pages/Weather/Weather';

const Router = createBrowserRouter([
    {
    
        path:'/',
        element: <Home></Home>,
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path:'/rooms',
        element:<Routes></Routes>,
        children:[
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/rooms/details/:id',
                element:<RoomDetails></RoomDetails>
            },
        
        ]
    }
    ,
    {
     path:'/mybooking',
     element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
    },
    {
        path:"/faq",
        element:<Faq></Faq>
    },
    {
 path:'/about',
 element:<About></About>
    },
    {
        path:'/signup',
        element:<PrivateRoutes2><SignUp></SignUp></PrivateRoutes2>
    },
    
    {
        path:'/login',
        element:<PrivateRoutes2><Login></Login></PrivateRoutes2>
    },
    {
        path:'/weather',
        element:<Weather></Weather>
    },
    
])


export default Router;
