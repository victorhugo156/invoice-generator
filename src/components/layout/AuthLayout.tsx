import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-16 w-full flex  no-print">
        <div className="w-full lg:mx-15 p-5 bg-accent-foreground flex flex-row  items-center gap-4 rounded-b-sm">
          <div className="flex flex-row items-center gap-3">
            <div className="w-7.5 h-8.5 flex items-center justify-center bg-aged-mustard p-3">
              <p className="uppercase font-bold text-lg">t</p>
            </div>

            <div className="flex flex-col justify-center  ">
              <p className="whitespace-nowrap text-lg uppercase font-bold text-concrete leading-5.5 tracking-wider">TIMEKEEPER</p>
              <p className="whitespace-nowrap text-xs uppercase font-base text-aged-mustard leading-4">VTR TECHNOLOGIES</p>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
