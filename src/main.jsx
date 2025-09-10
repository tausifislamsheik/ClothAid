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
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Route/PrivateRoute';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path:"/donation-campaigns",
        element: <DonationCampaigns></DonationCampaigns>,
        loader: async () => {
        const res = await fetch('/donationData.json');
        if (!res.ok) throw new Error('Failed to load donation data');
        return res.json();
        }
      },
      {
        path:'/donation-details/:id',
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader: async () => {
        const res = await fetch('/donationData.json');
        if (!res.ok) throw new Error('Failed to load donation data');
        return res.json();
        }
      },
      {
        path:"/how-to-help",
        element: <HowToHelp></HowToHelp>
      },
      {
        path:"/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
