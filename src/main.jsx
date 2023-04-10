import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/Job-details/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:   <App></App>,
    children:[
      {
         path:'/',
         element:<Home></Home>,
         loader: ()=> fetch('JobCategory.json')
      },
      {
        path: '/details/:jobId',
        element: <JobDetails></JobDetails>,
         loader:()=> fetch('../public/FeatureJob.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
