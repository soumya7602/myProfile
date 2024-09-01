import React,{children} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home.js';
// import App from './App.js';
import About from './components/Homehover.js';
import Project from './pages/Project.js';
import App from './App.js';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: '/',
    element: <App/>,
    children:[
      // {
      //   path:'/home',
      //   element:<h1>Hello Home</h1>
      // },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Project',
        element:<Project/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

