import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
}