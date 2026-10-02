// This API route handles user login requests.
// It verifies the email and password against the User table in Prisma.
// If credentials are valid, it returns a success response (later you can add JWT/cookie handling).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// POST /api/auth/login
export async function POST(req: Request) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Look up the user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // No user found with this email
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Compare the provided password with the stored hashed password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      // Password does not match
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // At this point, credentials are valid.
    // TODO: Add JWT or cookie session handling here for persistent login.
    return NextResponse.json({ message: "Login successful", user });
  } catch (error: any) {
    // Catch any unexpected errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
