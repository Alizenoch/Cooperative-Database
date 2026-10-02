// app/api/members/[id]/route.ts
// API routes for managing a single member by ID.
// Supports GET (view), PUT (update), DELETE (remove).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/members/:id
// Fetch one member by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const member = await prisma.member.findUnique({
      where: { id: Number(params.id) },
      include: { cooperative: true }, // include cooperative info for context
    });

    if (!member) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/members/:id
// Update member details. Officers and managers can update.
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { firstName, lastName, cooperativeId, currentUserRole } = await req.json();

    // Only officers and managers can update members
    if (currentUserRole !== "OFFICER" && currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedMember = await prisma.member.update({
      where: { id: Number(params.id) },
      data: { firstName, lastName, cooperativeId },
    });

    return NextResponse.json(updatedMember);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/members/:id
// Remove a member. Only managers can delete.
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { currentUserRole } = await req.json();

    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.member.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
