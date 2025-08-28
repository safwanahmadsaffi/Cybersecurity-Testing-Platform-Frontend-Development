// Mock authentication service with dummy data
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'client' | 'admin' | 'ethical_hacker';
  organization: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@securetech.com',
    firstName: 'Alex',
    lastName: 'Admin',
    role: 'admin',
    organization: 'SecureTech Corp',
  },
  {
    id: '2',
    email: 'client@company.com',
    firstName: 'John',
    lastName: 'Client',
    role: 'client',
    organization: 'Tech Company Inc',
  },
  {
    id: '3',
    email: 'hacker@securityfirm.com',
    firstName: 'Sarah',
    lastName: 'Hacker',
    role: 'ethical_hacker',
    organization: 'Security Firm LLC',
  },
];

// Mock API responses
export const authAPI = {
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    return {
      user,
      token: 'mock-jwt-token-' + user.id,
    };
  },

  signup: async (userData: any): Promise<{ user: User; token: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if email already exists
    if (mockUsers.find(u => u.email === userData.email)) {
      throw new Error('Email already exists');
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role,
      organization: userData.organization,
    };
    
    mockUsers.push(newUser);
    
    return {
      user: newUser,
      token: 'mock-jwt-token-' + newUser.id,
    };
  },

  resetPassword: async (email: string): Promise<{ message: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('Email not found');
    }
    
    return {
      message: 'Password reset email sent successfully',
    };
  },

  recoverAccount: async (email: string, securityAnswer: string): Promise<{ message: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('Email not found');
    }
    
    // In a real app, you'd verify the security answer
    return {
      message: 'Account recovery email sent successfully',
    };
  },
};

// Local storage helpers
export const tokenStorage = {
  get: () => localStorage.getItem('auth_token'),
  set: (token: string) => localStorage.setItem('auth_token', token),
  remove: () => localStorage.removeItem('auth_token'),
};

export const userStorage = {
  get: (): User | null => {
    const user = localStorage.getItem('auth_user');
    return user ? JSON.parse(user) : null;
  },
  set: (user: User) => localStorage.setItem('auth_user', JSON.stringify(user)),
  remove: () => localStorage.removeItem('auth_user'),
};