import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Components/Router/Router.jsx'
import {RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProvider>
<RouterProvider router={Router}>
 
</RouterProvider>
</AuthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
