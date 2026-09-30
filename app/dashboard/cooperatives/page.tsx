
// Imports Prisma client for database queries.
import { prisma } from "@/lib/prisma";
import ProvinceFilter from "./ProvinceFilter";
import SearchFilter from "./SearchFilter";
import StatusFilter from "./StatusFilter";

type CooperativesPageProps = {
  searchParams: Promise<{
    provinceId?: string;
    search?: string;
    status?: string;
  }>;
};

// Displays the list of cooperatives from the database.
export default async function CooperativesPage({
  searchParams,
}: CooperativesPageProps) {
  // Gets the filter values from the page URL.
  const params = await searchParams;
  const provinceId = params.provinceId;
  const search = params.search;
  const status = params.status;

  // Gets cooperative records from the database.
  const cooperatives = await prisma.cooperative.findMany({
    where: {
      ...(provinceId
        ? {
            provinceId: Number(provinceId),
          }
        : {}),

      ...(search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                registrationNumber: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),

      ...(status && status !== "ALL"
        ? {
            status,
          }
        : {}),
    },

    // Includes the province name with each cooperative.
    include: {
      province: true,
    },

    // Sorts cooperatives alphabetically by name.
    orderBy: {
      name: "asc",
    },
  });

  // Gets active provinces for the filter dropdown.
  const provinces = await prisma.province.findMany({
    where: {
      status: "ACTIVE",
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-emerald-900 text-white">
        <div className="border-b border-emerald-800 px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-emerald-900">
              C
            </div>

            <div>
              <h1 className="font-semibold">Cooperative</h1>
              <p className="text-xs text-emerald-200">
                Database System
              </p>
            </div>
          </div>
        </div>

        <nav className="px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Main Menu
          </p>

          <div className="space-y-1">
            <a
              href="/dashboard"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Dashboard
            </a>

            <a
              href="/dashboard/cooperatives"
              className="block rounded-lg bg-emerald-800 px-3 py-2.5 text-sm font-medium"
            >
              Cooperatives
            </a>

            <a
              href="/dashboard/members"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Members
            </a>

            <a
              href="/dashboard/registrations"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Registrations
            </a>

            <a
              href="/dashboard/offices"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Offices
            </a>

            <a
              href="/dashboard/documents"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Documents
            </a>

            <a
              href="/dashboard/payments"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Payments
            </a>

            <a
              href="/dashboard/reports"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Reports
            </a>

            <a
              href="/dashboard/users"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
            >
              Users
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="ml-64">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Cooperatives
            </h2>

            <p className="text-sm text-slate-500">
              Manage registered cooperatives
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">
                Registry Officer
              </p>

              <p className="text-xs text-slate-400">
                Port Moresby
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-800">
              RO
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {/* Page Title and Buttons */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Registered Cooperatives
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                View and manage cooperatives registered in the system.
              </p>
            </div>

            <div className="flex gap-3">
              {/* Opens the form for entering an existing cooperative. */}
              <a
                href="/dashboard/cooperatives/existing"
                className="rounded-lg border border-emerald-700 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                + Enter Existing Cooperative
              </a>

              {/* Opens the form for registering a new cooperative. */}
              <a
                href="/dashboard/cooperatives/register"
                className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                + Register New Cooperative
              </a>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Search */}
              <div>
                <label
                  htmlFor="search"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Search cooperatives
                </label>

                <SearchFilter />
              </div>

              {/* Province */}
              <div>
                <label
                  htmlFor="province"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Province
                </label>

                <ProvinceFilter provinces={provinces} />
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Status
                </label>

                <StatusFilter />
              </div>
            </div>
          </div>

          {/* Cooperatives Table */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h4 className="font-semibold text-slate-800">
                Cooperative Registry
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                {cooperatives.length} cooperatives currently registered
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Registration No.
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Cooperative Name
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Province
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cooperatives.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-16 text-center"
                      >
                        <div className="mx-auto max-w-md">
                          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl">
                            +
                          </div>

                          <h5 className="font-semibold text-slate-700">
                            No cooperatives found
                          </h5>

                          <p className="mt-2 text-sm text-slate-400">
                            Cooperatives registered in the system will appear
                            here.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    cooperatives.map((cooperative) => (
                      <tr key={cooperative.id}>
                        <td className="px-6 py-4 text-sm text-slate-700">
                          {cooperative.registrationNumber || "N/A"}
                        </td>

                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                          {cooperative.name}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-700">
                          {cooperative.cooperativeType}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-700">
                          {cooperative.province?.name || "N/A"}
                        </td>

                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              cooperative.status === "ACTIVE"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {cooperative.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm">
                          {/* Opens the details page for the cooperative. */}
                          <a
                            href={`/dashboard/cooperatives/${cooperative.id}`}
                            className="text-emerald-600 hover:text-emerald-900"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
