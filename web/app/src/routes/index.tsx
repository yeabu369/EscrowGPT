import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout";
import AuthLayout from "./(auth)/Layout";
import LoginPage from "./(auth)/login/page";
import RegisterPage from "./(auth)/register/page";

export const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
      },
      {
        path: '/auth',
        children: [
          {
            path: '/auth/login',
            element: <AuthLayout><LoginPage /></AuthLayout>
          },
          {
            path: '/auth/signup',
            element: <AuthLayout><RegisterPage /></AuthLayout>
          },
          {
            path: '/auth/forgot-password',
            element: <div>Forgot Password</div>
          }
        ],
      },
      {
        path: '/dashboard',
        
        children: [
          {
            path: '/dashboard/admin',
            element: <div>Dashboard</div>
          }
        ]
      },
    ]
  );