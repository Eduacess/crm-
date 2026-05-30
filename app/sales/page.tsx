import Sidebar from "@/components/sales/sidebar";
import Header from "@/components/sales/header";
import KPICards from "@/components/sales/KPICards";
import CalendarView from "@/components/sales/CalendarView";
import UrgentActions from "@/components/sales/UrgentActions";
import LeadSummary from "@/components/sales/LeadSummary";

export default function SalesDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header />

        <div className="mt-6">
          <KPICards />
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-8">
            <CalendarView />
          </div>

          <div className="col-span-4">
            <UrgentActions />
          </div>
        </div>

        <div className="mt-6">
          <LeadSummary />
        </div>
      </main>
    </div>
  );
}
