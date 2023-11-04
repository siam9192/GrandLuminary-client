import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Components/Router/Router.jsx'
import {RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={Router}>

</RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)
