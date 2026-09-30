"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Province = {
  id: number;
  name: string;
};

export default function ProvinceFilter({
  provinces,
}: {
  provinces: Province[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentProvinceId =
    searchParams.get("provinceId") || "ALL";

  function handleChange(value: string) {
    if (value === "ALL") {
      router.push("/dashboard/cooperatives");
    } else {
      router.push(
        `/dashboard/cooperatives?provinceId=${value}`
      );
    }
  }

  return (
    <select
      id="province"
      value={currentProvinceId}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
    >
      <option value="ALL">All provinces</option>

      {provinces.map((province) => (
        <option key={province.id} value={province.id}>
          {province.name}
        </option>
      ))}
    </select>
  );
}