// app/api/cooperatives/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/cooperatives
export async function POST(req: Request) {
  try {
    const { name, registrationNumber, cooperativeType, address, provinceId, phone, email, status, currentUserRole } = await req.json();

    // Only officers and managers can add cooperatives
    if (currentUserRole !== "OFFICER" && currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const cooperative = await prisma.cooperative.create({
      data: {
        name,
        registrationNumber,
        cooperativeType,
        address,
        provinceId,
        phone,
        email,
        status: status || "ACTIVE",
        source: "SYSTEM", // default
      },
    });

    return NextResponse.json(cooperative);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/cooperatives
export async function GET() {
  try {
    const cooperatives = await prisma.cooperative.findMany({
      include: { province: true }, // show province info
    });
    return NextResponse.json(cooperatives);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
