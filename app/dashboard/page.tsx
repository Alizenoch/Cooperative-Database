export default function DashboardPage() {
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
              <p className="text-xs text-emerald-200">Database System</p>
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
              className="block rounded-lg bg-emerald-800 px-3 py-2.5 text-sm font-medium"
            >
              Dashboard
            </a>

            <a
              href="/dashboard/cooperatives"
              className="block rounded-lg px-3 py-2.5 text-sm text-emerald-100 hover:bg-emerald-800"
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
        {/* Top Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Dashboard
            </h2>
            <p className="text-sm text-slate-500">
              Cooperative Database Management System
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

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              Welcome back
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Here is an overview of the cooperative registration system.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Registered Cooperatives</p>
              <p className="mt-3 text-3xl font-bold text-slate-800">0</p>
              <p className="mt-2 text-xs text-emerald-600">
                Active cooperatives
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Members</p>
              <p className="mt-3 text-3xl font-bold text-slate-800">0</p>
              <p className="mt-2 text-xs text-emerald-600">
                Registered members
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Pending Registrations</p>
              <p className="mt-3 text-3xl font-bold text-slate-800">0</p>
              <p className="mt-2 text-xs text-amber-600">
                Awaiting processing
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Active Users</p>
              <p className="mt-3 text-3xl font-bold text-slate-800">0</p>
              <p className="mt-2 text-xs text-blue-600">
                System users
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800">
                  Recent Activity
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Recent activity in the registration system.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">
              <p className="text-sm text-slate-400">
                No recent activity to display.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}