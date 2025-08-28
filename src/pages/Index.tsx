import { Link, useNavigate } from 'react-router-dom';
import { Shield, Lock, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and advanced threat detection to protect your digital assets.',
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments by certified ethical hackers.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless workflow management for security teams and stakeholders.',
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Meet industry standards with automated compliance reporting.',
    },
  ];

  const userTypes = [
    {
      type: 'Client',
      description: 'Monitor security assessments and access detailed reports',
      features: ['Project tracking', 'Vulnerability reports', 'Compliance dashboards'],
      color: 'border-warning/50 bg-warning/5',
    },
    {
      type: 'Administrator',
      description: 'Manage users and oversee all security operations',
      features: ['User management', 'System monitoring', 'Policy configuration'],
      color: 'border-primary/50 bg-primary/5',
    },
    {
      type: 'Ethical Hacker',
      description: 'Conduct penetration tests and security assessments',
      features: ['Testing assignments', 'Vulnerability discovery', 'Detailed reporting'],
      color: 'border-accent/50 bg-accent/5',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(200_98%_52%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(120_100%_50%/0.1),transparent_50%)]" />
      
      <div className="relative">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">SecureVault</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="/auth/login">
                  <Button variant="ghost" className="text-foreground hover:text-primary">
                    Sign in
                  </Button>
                </Link>
                <Link to="/auth/signup">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Enterprise-Grade
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Cybersecurity Platform
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect your digital assets with advanced threat detection, penetration testing, 
              and comprehensive security management. Trusted by industry leaders worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/auth/signup">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-card/50">
                Request Demo
              </Button>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* User Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built for Every Security Role
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're a client monitoring security, an admin managing operations, 
                or an ethical hacker conducting assessments, SecureVault has the tools you need.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {userTypes.map((userType, index) => (
                <Card key={index} className={`${userType.color} backdrop-blur-sm border transition-all hover:scale-105`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{userType.type}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {userType.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {userType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-glow border-border/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Secure Your Digital Future?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Join thousands of organizations already protecting their assets with SecureVault.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/auth/signup">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                      Get Started Now
                    </Button>
                  </Link>
                  <Link to="/auth/login">
                    <Button size="lg" variant="outline" className="border-border hover:bg-card/50">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground">SecureVault</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                © 2024 SecureVault. Enterprise-grade cybersecurity platform.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
