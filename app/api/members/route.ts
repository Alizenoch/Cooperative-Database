// app/api/members/route.ts
// API routes for managing cooperative members.
// Supports POST (create) and GET (list).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/members
// Officers and managers can add new members
export async function POST(req: Request) {
  try {
    const { memberNumber, firstName, lastName, cooperativeId, currentUserRole } = await req.json();

    // Only officers and managers can create members
    if (currentUserRole !== "OFFICER" && currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Create new member record
    const member = await prisma.member.create({
      data: {
        memberNumber,
        firstName,
        lastName,
        cooperativeId,
      },
    });

    return NextResponse.json(member);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/members
// Managers can view all members; officers can be restricted later to their cooperative
export async function GET() {
  try {
    const members = await prisma.member.findMany({
      include: { cooperative: true }, // include cooperative info for context
    });
    return NextResponse.json(members);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
