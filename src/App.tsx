// import { Routes } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from './routes/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';


export function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="463298847795-o4oiupfrs8atjrumh7ki2d41rj230ksk.apps.googleusercontent.com">
        <RouterProvider router={router} />
        <Toaster richColors />
      </GoogleOAuthProvider>
    </QueryClientProvider>


  );
}