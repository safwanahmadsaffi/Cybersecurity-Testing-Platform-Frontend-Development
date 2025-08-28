import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  role: yup
    .string()
    .oneOf(['client', 'admin', 'ethical_hacker'], 'Please select a valid role')
    .required('Role is required'),
  organization: yup
    .string()
    .min(2, 'Organization must be at least 2 characters')
    .required('Organization is required'),
});

export const passwordResetSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const accountRecoverySchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  securityQuestion: yup
    .string()
    .required('Security question is required'),
  securityAnswer: yup
    .string()
    .min(2, 'Security answer must be at least 2 characters')
    .required('Security answer is required'),
});

export type LoginForm = yup.InferType<typeof loginSchema>;
export type SignupForm = yup.InferType<typeof signupSchema>;
export type PasswordResetForm = yup.InferType<typeof passwordResetSchema>;
export type AccountRecoveryForm = yup.InferType<typeof accountRecoverySchema>;