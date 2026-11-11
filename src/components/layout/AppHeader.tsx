import { Link, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AppHeader() {
  const { logout } = useAuth();
  return (
    <div>
      <header className="h-16 w-full flex  no-print">
        <div className="w-full mx-3 lg:mx-15 px-2 bg-accent flex flex-row  items-center gap-4 rounded-b-sm">
          <div className="flex flex-row items-center gap-1">
            <div className="w-7.5 h-7.5 bg-aged-mustard p-3">
              <p className="uppercase font-bold text-lg">t</p>
            </div>

            <div className="flex flex-col">
              <p className="whitespace-nowrap text-lg uppercase font-bold text-concrete">TIMEKEEPER</p>
              <p className="whitespace-nowrap text-sm uppercase font-bold text-aged-mustard">VTR TECHNOLOGIES</p>
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
