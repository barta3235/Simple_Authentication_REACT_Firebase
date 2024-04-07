import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import './index.css'
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <PrivateRoute>
          <About></About>
          </PrivateRoute>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
