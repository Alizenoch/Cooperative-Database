// app/api/users/route.ts
// API routes for managing users (registry managers and officers).
// Handles creating new users and listing all users.

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// POST /api/users
// Create a new user. Only MANAGER can add officers.
export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, role, officeId, currentUserRole } = await req.json();

    // Check role: only managers can create officers
    if (currentUserRole !== "MANAGER" && role === "OFFICER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user record into database
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
        officeId,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/users
// Return all users. Managers see all, officers can be restricted later.
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: { office: true }, // include office info for context
    });
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
