import { prisma } from "@/lib/prisma";
import { createExistingCooperative } from "./actions";

// Loads active provinces and displays the form for adding an existing cooperative.
export default async function ExistingCooperativePage() {
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
              Enter Existing Cooperative
            </h2>

            <p className="text-sm text-slate-500">
              Add an existing cooperative to the registry
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
          <a
            href="/dashboard/cooperatives"
            className="mb-6 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            ← Back to Cooperatives
          </a>

          {/* Page Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              Existing Cooperative Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Enter the details of a cooperative that already exists and
              needs to be added to the system.
            </p>
          </div>

          {/* Form */}
          <form action={createExistingCooperative} className="space-y-6">
            {/* Basic Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <h4 className="text-lg font-semibold text-slate-800">
                  Basic Information
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Enter the cooperative's official registration details.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Cooperative Name */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Cooperative Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter cooperative name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* Registration Number */}
                <div>
                  <label
                    htmlFor="registrationNumber"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Registration Number
                  </label>

                  <input
                    id="registrationNumber"
                    name="registrationNumber"
                    type="text"
                    placeholder="Enter registration number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* Cooperative Type */}
                <div>
                  <label
                    htmlFor="cooperativeType"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Cooperative Type
                  </label>

                  <select
                    id="cooperativeType"
                    name="cooperativeType"
                    defaultValue=""
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select cooperative type
                    </option>
                    <option value="Agricultural">
                      Agricultural
                    </option>
                    <option value="Savings and Credit">
                      Savings and Credit
                    </option>
                    <option value="Fisheries">
                      Fisheries
                    </option>
                    <option value="Livestock">
                      Livestock
                    </option>
                    <option value="Women">
                      Women
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Province */}
                <div>
                  <label
                    htmlFor="provinceId"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Province
                  </label>

                  <select
                    id="provinceId"
                    name="provinceId"
                    defaultValue=""
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select province
                    </option>

                    {provinces.map((province) => (
                      <option
                        key={province.id}
                        value={province.id}
                      >
                        {province.name}
                      </option>
                    ))}
                  </select>

                  <p className="mt-1 text-xs text-slate-400">
                    Provinces are loaded from the Province database.
                  </p>
                </div>

                {/* Status */}
                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Status
                  </label>

                  <select
                    id="status"
                    name="status"
                    defaultValue="ACTIVE"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <h4 className="text-lg font-semibold text-slate-800">
                  Contact Information
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Enter the cooperative's contact and location details.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Address */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="Enter cooperative address"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3">
              <a
                href="/dashboard/cooperatives"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Cancel
              </a>

              <button
                type="submit"
                className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Save Cooperative
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


