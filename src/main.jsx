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
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistic from './components/Statistic/statistic';


const router = createBrowserRouter([
  {
    path: "/",
    element:   <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
         path:'/',
         element:<Home></Home>,
         loader: ()=> fetch('JobCategory.json')
      },
      {
        path:'/statistic',
        element: <Statistic></Statistic>
      },
      {
        path: '/details/:jobId',
        element: <JobDetails></JobDetails>,
         loader:()=> fetch('/FeatureJob.json')
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/FeatureJob.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
