import { AppHeader } from "./components/layout/AppHeader";
import { DashboardPage } from "./pages/dashboard/DashboardPage";


export function App() {


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="no-print">
        <AppHeader />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <DashboardPage/>
      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          #printable-invoice {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
