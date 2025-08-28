import { Users, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function AdminDashboard() {
  // Mock data for demonstration
  const stats = {
    totalUsers: 1247,
    activeScans: 23,
    vulnerabilities: 89,
    resolved: 156,
  };

  const recentActivity = [
    { id: 1, action: 'New user registration', user: 'john.doe@company.com', time: '2 minutes ago', type: 'info' },
    { id: 2, action: 'Security scan completed', project: 'E-commerce Platform', time: '15 minutes ago', type: 'success' },
    { id: 3, action: 'Critical vulnerability found', severity: 'High', time: '1 hour ago', type: 'error' },
    { id: 4, action: 'User permissions updated', user: 'sarah.hacker@security.com', time: '2 hours ago', type: 'info' },
  ];

  const pendingApprovals = [
    { id: 1, type: 'User Registration', user: 'new.user@startup.com', role: 'Client' },
    { id: 2, type: 'Scan Request', project: 'Banking API', priority: 'High' },
    { id: 3, type: 'Permission Change', user: 'ethical.hacker@firm.com', change: 'Admin Access' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage users, monitor security operations, and oversee system activities
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          System Settings
        </Button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Scans</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.activeScans}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent">+3</span> since yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Vulnerabilities</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.vulnerabilities}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">-7</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
            <CheckCircle className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.resolved}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent">+23</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest system events and user activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'error' ? 'bg-destructive' :
                    activity.type === 'success' ? 'bg-accent' : 'bg-primary'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user || activity.project || activity.severity} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-warning" />
              Pending Approvals
            </CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{approval.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {approval.user || approval.project} 
                      {approval.role && ` • ${approval.role}`}
                      {approval.priority && (
                        <Badge variant="destructive" className="ml-2 text-xs">
                          {approval.priority}
                        </Badge>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      Deny
                    </Button>
                    <Button size="sm" className="h-7 text-xs bg-gradient-primary">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}