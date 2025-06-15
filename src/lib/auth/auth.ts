"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

// Get the current session
export async function getSession() {
  return await getServerSession(authOptions);
}

// Get the current user
export async function getCurrentUser() {
  const session = await getSession();

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!currentUser) {
    return null;
  }

  return {
    ...currentUser,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
    emailVerified: currentUser.emailVerified?.toISOString() || null,
  };
}

// Require authentication for protected routes
export async function requireAuth() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

// Require admin role for admin routes
export async function requireAdmin() {
  const session = await getSession();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return session;
}

// Require agent role for agent routes
export async function requireAgent() {
  const session = await getSession();

  if (!session?.user || session.user.role !== "AGENT") {
    redirect("/");
  }

  return session;
}

// Hash password for secure storage
export async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Check credentials for local login
export async function checkCredentials(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return user;
} 