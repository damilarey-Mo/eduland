"use server";

import { hashPassword } from "./auth";
import prisma from "@/lib/prisma";

export async function registerUser(name: string, email: string, password: string) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "User already exists with this email" };
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER", // Default role
      },
    });

    // Return the user without the password
    const { password: _, ...userWithoutPassword } = newUser;

    return { success: true, user: userWithoutPassword };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: "An error occurred during registration" };
  }
}

export async function verifyCredentials(email: string, password: string) {
  // This should only be called from the NextAuth authorize callback
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.error("Verification error:", error);
    return null;
  }
} 