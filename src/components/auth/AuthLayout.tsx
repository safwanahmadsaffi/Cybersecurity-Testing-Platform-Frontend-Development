import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(200_98%_52%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(120_100%_50%/0.1),transparent_50%)]" />
      
      <div className="relative w-full max-w-md">
        {/* Logo and brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 text-2xl font-bold text-foreground hover:text-primary transition-colors">
            <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            SecureVault
          </Link>
        </div>

        {/* Auth card */}
        <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8 shadow-card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Protecting your digital assets with enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}