// app/api/users/[id]/route.ts
// API routes for managing a single user by ID.
// Supports GET (view), PUT (update), DELETE (remove).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/users/:id
// Fetch one user by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(params.id) },
      include: { office: true }, // include office info for context
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/users/:id
// Update user details. Managers can update roles, officers can only update their own profile.
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { firstName, lastName, email, role, currentUserRole } = await req.json();

    // Officers cannot promote/demote roles
    if (currentUserRole !== "MANAGER" && role === "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(params.id) },
      data: { firstName, lastName, email, role },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/users/:id
// Remove a user. Only managers can delete.
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { currentUserRole } = await req.json();

    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.user.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
