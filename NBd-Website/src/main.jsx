import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Landing></Landing>
      }
      ,
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/gallery',
        element: <Gallery></Gallery>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
      }

    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
