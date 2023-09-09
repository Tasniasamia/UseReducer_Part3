import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Component/Layout/MainLayout';
import Home from './Component/Layout/Home';
import { AuthProvider, ProductProvider } from './Component/AuthProvider';
import Top10 from './Component/Layout/Top10';
import ProductDetails from './Component/Layout/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
      path:"/top",
      element:<Top10/>
    },
  {
    path:"/Productdetails/:id",
    element:<ProductDetails/>
  }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>);