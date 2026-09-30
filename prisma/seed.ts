import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const managerHash = await bcrypt.hash("RegistryManager2", 10);
  const officerHash = await bcrypt.hash("RegistryOfficer2", 10);

  await prisma.user.create({
    data: {
      firstName: "Registry",
      lastName: "Manager",
      email: "registry.manager@cooperative.com",
      password: managerHash,
      role: "MANAGER",
      officeId: 2,
    },
  });

  await prisma.user.create({
    data: {
      firstName: "Registry",
      lastName: "Officer",
      email: "registry.officer@cooperative.com",
      password: officerHash,
      role: "OFFICER",
      officeId: 2,
    },
  });

  console.log("Seeded Registry Manager and Officer users.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
