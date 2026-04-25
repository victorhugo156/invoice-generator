import { Routes } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'sonner';


export function App() {

  return (
    <GoogleOAuthProvider clientId="463298847795-o4oiupfrs8atjrumh7ki2d41rj230ksk.apps.googleusercontent.com">
      <Routes/>
      <Toaster richColors />
    </GoogleOAuthProvider>

  );
}