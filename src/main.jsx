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
        element: <DonationCampaigns></DonationCampaigns>
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
  </StrictMode>,
)
