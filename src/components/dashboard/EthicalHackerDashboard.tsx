import { Target, Zap, Bug, Trophy, Calendar, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function EthicalHackerDashboard() {
  // Mock data for demonstration
  const assignments = [
    { 
      id: 1, 
      target: 'Banking API v2.1', 
      client: 'SecureBank Corp', 
      priority: 'high', 
      deadline: '2024-01-25',
      status: 'active',
      scope: 'Full Stack'
    },
    { 
      id: 2, 
      target: 'E-commerce Platform', 
      client: 'ShopTech Inc', 
      priority: 'medium', 
      deadline: '2024-02-05',
      status: 'pending',
      scope: 'Web Application'
    },
    { 
      id: 3, 
      target: 'Mobile Banking App', 
      client: 'FinanceFirst Ltd', 
      priority: 'high', 
      deadline: '2024-01-30',
      status: 'completed',
      scope: 'Mobile App'
    },
  ];

  const vulnerabilities = [
    { id: 1, type: 'SQL Injection', severity: 'Critical', target: 'Banking API', status: 'open' },
    { id: 2, type: 'XSS', severity: 'High', target: 'E-commerce Platform', status: 'verified' },
    { id: 3, type: 'CSRF', severity: 'Medium', target: 'Mobile App', status: 'fixed' },
    { id: 4, type: 'Authentication Bypass', severity: 'Critical', target: 'Banking API', status: 'open' },
  ];

  const tools = [
    { name: 'Burp Suite Professional', status: 'active', version: '2024.1' },
    { name: 'OWASP ZAP', status: 'active', version: '2.14.0' },
    { name: 'Nmap Network Scanner', status: 'idle', version: '7.94' },
    { name: 'Metasploit Framework', status: 'idle', version: '6.3.55' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'text-destructive';
      case 'High':
        return 'text-warning';
      case 'Medium':
        return 'text-primary';
      case 'Low':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-primary text-primary-foreground';
      case 'completed':
        return 'bg-accent text-accent-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ethical Hacker Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage penetration testing assignments and security assessments
          </p>
        </div>
        <Button className="bg-gradient-secondary hover:opacity-90">
          <Zap className="h-4 w-4 mr-2" />
          Start New Scan
        </Button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Assignments</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground">
              1 high priority
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vulnerabilities Found</CardTitle>
            <Bug className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">12 critical</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Trophy className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent">+2%</span> this quarter
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">32</div>
            <p className="text-xs text-muted-foreground">
              8 hours remaining
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Assignments */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Current Assignments
            </CardTitle>
            <CardDescription>Your active penetration testing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 rounded-lg bg-background/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{assignment.target}</h4>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(assignment.priority)}>
                        {assignment.priority}
                      </Badge>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Client:</strong> {assignment.client}</p>
                    <p><strong>Scope:</strong> {assignment.scope}</p>
                    <p><strong>Deadline:</strong> {assignment.deadline}</p>
                  </div>
                  
                  {assignment.status === 'active' && (
                    <Button size="sm" className="w-full bg-gradient-primary">
                      <Play className="h-3 w-3 mr-2" />
                      Continue Testing
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Vulnerabilities */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-warning" />
              Recent Findings
            </CardTitle>
            <CardDescription>Latest vulnerabilities discovered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vulnerabilities.map((vuln) => (
                <div key={vuln.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{vuln.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {vuln.target} • 
                      <span className={`ml-1 font-medium ${getSeverityColor(vuln.severity)}`}>
                        {vuln.severity}
                      </span>
                    </p>
                  </div>
                  <Badge variant={vuln.status === 'fixed' ? 'default' : 'secondary'}>
                    {vuln.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <Button variant="outline" className="w-full">
                View All Findings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Tools */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            Security Testing Tools
          </CardTitle>
          <CardDescription>Available tools and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="p-3 rounded-lg bg-background/50 text-center">
                <h4 className="font-medium text-foreground text-sm mb-2">{tool.name}</h4>
                <Badge className={tool.status === 'active' ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}>
                  {tool.status}
                </Badge>
                <p className="text-xs text-muted-foreground mt-2">v{tool.version}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}