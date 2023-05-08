import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/Trippy",
    element: <App/>,
    children:[
      {
        path: "/Trippy/Service",
        element:<Service/>,
      },
      {
        path: "/Trippy/Home",
        element:<Home/>,
      },
      {
        path: "/Trippy/Contact",
        element:<Contact/>,
      },
      {
        path: "/Trippy/Signup",
        element:<Signup/>,
      },
      {
        path: "/Trippy/About",
        element:<About/>,
      },

    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}
  /></React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
