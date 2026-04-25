import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen w-full bg-purple-600 text-gray-800">
      <Outlet />
    </div>
  );
}
