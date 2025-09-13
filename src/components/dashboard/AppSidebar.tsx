import { 
  Shield, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// Navigation items for different roles
const dashboardItems = [
  { title: "Overview", url: "/", icon: BarChart3 },
  { title: "Active Tests", url: "/tests", icon: Activity },
  { title: "Reports", url: "/reports", icon: FileText },
];

const adminItems = [
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "System Config", url: "/admin/config", icon: Settings },
];

const testingItems = [
  { title: "Pending Tests", url: "/testing/pending", icon: Clock },
  { title: "In Progress", url: "/testing/active", icon: AlertTriangle },
  { title: "Completed", url: "/testing/completed", icon: CheckCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground" 
        : "hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <Sidebar 
      className={isCollapsed ? "w-14" : "w-64"} 
      collapsible="icon"
    >
      <SidebarContent className="bg-card">
        {/* Main Dashboard */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            {!isCollapsed && "Dashboard"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Testing Management */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            {!isCollapsed && "Testing"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {testingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Panel */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {!isCollapsed && "Administration"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}