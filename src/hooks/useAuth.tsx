import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, authAPI, tokenStorage, userStorage } from '@/lib/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<{ message: string }>;
  recoverAccount: (email: string, securityAnswer: string) => Promise<{ message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for existing session on app load
    const token = tokenStorage.get();
    const user = userStorage.get();
    
    if (token && user) {
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const { user, token } = await authAPI.login(email, password);
      
      tokenStorage.set(token);
      userStorage.set(user);
      
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signup = async (userData: any) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const { user, token } = await authAPI.signup(userData);
      
      tokenStorage.set(token);
      userStorage.set(user);
      
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = () => {
    tokenStorage.remove();
    userStorage.remove();
    
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const resetPassword = async (email: string) => {
    return authAPI.resetPassword(email);
  };

  const recoverAccount = async (email: string, securityAnswer: string) => {
    return authAPI.recoverAccount(email, securityAnswer);
  };

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    resetPassword,
    recoverAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}