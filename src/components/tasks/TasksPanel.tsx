import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TaskCard } from "@/components/ui/task-card";
import { Plus, Search, Filter, Download } from "lucide-react";

interface TasksPanelProps {
  userRole: string;
}

export const TasksPanel = ({ userRole }: TasksPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock task data based on user role
  const mockTasks = {
    client: [
      {
        id: "1",
        title: "Web Application Security Audit",
        description: "Comprehensive security testing of e-commerce platform including SQL injection, XSS, and authentication bypass testing.",
        status: "active" as const,
        priority: "high" as const,
        assignee: "Alex Rodriguez",
        dueDate: "Dec 15, 2024",
        progress: 65,
        vulnerabilities: 3
      },
      {
        id: "2", 
        title: "Network Penetration Test",
        description: "Internal network security assessment covering firewall configuration, wireless security, and privilege escalation.",
        status: "completed" as const,
        priority: "medium" as const,
        assignee: "Sarah Chen",
        dueDate: "Dec 10, 2024",
        progress: 100,
        vulnerabilities: 7
      },
      {
        id: "3",
        title: "Mobile App Security Review",
        description: "Android and iOS application security testing focusing on data storage, API security, and reverse engineering.",
        status: "pending" as const,
        priority: "critical" as const,
        assignee: "",
        dueDate: "Dec 20, 2024",
        progress: 0,
        vulnerabilities: 0
      }
    ],
    admin: [
      {
        id: "1",
        title: "Quarterly Security Assessment - TechCorp",
        description: "Complete infrastructure and application security review for enterprise client.",
        status: "active" as const,
        priority: "high" as const,
        assignee: "Security Team Alpha",
        dueDate: "Jan 5, 2025",
        progress: 30,
        vulnerabilities: 2
      },
      {
        id: "2",
        title: "Cloud Security Audit - StartupXYZ", 
        description: "AWS infrastructure security assessment including IAM, S3, and EC2 configurations.",
        status: "pending" as const,
        priority: "medium" as const,
        assignee: "",
        dueDate: "Dec 22, 2024",
        progress: 0,
        vulnerabilities: 0
      }
    ],
    "ethical-hacker": [
      {
        id: "1",
        title: "Banking App Penetration Test",
        description: "Security testing of mobile banking application focusing on transaction security and authentication mechanisms.",
        status: "pending" as const,
        priority: "critical" as const,
        assignee: "",
        dueDate: "Dec 18, 2024",
        progress: 0,
        vulnerabilities: 0
      },
      {
        id: "2",
        title: "E-commerce Platform Assessment",
        description: "Web application security testing including payment processing, user data protection, and session management.",
        status: "active" as const,
        priority: "high" as const,
        assignee: "You",
        dueDate: "Dec 25, 2024",
        progress: 40,
        vulnerabilities: 1
      },
      {
        id: "3",
        title: "IoT Device Security Analysis",
        description: "Firmware analysis and network security testing of smart home devices.",
        status: "completed" as const,
        priority: "medium" as const,
        assignee: "You",
        dueDate: "Dec 8, 2024",
        progress: 100,
        vulnerabilities: 5
      }
    ]
  };

  const currentTasks = mockTasks[userRole as keyof typeof mockTasks] || [];

  const filteredTasks = currentTasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTasksByStatus = (status: string) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const handleViewDetails = (taskId: string) => {
    console.log("Viewing details for task:", taskId);
  };

  const handleAcceptTask = (taskId: string) => {
    console.log("Accepting task:", taskId);
  };

  const handleNewTask = () => {
    console.log("Creating new task");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-card border-primary/20 shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-foreground">
                {userRole === "client" && "My Security Tests"}
                {userRole === "admin" && "All Platform Tasks"}
                {userRole === "ethical-hacker" && "Available Assignments"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {userRole === "client" && "Track your ongoing and completed security assessments"}
                {userRole === "admin" && "Manage and oversee all security testing activities"}
                {userRole === "ethical-hacker" && "Browse and accept security testing tasks"}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {userRole === "client" && (
                <Button onClick={handleNewTask} className="bg-gradient-cyber hover:shadow-intense">
                  <Plus className="w-4 h-4 mr-2" />
                  Request Test
                </Button>
              )}
              <Button variant="outline" className="border-primary/20">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border focus:border-primary"
              />
            </div>
            <Button variant="outline" className="border-primary/20">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4 bg-muted/50">
              <TabsTrigger value="all">All Tasks ({filteredTasks.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({getTasksByStatus("pending").length})</TabsTrigger>
              <TabsTrigger value="active">Active ({getTasksByStatus("active").length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({getTasksByStatus("completed").length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    priority={task.priority}
                    assignee={task.assignee}
                    dueDate={task.dueDate}
                    progress={task.progress}
                    vulnerabilities={task.vulnerabilities}
                    onViewDetails={() => handleViewDetails(task.id)}
                    onAcceptTask={userRole === "ethical-hacker" ? () => handleAcceptTask(task.id) : undefined}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {getTasksByStatus("pending").map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    priority={task.priority}
                    assignee={task.assignee}
                    dueDate={task.dueDate}
                    progress={task.progress}
                    vulnerabilities={task.vulnerabilities}
                    onViewDetails={() => handleViewDetails(task.id)}
                    onAcceptTask={userRole === "ethical-hacker" ? () => handleAcceptTask(task.id) : undefined}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {getTasksByStatus("active").map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    priority={task.priority}
                    assignee={task.assignee}
                    dueDate={task.dueDate}
                    progress={task.progress}
                    vulnerabilities={task.vulnerabilities}
                    onViewDetails={() => handleViewDetails(task.id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {getTasksByStatus("completed").map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    priority={task.priority}
                    assignee={task.assignee}
                    dueDate={task.dueDate}
                    progress={task.progress}
                    vulnerabilities={task.vulnerabilities}
                    onViewDetails={() => handleViewDetails(task.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};