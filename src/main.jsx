import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './components/Route/Route';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Order from './components/Order/Order';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} /> 
        </AuthProvider>
  </React.StrictMode>,
)
