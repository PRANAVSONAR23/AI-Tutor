import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDeviceType } from './utils/deviceDetection';
import HomeDesktop from './desktop/pages/Home.jsx'
import HomeMobile  from './mobile/pages/Home.jsx'

import LoginDesktop from './desktop/pages/Login';
import LoginMobile from './mobile/pages/Login';

import DashboardDesktop from './desktop/pages/Dashboard';
import DashboardMobile from './mobile/pages/Dashboard';

import SignupDesktop from './desktop/pages/SignUp';
import SignupMobile from './mobile/pages/SignUp';

import ForgotPassword from './desktop/pages/ForgotPassword';
import PasswordReset from './desktop/pages/PasswordReset';
import CreatenewPassword from './desktop/pages/CreatenewPassword';
import OtpLogin from './mobile/pages/OtpLogin';

const App = () => {

  const isMobile =useDeviceType();

  const router =createBrowserRouter([
    {
     path:"/",
     element:isMobile?<HomeMobile/>:<HomeDesktop/>
    },
    {
      path:"/login",
      element:isMobile?<LoginMobile/>:<LoginDesktop/>
    },
    {
      path:"/dashboard",
      element:isMobile?<DashboardMobile/>:<DashboardDesktop/>
    },
    {
      path:"/signup",
      element:isMobile?<SignupMobile/>:<SignupDesktop/>  
    },
    {
      path:"/forgotpassword",
      element:isMobile?<ForgotPassword/>:<ForgotPassword/>    
    },
    {
      path:"/passwordreset",
      element:isMobile?<PasswordReset/>:<PasswordReset/>   
    },
    {
      path:"/createnewpassword",
      element:isMobile?<CreatenewPassword/>:<CreatenewPassword/>
    },
    {
      path:"/verifyotp",
      element:isMobile?<OtpLogin/>:<OtpLogin/>
    }
    
    
    
  ])
  return <RouterProvider router={router} />;
}

export default App