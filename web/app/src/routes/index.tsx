import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout";
import AuthLayout from "./(auth)/Layout";
import DashboardLayout from "./(dashboard)/dashboard/Layout";
import LoginPage from "./(auth)/login/page";
import RegisterPage from "./(auth)/register/page";
import DashboardPage from "./(dashboard)/dashboard/page";
import AdminDashboardPage from "./(dashboard)/admin/page";
import AdminLayout from "./(dashboard)/admin/Layout";
import NotFoundPage from "./(404)/Layout";
import usersLoader from "../lib/loaders/users";
import { SettingsPageWithUser } from "./(dashboard)/dashboard/settings/page";
import UserContext from "@/context/user.context";

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
          index: true,
          element: <DashboardLayout><DashboardPage /></DashboardLayout>
        },
        {
          path: '/dashboard/admin',
          element: <AdminLayout><AdminDashboardPage /></AdminLayout>,
          loader: usersLoader,
        },
        {
          path: '/dashboard/settings',
          element: <DashboardLayout>
              <SettingsPageWithUser />
            </DashboardLayout>,
        }
      ]
    },
    {
      path: '*',
      element: <NotFoundPage />,
    }
  ]
);