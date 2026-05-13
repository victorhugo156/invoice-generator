import { FileTextIcon } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { Link, Outlet } from "react-router-dom";

export function AppHeader() {
  return (
    <div>
      <header className="h-16 w-full flex  no-print">
        <div className="w-full mx-3 lg:mx-15 px-2 bg-purple-600 flex flex-row  items-center gap-4 rounded-b-sm">
          <div className="flex flex-row items-center gap-1">
            <FileTextIcon size={18} />
            <p className="whitespace-nowrap text-sm font-bold">Invoice Generator</p>
          </div>

          <Separator orientation="vertical" className="h-16 bg-white" />

          <nav className=" w-full flex items-center space-x-4 lg:space-x-6">
            <Link to="/dashboard" className="text-xxs font-bold">Dashboard</Link>
            <Link to="/dashboard" className="text-xxs font-bold">Invoices</Link>
            <Link to="/dashboard" className="text-xxs font-bold">Dashboard</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>

  );
}
