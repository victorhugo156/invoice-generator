import { InvoiceGeneratorPage } from "./InvoiceGeneratorPage";


export function DashboardPage() {

  return(
    <div className="min-h-screen bg-purple-600">
      <main className="mx-auto max-w-6xl px-4 py-8">
        <InvoiceGeneratorPage/>
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
  )
}
