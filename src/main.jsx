import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import AuthProvider from './component/provider/AuthProvider';
import ShopByDetails from './component/ShopByDetails/ShopByDetails';
import NotFound from './component/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/cardetails/:_Id',
        element: <ShopByDetails></ShopByDetails>,
        loader: ({ params }) => fetch(`carTab.json/${params._Id}`)
      },
    ],
  },
  {
    path:'/*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
