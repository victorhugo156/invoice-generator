import { Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/auth/LoginPage";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { SignUpPage } from "@/pages/auth/SignUpPage";
export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
        </Routes>
    )
}