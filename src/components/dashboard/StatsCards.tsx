import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Active Tests",
    value: "23",
    description: "Currently running",
    icon: Shield,
    trend: "+12%",
    trendUp: true
  },
  {
    title: "Total Clients", 
    value: "47",
    description: "Registered clients",
    icon: Users,
    trend: "+5%",
    trendUp: true
  },
  {
    title: "Critical Issues",
    value: "8",
    description: "Require immediate attention", 
    icon: AlertTriangle,
    trend: "-3%",
    trendUp: false
  },
  {
    title: "Completed Tests",
    value: "156",
    description: "This month",
    icon: CheckCircle,
    trend: "+18%",
    trendUp: true
  },
  {
    title: "Pending Reviews",
    value: "12",
    description: "Awaiting approval",
    icon: Clock,
    trend: "+2%",
    trendUp: true
  },
  {
    title: "Success Rate",
    value: "94.2%",
    description: "Tests completed successfully",
    icon: TrendingUp,
    trend: "+1.2%", 
    trendUp: true
  }
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
            <div className="flex items-center mt-2">
              <span 
                className={`text-xs font-medium ${
                  stat.trendUp ? "text-success" : "text-destructive"
                }`}
              >
                {stat.trend}
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}