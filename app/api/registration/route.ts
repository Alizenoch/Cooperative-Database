// This API route handles cooperative registration applications.
// It supports POST (submit new application) and GET (list all applications).

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/registrations
// Officers or managers submit a new cooperative registration application
export async function POST(req: Request) {
  try {
    const {
      applicationNumber,
      proposedName,
      cooperativeType,
      applicantFirstName,
      applicantLastName,
      applicantEmail,
      applicantPhone,
      provinceId,
      officeId,
      currentUserRole,
    } = await req.json();

    // Only officers and managers can submit registration applications
    if (currentUserRole !== "OFFICER" && currentUserRole !== "MANAGER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const registration = await prisma.registration.create({
      data: {
        applicationNumber,
        proposedName,
        cooperativeType,
        applicantFirstName,
        applicantLastName,
        applicantEmail,
        applicantPhone,
        provinceId,
        officeId,
        status: "PAYMENT_PENDING", // default status
      },
    });

    return NextResponse.json(registration);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/registrations
// Managers can view all registration applications
export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      include: {
        province: true, // include province info
        office: true,   // include office info
      },
    });
    return NextResponse.json(registrations);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
