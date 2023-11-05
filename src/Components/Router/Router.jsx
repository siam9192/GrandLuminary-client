import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Form/SignUp/SignUp';
import Login from '../Pages/Form/Login/Login';
import Routes from '../Routes/Routes';
import Rooms from '../Pages/Rooms/Rooms';
import RoomDetails from '../Pages/Rooms/RoomDetails';
import Checkout from '../Pages/Form/Checkout/Checkout';

const Router = createBrowserRouter([
    {
    
        path:'/',
        element: <Home></Home>
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
          {
            path:'/rooms/checkout/:roomId',
            element:<Checkout></Checkout>
          }
        ]
    }
    ,
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])


export default Router;
