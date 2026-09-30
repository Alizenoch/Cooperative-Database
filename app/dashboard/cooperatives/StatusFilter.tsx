"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function StatusFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStatus =
    searchParams.get("status") || "ALL";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "ALL") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    const queryString = params.toString();

    router.push(
      queryString
        ? `/dashboard/cooperatives?${queryString}`
        : "/dashboard/cooperatives"
    );
  }

  return (
    <select
      id="status"
      value={currentStatus}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
    >
      <option value="ALL">All statuses</option>
      <option value="ACTIVE">Active</option>
      <option value="INACTIVE">Inactive</option>
    </select>
  );
}