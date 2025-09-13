import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts";

// Mock data for charts
const testResultsData = [
  { month: "Jan", passed: 24, failed: 8, pending: 12 },
  { month: "Feb", passed: 30, failed: 5, pending: 8 },
  { month: "Mar", passed: 28, failed: 7, pending: 15 },
  { month: "Apr", passed: 35, failed: 3, pending: 10 },
  { month: "May", passed: 32, failed: 6, pending: 18 },
  { month: "Jun", passed: 40, failed: 4, pending: 14 },
];

const vulnerabilityData = [
  { name: "Critical", value: 12, color: "hsl(var(--destructive))" },
  { name: "High", value: 28, color: "hsl(var(--warning))" },
  { name: "Medium", value: 45, color: "hsl(var(--accent))" },
  { name: "Low", value: 32, color: "hsl(var(--success))" },
];

const progressData = [
  { week: "W1", completion: 65 },
  { week: "W2", completion: 72 },
  { week: "W3", completion: 78 },
  { week: "W4", completion: 85 },
  { week: "W5", completion: 88 },
  { week: "W6", completion: 95 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Test Results Bar Chart */}
      <Card className="col-span-full lg:col-span-2 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Monthly Test Results</CardTitle>
          <CardDescription className="text-muted-foreground">
            Security testing results over the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={testResultsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Bar dataKey="passed" stackId="a" fill="hsl(var(--success))" />
              <Bar dataKey="failed" stackId="a" fill="hsl(var(--destructive))" />
              <Bar dataKey="pending" stackId="a" fill="hsl(var(--warning))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Vulnerability Distribution Pie Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Vulnerability Distribution</CardTitle>
          <CardDescription className="text-muted-foreground">
            Current vulnerabilities by severity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={vulnerabilityData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {vulnerabilityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {vulnerabilityData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Trend Line Chart */}
      <Card className="col-span-full bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Project Completion Trend</CardTitle>
          <CardDescription className="text-muted-foreground">
            Weekly progress across all active projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="completion" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}