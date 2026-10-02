// app/api/cooperatives/[id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/cooperatives/[id]
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cooperative = await prisma.cooperative.findUnique({
      where: { id: parseInt(params.id) },
      include: { province: true, members: true },
    });

    if (!cooperative) {
      return NextResponse.json({ error: "Cooperative not found" }, { status: 404 });
    }

    return NextResponse.json(cooperative);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/cooperatives/[id]
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, registrationNumber, cooperativeType, address, provinceId, phone, email, status, currentUserRole } = await req.json();

    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const cooperative = await prisma.cooperative.update({
      where: { id: parseInt(params.id) },
      data: {
        name,
        registrationNumber,
        cooperativeType,
        address,
        provinceId,
        phone,
        email,
        status,
      },
    });

    return NextResponse.json(cooperative);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/cooperatives/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { currentUserRole } = await req.json();

    if (currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.cooperative.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: "Cooperative deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
