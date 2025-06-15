"use client";

// Client-side authentication utilities
import { signIn, signOut, useSession } from "next-auth/react";

// Login function
export async function login(email: string, password: string, role: 'guest' | 'agent' | 'admin' = 'guest') {
  try {
    const result = await signIn('credentials', {
      email,
      password,
      role,
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}

// Logout function
export async function logout() {
  await signOut({ redirect: true, callbackUrl: '/' });
}

// Register function (client-side)
export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Registration failed",
      };
    }
    
    return {
      success: true,
      user: data,
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: "An error occurred during registration",
    };
  }
};

// Get current user from session
export function useCurrentUser() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return {
    user,
    loading: status === 'loading',
    isAuthenticated: status === 'authenticated',
  };
} 