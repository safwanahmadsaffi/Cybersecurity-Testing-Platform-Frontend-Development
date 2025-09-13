import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { TaskCards } from "@/components/dashboard/TaskCards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Security Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your cybersecurity testing operations and track progress across all projects.
          </p>
        </div>

        {/* Stats Overview */}
        <StatsCards />

        {/* Task Management Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Active Security Tests</h2>
          <TaskCards />
        </div>

        {/* Analytics Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Analytics & Reports</h2>
          <DashboardCharts />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
