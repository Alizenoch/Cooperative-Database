
import { prisma } from "@/lib/prisma";
import { createExistingCooperative } from "../existing/actions";

// Loads the registration form for a new cooperative.
export default async function RegisterCooperativePage() {
  // Gets active provinces from the database for the province dropdown.
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

        {/* Main Menu */}
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
              Register New Cooperative
            </h2>

            <p className="text-sm text-slate-500">
              Enter the information for a new cooperative.
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
          {/* Back Link */}
          <div className="mb-6">
            <a
              href="/dashboard/cooperatives"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              ← Back to Cooperatives
            </a>
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              New Cooperative Registration
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Enter the cooperative details below.
            </p>
          </div>

          {/* Registration Form */}
          <form
            action={createExistingCooperative}
            className="max-w-3xl space-y-6 rounded-2xl bg-white p-8 shadow-sm"
          >
            {/* Basic Information */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">
                Basic Information
              </h4>

              <div className="space-y-4">
                {/* Cooperative Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Cooperative Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>

                {/* Registration Number */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Registration Number
                  </label>

                  <input
                    name="registrationNumber"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>

                {/* Cooperative Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Cooperative Type
                  </label>

                  <input
                    name="cooperativeType"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>

                {/* Province */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Province
                  </label>

                  <select
                    name="provinceId"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  >
                    <option value="">Select province</option>

                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Status
                  </label>

                  <select
                    name="status"
                    defaultValue="ACTIVE"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">
                Contact Information
              </h4>

              <div className="space-y-4">
                {/* Address */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Address
                  </label>

                  <input
                    name="address"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    name="phone"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 border-t border-slate-200 pt-6">
              <button
                type="submit"
                className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Register Cooperative
              </button>

              <a
                href="/dashboard/cooperatives"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


