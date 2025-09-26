import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, AlertTriangle, CheckCircle, Shield, User, Calendar } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  status: "pending" | "active" | "completed" | "critical";
  priority: "low" | "medium" | "high" | "critical";
  assignee?: string;
  dueDate?: string;
  progress?: number;
  vulnerabilities?: number;
  onViewDetails?: () => void;
  onAcceptTask?: () => void;
}

export const TaskCard = ({
  title,
  description,
  status,
  priority,
  assignee,
  dueDate,
  progress = 0,
  vulnerabilities = 0,
  onViewDetails,
  onAcceptTask
}: TaskCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "warning";
      case "active": return "secondary";
      case "completed": return "success";
      case "critical": return "destructive";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      case "critical": return "text-destructive animate-pulse";
      default: return "text-muted-foreground";
    }
  };

  const StatusIcon = () => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4" />;
      case "active": return <Shield className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "critical": return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-cyber transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground">{title}</CardTitle>
          <Badge variant={getStatusColor(status) as any} className="flex items-center gap-1">
            <StatusIcon />
            {status.toUpperCase()}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className={`font-medium ${getPriorityColor(priority)}`}>
            Priority: {priority.toUpperCase()}
          </span>
          {vulnerabilities > 0 && (
            <span className="text-warning flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              {vulnerabilities} issues
            </span>
          )}
        </div>

        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Progress</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {assignee && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {assignee}
            </div>
          )}
          {dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {dueDate}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {onViewDetails && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onViewDetails}
              className="flex-1 border-primary/20 hover:bg-primary/10"
            >
              View Details
            </Button>
          )}
          {onAcceptTask && status === "pending" && (
            <Button 
              size="sm" 
              onClick={onAcceptTask}
              className="flex-1 bg-gradient-cyber hover:shadow-intense"
            >
              Accept Task
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};