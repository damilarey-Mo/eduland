"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { z } from 'zod';
import { User, Building, Shield, Mail } from 'lucide-react';
import { login } from '@/lib/auth/client';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type UserRole = 'guest' | 'agent' | 'admin';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');
  const [selectedRole, setSelectedRole] = useState<UserRole>('guest');

  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(
    registered ? 'Account registered successfully! Please log in.' : null
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    try {
      loginSchema.parse(formData);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach(error => {
          if (error.path) {
            newErrors[error.path[0]] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await login(formData.email, formData.password, selectedRole);
      
      if (result.success) {
        setSuccess("Login successful! Redirecting to dashboard...");
        // Redirect based on role
        const dashboardPath = selectedRole === 'guest' 
          ? '/user-dashboard'
          : selectedRole === 'agent'
          ? '/agent-dashboard'
          : '/admin-dashboard';
        router.push(dashboardPath);
        router.refresh();
      } else {
        setGeneralError(result.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to ShortLet</h1>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>
        
        {/* Login type selector */}
        <div className="mb-8 flex rounded-md overflow-hidden border border-gray-800">
          <button
            onClick={() => setSelectedRole('guest')}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              selectedRole === 'guest'
                ? 'bg-gray-900 text-white border-b-2 border-[#f3e17b]'
                : 'bg-black text-gray-400 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <User className="inline-block h-4 w-4 mr-2" />
            Guest
          </button>
          <button
            onClick={() => setSelectedRole('agent')}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              selectedRole === 'agent'
                ? 'bg-gray-900 text-white border-b-2 border-[#f3e17b]'
                : 'bg-black text-gray-400 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <Building className="inline-block h-4 w-4 mr-2" />
            Host/Agent
          </button>
          <button
            onClick={() => setSelectedRole('admin')}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              selectedRole === 'admin'
                ? 'bg-gray-900 text-white border-b-2 border-[#f3e17b]'
                : 'bg-black text-gray-400 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <Shield className="inline-block h-4 w-4 mr-2" />
            Admin
          </button>
        </div>
        
        {success && (
          <div className="mb-6 bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-md">
            {success}
          </div>
        )}
        
        {generalError && (
          <div className="mb-6 bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-md">
            {generalError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-xl">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`block w-full px-3 py-2 bg-black border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-yellow-500 border-gray-700 rounded focus:ring-yellow-500 bg-black"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="text-yellow-400 hover:text-yellow-500">
                Forgot password?
              </Link>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#f3e17b] hover:bg-[#dac968] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              {selectedRole === 'guest' ? (
                <>
                  Don't have an account?{' '}
                  <Link href="/register" className="text-yellow-400 hover:text-yellow-500">
                    Register as Guest
                  </Link>
                </>
              ) : selectedRole === 'agent' ? (
                <>
                  Want to become a host?{' '}
                  <Link href="/agent-signup" className="text-yellow-400 hover:text-yellow-500">
                    Register as Agent
                  </Link>
                </>
              ) : (
                <>
                  Need an admin account?{' '}
                  <Link href="/admin-signup" className="text-yellow-400 hover:text-yellow-500">
                    Register as Admin
                  </Link>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 