import { LoginPage } from "@/pages/auth/LoginPage";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { SignUpPage } from "@/pages/auth/SignUpPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { VerifyPage } from "@/pages/auth/VerifyPage";
import { AppHeader } from "@/components/layout/AppHeader";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/pages/auth/ProtectedRoute";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "/", element: <LoginPage /> },
            { path: "/sign-up", element: <SignUpPage /> },
            { path: "/verify", element: <VerifyPage /> },
        ]
    },

    {
        path: "/",
        element: <ProtectedRoute />,
        children: [{
            path: "/",
            element: <AppHeader />,
            children: [
                { path: "/dashboard", element: <DashboardPage /> },
            ] 
        }]
    }

])