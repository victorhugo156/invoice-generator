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
import { Link, useNavigate } from "react-router-dom";


const signupFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});


type SignUpFormSchema = z.infer<typeof signupFormSchema>;

export function SignUpPage() {

  const navigate = useNavigate()

  const {register, handleSubmit, formState: {isSubmitting}} = useForm<SignUpFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });

  async function handleSignUp(data: SignUpFormSchema) {
    console.log(data);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('You have success signed up',{
        action: {
          label: 'Login',
          onClick: () => navigate("/"),
        },
      });
    } catch (error) {
      toast.error('SignUp failed');
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
            Sign up to start automating your financial workflow with architectural
            precision.
          </p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("SignUp Failed");
            }}
          />
          <div className="flex w-full flex-row items-center justify-center gap-2 mt-8 mb-8">
            <Separator className="flex-1 h-[1px] bg-gray-200" />
            <p className="shrink-0 px-2 text-xxs font-medium uppercase tracking-wide text-gray-400">
              or secure signup
            </p>
            <Separator className="flex-1 h-[1px] bg-gray-200" />
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="w-full space-y-3">
            <div className="flex flex-col gap-1 ">
              <Label htmlFor="firstName" className="text-xxs font-bold text-gray-800 uppercase">First Name</Label>
              <Input {...register("firstName")} id="firstName" type="text" autoComplete="firstName" placeholder="John" className="h-8 text-xxs placeholder:text-gray-300" />
            </div>
            <div className="flex flex-col gap-1 ">
              <Label htmlFor="lastName" className="text-xxs font-bold text-gray-800 uppercase">Last Name</Label>
              <Input {...register("lastName")} id="lastName" type="text" autoComplete="lastName" placeholder="Doe" className="h-8 text-xxs placeholder:text-gray-300" />
            </div>
            <div className="flex flex-col gap-1 ">
              <Label htmlFor="email" className="text-xxs font-bold text-gray-800 uppercase">Work Email</Label>
              <Input {...register("email")} id="email" type="email" autoComplete="email" placeholder="name@company.com" className="h-8 text-xxs placeholder:text-gray-300" />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full h-10 text-sm font-bold text-white uppercase bg-purple-700 rounded-lg">SignUp</Button>
          </form>

          <div className="flex flex-row items-center justify-center gap-1 mt-8">
            <p className="text-xxs text-gray-400">Already have an account?</p>
            <Link to="/" className="text-xxs font-bold text-purple-700">Click here to Login</Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <p className="text-xxs text-gray-400">© 2026 VTR Technologies • All Rights Reserved</p>
      </div>
    </div>
  );
}

