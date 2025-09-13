import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  Eye,
  MoreHorizontal
} from "lucide-react";

// Mock data for security testing tasks
const mockTasks = [
  {
    id: "1",
    title: "Network Penetration Test",
    client: "TechCorp Inc.",
    status: "pending" as const,
    priority: "high" as const,
    progress: 0,
    assignee: "Alex Smith",
    dueDate: "2024-01-15",
    type: "Network Security"
  },
  {
    id: "2", 
    title: "Web Application Security Audit",
    client: "StartupXYZ",
    status: "active" as const,
    priority: "medium" as const,
    progress: 65,
    assignee: "Sarah Johnson",
    dueDate: "2024-01-20",
    type: "Web Security"
  },
  {
    id: "3",
    title: "Social Engineering Assessment", 
    client: "BigBank Corp",
    status: "completed" as const,
    priority: "high" as const,
    progress: 100,
    assignee: "Mike Davis",
    dueDate: "2024-01-10",
    type: "Social Engineering"
  },
  {
    id: "4",
    title: "Infrastructure Security Review",
    client: "Healthcare Solutions",
    status: "active" as const,
    priority: "low" as const,
    progress: 30,
    assignee: "Emma Wilson",
    dueDate: "2024-01-25",
    type: "Infrastructure"
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending": return <Clock className="h-4 w-4" />;
    case "active": return <AlertTriangle className="h-4 w-4" />;
    case "completed": return <CheckCircle className="h-4 w-4" />;
    default: return <Shield className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "bg-warning text-warning-foreground";
    case "active": return "bg-accent text-accent-foreground"; 
    case "completed": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-destructive text-destructive-foreground";
    case "medium": return "bg-warning text-warning-foreground";
    case "low": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export function TaskCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockTasks.map((task) => (
        <Card key={task.id} className="hover:shadow-lg transition-shadow bg-card border-border">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-lg font-semibold text-card-foreground">
                {task.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {task.client}
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className={getStatusColor(task.status)}>
                {getStatusIcon(task.status)}
                <span className="ml-1 capitalize">{task.status}</span>
              </Badge>
              <Badge variant="outline" className={getPriorityColor(task.priority)}>
                {task.priority.toUpperCase()}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-card-foreground font-medium">{task.progress}%</span>
              </div>
              <Progress value={task.progress} className="h-2" />
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="text-card-foreground">{task.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Assignee:</span>
                <span className="text-card-foreground">{task.assignee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Due:</span>
                <span className="text-card-foreground">{task.dueDate}</span>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground">
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}