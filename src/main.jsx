import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomeLayout from './layouts/HomeLayout';
import DonationCampaigns from './layouts/DonationCampaigns';
import HowToHelp from './layouts/HowToHelp';
import DashboardLayout from './layouts/DashboardLayout';
import DonationDetails from './components/DonationDetails';
 import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path:"/donation-campaigns",
        element: <DonationCampaigns></DonationCampaigns>,
        loader: () => fetch('donationData.json')
      },
      {
        path:'/donation-details/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('donationData.json')
      },
      {
        path:"/how-to-help",
        element: <HowToHelp></HowToHelp>
      },
      {
        path:"/dashboard",
        element: <DashboardLayout></DashboardLayout>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
