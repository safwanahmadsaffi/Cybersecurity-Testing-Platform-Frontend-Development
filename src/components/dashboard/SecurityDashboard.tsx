import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TasksPanel } from "@/components/tasks/TasksPanel";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Activity,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Filter
} from "lucide-react";
import cyberHero from "@/assets/cyber-hero.jpg";

interface SecurityDashboardProps {
  userRole: string;
  userEmail: string;
  onLogout: () => void;
}

export const SecurityDashboard = ({ userRole, userEmail, onLogout }: SecurityDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const mockStats = {
    client: {
      activeTests: 3,
      completedTests: 12,
      vulnerabilities: 8,
      riskScore: 75
    },
    admin: {
      totalUsers: 145,
      activeTests: 23,
      pendingApprovals: 7,
      systemHealth: 98
    },
    "ethical-hacker": {
      availableTasks: 8,
      activeTasks: 2,
      completedTasks: 34,
      reputation: 92
    }
  };

  const renderRoleSpecificContent = () => {
    switch (userRole) {
      case "client": {
        const clientStats = mockStats.client;
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Active Tests</CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{clientStats.activeTests}</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Vulnerabilities Found</CardTitle>
                <AlertTriangle className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">{clientStats.vulnerabilities}</div>
                <p className="text-xs text-muted-foreground">-3 resolved this week</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Risk Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{clientStats.riskScore}%</div>
                <Progress value={clientStats.riskScore} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        );
      }

      case "admin": {
        const adminStats = mockStats.admin;
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Total Users</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{adminStats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">+12 new this month</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Active Tests</CardTitle>
                <Activity className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{adminStats.activeTests}</div>
                <p className="text-xs text-muted-foreground">Across all clients</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Pending Approvals</CardTitle>
                <Clock className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">{adminStats.pendingApprovals}</div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">System Health</CardTitle>
                <CheckCircle className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">{adminStats.systemHealth}%</div>
                <Progress value={adminStats.systemHealth} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        );
      }

      case "ethical-hacker": {
        const hackerStats = mockStats["ethical-hacker"];
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Available Tasks</CardTitle>
                <Search className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{hackerStats.availableTasks}</div>
                <p className="text-xs text-muted-foreground">New assignments</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Active Tasks</CardTitle>
                <Activity className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">{hackerStats.activeTasks}</div>
                <p className="text-xs text-muted-foreground">In progress</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Reputation</CardTitle>
                <Shield className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">{hackerStats.reputation}%</div>
                <Progress value={hackerStats.reputation} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        );
      }

      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${cyberHero})` }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {userRole === "client" && "Client Dashboard"}
              {userRole === "admin" && "Admin Control Center"}
              {userRole === "ethical-hacker" && "Ethical Hacker Hub"}
            </h1>
            <p className="text-muted-foreground">Welcome back, {userEmail}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-primary/20">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" className="border-primary/20">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="destructive" size="sm" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-card/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6">
            {["overview", "tasks", "reports", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {renderRoleSpecificContent()}
            
            {/* Recent Activity */}
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Latest updates and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Vulnerability scan completed", time: "2 hours ago", status: "success" },
                    { action: "New task assigned", time: "4 hours ago", status: "info" },
                    { action: "Report generated", time: "1 day ago", status: "success" },
                    { action: "Security alert", time: "2 days ago", status: "warning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <Badge variant={item.status === "success" ? "default" : item.status === "warning" ? "destructive" : "secondary"}>
                          {item.status}
                        </Badge>
                        <span className="text-foreground">{item.action}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "tasks" && (
          <TasksPanel userRole={userRole} />
        )}

        {activeTab === "reports" && (
          <Card className="bg-gradient-card border-primary/20 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Security Reports</CardTitle>
              <CardDescription className="text-muted-foreground">
                View and download security assessment reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Reports interface coming soon...</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card className="bg-gradient-card border-primary/20 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Settings</CardTitle>
              <CardDescription className="text-muted-foreground">
                Manage your account and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Settings interface coming soon...</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};