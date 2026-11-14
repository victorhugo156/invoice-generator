import { Link, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AppHeader() {
  const { logout } = useAuth();
  return (
    <div>
      <header className="h-16 w-full flex  no-print">
        <div className="w-full lg:mx-15 px-2 bg-accent-foreground flex flex-row  items-center gap-4 rounded-b-sm">
          <div className="flex flex-row items-center gap-1">
            <div className="w-7.5 h-8.5 flex items-center justify-center bg-aged-mustard p-3">
              <p className="uppercase font-bold text-lg">t</p>
            </div>

            <div className="flex flex-col justify-center  ">
              <p className="whitespace-nowrap text-lg uppercase font-bold text-concrete leading-5.5 tracking-wider">TIMEKEEPER</p>
              <p className="whitespace-nowrap text-xs uppercase font-base text-aged-mustard leading-4">VTR TECHNOLOGIES</p>
            </div>

          </div>

          <nav className=" w-full flex items-center space-x-4 lg:space-x-6">
            <Link to="/dashboard" className="text-xxs font-bold">Dashboard</Link>
            <Link to="/dashboard" className="text-xxs font-bold">Invoices</Link>
            <Link to="/dashboard" className="text-xxs font-bold">Dashboard</Link>
            <button type="button" onClick={logout} className="text-xxs font-bold">
              Logout
            </button>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>

  );
}
