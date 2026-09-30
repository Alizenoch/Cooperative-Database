"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/dashboard/cooperatives?${params.toString()}`);
  }

  return (
    <input
      id="search"
      type="search"
      placeholder="Search by name or registration number..."
      defaultValue={currentSearch}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
    />
  );
}