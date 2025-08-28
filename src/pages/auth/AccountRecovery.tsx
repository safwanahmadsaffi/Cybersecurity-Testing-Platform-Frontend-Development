import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowLeft, Loader2, Shield } from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { accountRecoverySchema, AccountRecoveryForm } from '@/lib/validation';

const securityQuestions = [
  "What was the name of your first pet?",
  "What was your mother's maiden name?",
  "What city were you born in?",
  "What was the name of your first school?",
  "What was your childhood nickname?",
];

export default function AccountRecovery() {
  const [recoveryInitiated, setRecoveryInitiated] = useState(false);
  const { recoverAccount } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({
    resolver: yupResolver(accountRecoverySchema),
  });

  const onSubmit = async (data: AccountRecoveryForm) => {
    try {
      await recoverAccount(data.email, data.securityAnswer);
      setRecoveryInitiated(true);
      toast({
        title: 'Recovery initiated',
        description: 'Please check your email for account recovery instructions.',
      });
    } catch (error: any) {
      toast({
        title: 'Recovery failed',
        description: error.message || 'An error occurred during account recovery',
        variant: 'destructive',
      });
    }
  };

  if (recoveryInitiated) {
    return (
      <AuthLayout
        title="Recovery Initiated"
        subtitle="Check your email for recovery instructions"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          
          <div className="space-y-2">
            <p className="text-muted-foreground">
              We've sent account recovery instructions to
            </p>
            <p className="font-medium text-foreground">{getValues('email')}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The recovery process may take up to 24 hours for security verification.
            </p>
            
            <Button
              onClick={() => setRecoveryInitiated(false)}
              variant="outline"
              className="w-full"
            >
              Try again
            </Button>
          </div>

          <div className="pt-4">
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Account Recovery"
      subtitle="Recover access to your account using security verification"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="securityQuestion">Security Question</Label>
          <Select onValueChange={(value) => setValue('securityQuestion', value)}>
            <SelectTrigger className={errors.securityQuestion ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select your security question" />
            </SelectTrigger>
            <SelectContent>
              {securityQuestions.map((question, index) => (
                <SelectItem key={index} value={question}>
                  {question}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.securityQuestion && (
            <p className="text-sm text-destructive">{errors.securityQuestion.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="securityAnswer">Security Answer</Label>
          <Input
            id="securityAnswer"
            type="text"
            placeholder="Enter your security answer"
            {...register('securityAnswer')}
            className={errors.securityAnswer ? 'border-destructive' : ''}
          />
          {errors.securityAnswer && (
            <p className="text-sm text-destructive">{errors.securityAnswer.message}</p>
          )}
        </div>

        <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <p className="text-sm text-warning-foreground">
            <strong>Security Notice:</strong> Account recovery requests are manually verified for security. 
            Please allow up to 24 hours for processing.
          </p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-secondary hover:opacity-90 transition-opacity"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Initiating recovery...
            </>
          ) : (
            'Initiate recovery'
          )}
        </Button>

        <div className="text-center">
          <Link
            to="/auth/login"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Remember your password? <Link to="/auth/password-reset" className="text-primary hover:text-primary/80">Try password reset</Link></p>
        </div>
      </form>
    </AuthLayout>
  );
}