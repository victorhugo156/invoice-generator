export function ReportsPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      <p className="mt-2 text-sm text-gray-600">
        This can become your reports area later, with invoice history, totals, or charts.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <ReportCard title="Invoices this month" value="0" />
        <ReportCard title="Hours tracked" value="0h" />
        <ReportCard title="Total amount" value="$0.00" />
      </div>
    </section>
  );
}

interface ReportCardProps {
  title: string;
  value: string;
}

function ReportCard({ title, value }: ReportCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
