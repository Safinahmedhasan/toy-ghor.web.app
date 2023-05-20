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
import AddAToy from './component/AddAToy/AddAToy';
import AllToy from './component/ALlToy/AllToy';
import SingleToy from './component/SingleToy/SingleToy';
import Blogs from './component/Blogs/Blogs';
import Privet from './component/Route/Privet';
import SingleTabDetails from './component/SingleTabDetails/SingleTabDetails';
import MyToy from './component/MyToy/MyToy';
import MyToyDetails from './component/MyToyDetails/MyToyDetails';


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
      {
        path: '/addtoy',
        element: <AddAToy></AddAToy>
      },
      {
        path: '/alltoy',
        element: <AllToy></AllToy>,
        loader: () => fetch('http://localhost:5000/toy')
      },
      {
        path: '/singletoy/:id',
        element: <Privet><SingleToy></SingleToy></Privet>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/myToy',
        element: <MyToy></MyToy>
      },
      {
        path: '/myToyDetails',
        element: <MyToyDetails></MyToyDetails>
      },
      {
        path: '/tabDetails/:id',
        element: <Privet><SingleTabDetails></SingleTabDetails></Privet>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`) 
      }
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
