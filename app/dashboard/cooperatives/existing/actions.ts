"use server";

import { redirect } from "next/navigation";

// Database actions for creating, updating, and deleting cooperative records.

import { prisma } from "@/lib/prisma";

// Creates a new cooperative record in the database.
export async function createExistingCooperative(formData: FormData) {
  const name = String(formData.get("name") || "").trim();

  const registrationNumber = String(
    formData.get("registrationNumber") || ""
  ).trim();

  const cooperativeType = String(
    formData.get("cooperativeType") || ""
  ).trim();

  const provinceId = Number(formData.get("provinceId"));

  const status = String(formData.get("status") || "ACTIVE");

  const address = String(formData.get("address") || "").trim();

  const phone = String(formData.get("phone") || "").trim();

  const email = String(formData.get("email") || "").trim();

  if (!name) {
    throw new Error("Cooperative name is required.");
  }

  if (!cooperativeType) {
    throw new Error("Cooperative type is required.");
  }

  if (!provinceId) {
    throw new Error("Province is required.");
  }

  await prisma.cooperative.create({
    data: {
      name,
      registrationNumber: registrationNumber || null,
      cooperativeType,
      provinceId,
      status,
      address: address || null,
      phone: phone || null,
      email: email || null,
    },
  });
}

// Updates an existing cooperative record.
export async function updateCooperative(
  id: number,
  formData: FormData
) {
  const name = String(formData.get("name") || "").trim();

  const registrationNumber = String(
    formData.get("registrationNumber") || ""
  ).trim();

  const cooperativeType = String(
    formData.get("cooperativeType") || ""
  ).trim();

  const provinceId = Number(formData.get("provinceId"));

  const status = String(formData.get("status") || "ACTIVE");

  const address = String(formData.get("address") || "").trim();

  const phone = String(formData.get("phone") || "").trim();

  const email = String(formData.get("email") || "").trim();

  if (!name) {
    throw new Error("Cooperative name is required.");
  }

  if (!cooperativeType) {
    throw new Error("Cooperative type is required.");
  }

  if (!provinceId) {
    throw new Error("Province is required.");
  }

  await prisma.cooperative.update({
    where: {
      id,
    },
    data: {
      name,
      registrationNumber: registrationNumber || null,
      cooperativeType,
      provinceId,
      status,
      address: address || null,
      phone: phone || null,
      email: email || null,
    },
  });
}

// Deletes a cooperative record from the database.
export async function deleteCooperative(id: number) {
  await prisma.cooperative.delete({
    where: {
      id,
    },
  });
    redirect("/dashboard/cooperatives");
}