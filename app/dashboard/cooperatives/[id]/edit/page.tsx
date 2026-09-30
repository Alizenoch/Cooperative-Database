import { prisma } from "@/lib/prisma";
import { updateCooperative } from "../../existing/actions";

type EditCooperativePageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Loads a cooperative and displays the form used to update it.
export default async function EditCooperativePage({
  params,
}: EditCooperativePageProps) {
  const { id } = await params;

  // Gets the cooperative from the database.
  const cooperative = await prisma.cooperative.findUnique({
    where: {
      id: Number(id),
    },
  });

  // Gets active provinces for the province dropdown.
  const provinces = await prisma.province.findMany({
    where: {
      status: "ACTIVE",
    },
    orderBy: {
      name: "asc",
    },
  });

  // Shows a message if the cooperative does not exist.
  if (!cooperative) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Cooperative not found
        </h1>
      </div>
    );
  }

  // Connects the form to the update database action.
  const updateAction = updateCooperative.bind(null, cooperative.id);

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="p-8">
        <div className="mb-6">
          <a
            href={`/dashboard/cooperatives/${cooperative.id}`}
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            ← Back to Cooperative
          </a>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Cooperative
          </h1>
          <p className="mt-2 text-slate-600">
            Update the cooperative information.
          </p>
        </div>

        {/* Form for updating the cooperative. */}
        <form
          action={updateAction}
          className="max-w-3xl space-y-6 rounded-2xl bg-white p-8 shadow-sm"
        >
          {/* Basic Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Basic Information
            </h2>

            <div className="space-y-4">
              {/* Cooperative Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Cooperative Name
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={cooperative.name}
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
                  defaultValue={cooperative.registrationNumber ?? ""}
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
                  defaultValue={cooperative.cooperativeType}
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
                  defaultValue={String(cooperative.provinceId)}
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
                  defaultValue={cooperative.status}
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
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  defaultValue={cooperative.address ?? ""}
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
                  defaultValue={cooperative.phone ?? ""}
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
                  defaultValue={cooperative.email ?? ""}
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
              Save Changes
            </button>

            <a
              href={`/dashboard/cooperatives/${cooperative.id}`}
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}