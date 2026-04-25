import { FileTextIcon } from "@phosphor-icons/react";
import { GoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';


const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginPage() {

  const {register, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleLogin(data: LoginFormSchema) {
    console.log(data);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('We have sent you an email with a link to login',{
        action: {
          label: 'Resend email',
          onClick: () => {handleLogin(data)},
        },
      });
    } catch (error) {
      toast.error('Login failed');
    }
  }


  return (
    <div className="flex min-h-screen flex-col gap-4 items-center justify-center px-4 py-8 ">
      <div className="w-full max-w-[440px] rounded-lg border border-gray-200 bg-white px-8 py-14 shadow-md max-[440px]:px-5">
        <header className="flex w-full flex-col items-center justify-center gap-2 mb-12">
          <FileTextIcon size={32} className="text-purple-700" />
          <h1 className="text-2xl font-bold text-gray-800">Invoice Generator</h1>
        </header>
        <div className="mt-6 space-y-4 text-gray-800">
          <h2 className="text-lg font-semibold text-center tracking-tighter leading-6">
            Turn screenshots into professional invoices in seconds.
          </h2>
          <p className="text-sm text-gray-400 text-center mb-8">
            Log in to your account to start automating your financial workflow with architectural
            precision.
          </p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <div className="flex w-full flex-row items-center justify-center gap-2 mt-8 mb-8">
            <Separator className="flex-1 h-[1px] bg-gray-200" />
            <p className="shrink-0 px-2 text-xxs font-medium uppercase tracking-wide text-gray-400">
              or secure login
            </p>
            <Separator className="flex-1 h-[1px] bg-gray-200" />
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="w-full space-y-3">
            <div className="flex flex-col gap-1 ">
              <Label htmlFor="email" className="text-xxs font-bold text-gray-800 uppercase">Work Email</Label>
              <Input {...register("email")} id="email" type="email" autoComplete="email" placeholder="name@company.com" className="h-8 text-xxs placeholder:text-gray-300" />
            </div>

            <div className="flex flex-col gap-1 mb-8 ">
              <Label htmlFor="password" className="text-xxs font-bold text-gray-800 uppercase">Password</Label>
              <Input {...register("password")} type="password" autoComplete="current-password" placeholder="password" className="h-8 text-xxs placeholder:text-gray-300" />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full h-10 text-sm font-bold text-white uppercase bg-purple-700 rounded-lg">Login</Button>
          </form>

          <div className="flex flex-row items-center justify-center gap-1 mt-8">
            <p className="text-xxs text-gray-400">Don't have an account?</p>
            <a href="/signup" className="text-xxs font-bold text-purple-700">Click here to Sign up</a>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <p className="text-xxs text-gray-400">© 2026 VTR Technologies • All Rights Reserved</p>
      </div>
    </div>
  );
}

