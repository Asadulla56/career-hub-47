import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componetens/Root/Root';
import Home from './componetens/Home/Home';
import AppliedJobs from './componetens/AppliedJobs/AppliedJobs';
import ErrorPage from './componetens/ErrorPage/ErrorPage';
import JobDitailes from './componetens/JobDitailes/JobDitailes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/job/:id',
        element:<JobDitailes></JobDitailes>,
        loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
