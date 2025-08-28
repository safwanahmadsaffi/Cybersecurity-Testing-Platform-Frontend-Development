import { Shield, Scan, FileText, Clock, AlertCircle, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export function ClientDashboard() {
  // Mock data for demonstration
  const projects = [
    { 
      id: 1, 
      name: 'E-commerce Platform', 
      status: 'in_progress', 
      progress: 75, 
      vulnerabilities: 12, 
      lastScan: '2 days ago',
      severity: 'medium'
    },
    { 
      id: 2, 
      name: 'Mobile Banking App', 
      status: 'completed', 
      progress: 100, 
      vulnerabilities: 3, 
      lastScan: '1 week ago',
      severity: 'low'
    },
    { 
      id: 3, 
      name: 'Corporate Website', 
      status: 'pending', 
      progress: 0, 
      vulnerabilities: 0, 
      lastScan: 'Not started',
      severity: null
    },
  ];

  const recentReports = [
    { id: 1, name: 'Q4 Security Assessment', date: '2024-01-15', type: 'Full Report', size: '2.4 MB' },
    { id: 2, name: 'API Vulnerability Scan', date: '2024-01-10', type: 'Technical Report', size: '1.8 MB' },
    { id: 3, name: 'Compliance Summary', date: '2024-01-05', type: 'Executive Summary', size: '856 KB' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-accent text-accent-foreground';
      case 'in_progress':
        return 'bg-primary text-primary-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string | null) => {
    switch (severity) {
      case 'high':
        return 'text-destructive';
      case 'medium':
        return 'text-warning';
      case 'low':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor your security assessments and access detailed reports
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Request New Scan
        </Button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">
              1 in progress, 2 completed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">15</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">3 high priority</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Scan className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">87%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent">+5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projects */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security Projects
            </CardTitle>
            <CardDescription>Track your ongoing security assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 rounded-lg bg-background/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{project.name}</h4>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  {project.status !== 'pending' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {project.lastScan}
                    </span>
                    {project.vulnerabilities > 0 && (
                      <span className={`font-medium ${getSeverityColor(project.severity)}`}>
                        {project.vulnerabilities} issues found
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Reports
            </CardTitle>
            <CardDescription>Download and view your security reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{report.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {report.type} • {report.date} • {report.size}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 text-xs">
                    Download
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <Button variant="outline" className="w-full">
                View All Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}