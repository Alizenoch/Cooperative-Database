import { prisma } from "@/lib/prisma";
import { deleteCooperative } from "../existing/actions";

type CooperativeDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Gets one cooperative from the database and displays its information.
export default async function CooperativeDetailsPage({
  params,
}: CooperativeDetailsPageProps) {
  const { id } = await params;

  // Finds the cooperative using its ID and includes the province information.
  const cooperative = await prisma.cooperative.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      province: true,
    },
  });

  // Shows a message if the cooperative does not exist.
  if (!cooperative) {
    return (
      <main className="min-h-screen bg-slate-100 p-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">
            Cooperative Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The cooperative you are looking for does not exist.
          </p>

          <a
            href="/dashboard/cooperatives"
            className="mt-6 inline-block rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Back to Cooperatives
          </a>
        </div>
      </main>
    );
  }

  // Connects the delete button to the selected cooperative.
  const deleteAction = deleteCooperative.bind(null, cooperative.id);

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="ml-64">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
          <div>
            <h1 className="text-xl font-semibold text-slate-800">
              Cooperative Details
            </h1>

            <p className="text-sm text-slate-500">
              View registered cooperative information
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-800">
            RO
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <div className="mb-6">
            <a
              href="/dashboard/cooperatives"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
            >
              ← Back to Cooperatives
            </a>
          </div>

          <div className="rounded-2xl bg-white shadow-sm">
            {/* Cooperative Header */}
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {cooperative.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Registration No.:{" "}
                    {cooperative.registrationNumber || "N/A"}
                  </p>
                </div>

                {/* Displays the current cooperative status. */}
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    cooperative.status === "ACTIVE"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {cooperative.status}
                </span>
              </div>
            </div>

            {/* Cooperative Information */}
            <div className="grid gap-6 p-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Cooperative Name
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Registration Number
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.registrationNumber || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Cooperative Type
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.cooperativeType}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Province
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.province?.name || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Address
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.address || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.phone || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.email || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>

                <p className="mt-1 text-sm text-slate-800">
                  {cooperative.status}
                </p>
              </div>
            </div>

            {/* Buttons for updating or deleting the cooperative. */}
            <div className="flex items-center gap-3 border-t border-slate-200 px-8 py-6">
              {/* Opens the edit page for this cooperative. */}
              <a
                href={`/dashboard/cooperatives/${cooperative.id}/edit`}
                className="rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Edit Cooperative
              </a>

              {/* Deletes this cooperative from the database. */}
              <form action={deleteAction}>
                <button
                  type="submit"
                  className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Delete Cooperative
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}