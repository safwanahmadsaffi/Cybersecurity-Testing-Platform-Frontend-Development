import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, EyeOff, Lock, User } from "lucide-react";
import cyberLogo from "@/assets/cyber-logo.png";

interface LoginFormProps {
  onLogin: (role: string, email: string) => void;
  onSwitchToSignup: () => void;
}

export const LoginForm = ({ onLogin, onSwitchToSignup }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<string>("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role, email);
  };

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card border-primary/20 shadow-cyber">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full shadow-cyber">
              <img src={cyberLogo} alt="Cyber Security" className="w-12 h-12" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            SecureTest Platform
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Access your cybersecurity testing dashboard
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground">Role</Label>
              <select 
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="client">Client</option>
                <option value="admin">Admin</option>
                <option value="ethical-hacker">Ethical Hacker</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-input border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-input border-border focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-cyber text-primary-foreground hover:shadow-intense transition-all duration-300"
            >
              <Shield className="w-4 h-4 mr-2" />
              Secure Login
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={onSwitchToSignup}
              className="text-primary hover:text-primary/80 text-sm transition-colors"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};