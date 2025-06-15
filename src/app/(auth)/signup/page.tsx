import { Metadata } from 'next';
import { SignupForm } from '@/components/auth/SignupForm';

export const metadata: Metadata = {
  title: 'Sign Up | ShortLet',
  description: 'Create a new account to start booking apartments or list your properties',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">
            Join <span className="text-yellow-400">ShortLet</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Create an account to start booking or listing properties
          </p>
        </div>
        
        <div className="mt-8">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}