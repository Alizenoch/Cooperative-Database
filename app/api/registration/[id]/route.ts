// This API route handles operations on a single registration application.
// It supports GET (view one application), PUT (update/approve/reject), and DELETE (remove application).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/registrations/[id]
// Fetch details of a single registration by ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const registration = await prisma.registration.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        province: true, // include province info
        office: true,   // include office info
        payment: true,  // include payment info if exists
      },
    });

    if (!registration) {
      return NextResponse.json({ error: "Registration not found" }, { status: 404 });
    }

    return NextResponse.json(registration);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/registrations/[id]
// Update registration status or details (restricted to MANAGER role)
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status, proposedName, cooperativeType, currentUserRole } = await req.json();

    // Only managers can update registration applications
    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const registration = await prisma.registration.update({
      where: { id: parseInt(params.id) },
      data: {
        status,          // e.g. APPROVED, REJECTED, PAYMENT_PENDING
        proposedName,
        cooperativeType,
      },
    });

    return NextResponse.json(registration);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/registrations/[id]
// Remove a registration application (restricted to MANAGER role)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { currentUserRole } = await req.json();

    // Only managers can delete registration applications
    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.registration.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: "Registration deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
