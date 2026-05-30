export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-white border-r border-slate-200 p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-green-600">
          Aahar Sakhi
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Sales CRM
        </p>
      </div>

      <nav className="space-y-3">
        <button className="w-full text-left p-3 rounded-xl bg-green-50 text-green-700 font-medium">
          Today's Plan
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-100">
          All Leads
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-100">
          Payroll Details
        </button>

        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-100">
          Analysis
        </button>
      </nav>

      <div className="absolute bottom-5">
        <button className="text-red-500">
          Logout
        </button>
      </div>
    </aside>
  );
}
