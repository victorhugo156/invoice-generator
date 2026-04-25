import { Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/auth/LoginPage";

import { AuthLayout } from "@/components/layout/AuthLayout";
export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="/" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}