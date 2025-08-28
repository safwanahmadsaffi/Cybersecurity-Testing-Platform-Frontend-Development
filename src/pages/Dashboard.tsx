import { useAuth } from '@/hooks/useAuth';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { ClientDashboard } from '@/components/dashboard/ClientDashboard';
import { EthicalHackerDashboard } from '@/components/dashboard/EthicalHackerDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'client':
        return <ClientDashboard />;
      case 'ethical_hacker':
        return <EthicalHackerDashboard />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Unknown Role
            </h2>
            <p className="text-muted-foreground">
              Unable to determine your role. Please contact support.
            </p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
}