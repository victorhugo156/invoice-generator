// import { Routes } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from './routes/routes';


export function App() {

  return (
    <GoogleOAuthProvider clientId="463298847795-o4oiupfrs8atjrumh7ki2d41rj230ksk.apps.googleusercontent.com">
      <RouterProvider router={router}/>
      <Toaster richColors />
    </GoogleOAuthProvider>

  );
}