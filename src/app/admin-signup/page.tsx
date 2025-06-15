"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Shield, Mail, User, Key, CheckCircle } from 'lucide-react';

const adminSignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(10, "Admin password must be at least 10 characters"),
  confirmPassword: z.string(),
  securityCode: z.string().min(6, "Security code must be at least 6 characters"),
  department: z.string().min(2, "Department is required"),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

type AdminSignupFormData = z.infer<typeof adminSignupSchema>;

// This is a simplified version as only system administrators should be 
// able to create admin accounts in a real application
export default function AdminSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<AdminSignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityCode: '',
    department: '',
    agreeTerms: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
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
      adminSignupSchema.parse(formData);
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
      // This is where you would validate the admin security code
      // In a real app, this would be a much more secure process
      
      // Simulate verifying security code
      if (formData.securityCode !== '123456') {
        throw new Error('Invalid security code. Please contact system administrator.');
      }
      
      // Registration call
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: 'admin',
          department: formData.department
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
      
      setSuccessMessage('Admin account created successfully! Redirecting to login...');
      
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push('/login?registered=true');
      }, 2000);
      
    } catch (error) {
      console.error('Registration error:', error);
      setGeneralError(error instanceof Error ? error.message : 'Failed to create admin account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Admin Registration</h1>
          <p className="mt-2 text-gray-400">Create an administrator account</p>
        </div>
        
        {successMessage && (
          <div className="mb-6 bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-md flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {successMessage}
          </div>
        )}
        
        {generalError && (
          <div className="mb-6 bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-md">
            {generalError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="Admin Name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
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
                placeholder="admin@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full px-3 py-2 bg-black border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="••••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full px-3 py-2 bg-black border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="••••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">Department *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Shield className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 bg-black border ${errors.department ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="Operations / IT / Management"
              />
            </div>
            {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
          </div>
          
          <div>
            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-300 mb-1">Admin Security Code *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                id="securityCode"
                name="securityCode"
                value={formData.securityCode}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 bg-black border ${errors.securityCode ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="Enter security code"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">For testing, use: 123456</p>
            {errors.securityCode && <p className="mt-1 text-sm text-red-500">{errors.securityCode}</p>}
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-yellow-500 border-gray-700 rounded focus:ring-yellow-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeTerms" className="text-gray-300">
                I agree to the <Link href="/terms" className="text-yellow-400 hover:text-yellow-500">Terms of Service</Link> and <Link href="/privacy" className="text-yellow-400 hover:text-yellow-500">Privacy Policy</Link>
              </label>
              {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#f3e17b] hover:bg-[#dac968] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Creating Account...' : 'Register as Admin'}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-yellow-400 hover:text-yellow-500">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 