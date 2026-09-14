"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/cms/auth";
import { writeAuditLog } from "@/lib/cms/audit";
import { MIN_PASSWORD_LENGTH } from "@/lib/cms/password-recovery";
import { isStaffRole, type StaffRole } from "@/lib/cms/roles";
import { countAdmins, listStaffAccounts } from "@/lib/cms/staff-users";
import { canUseServiceRole, createServiceSupabaseClient } from "@/lib/supabase/admin";

function fail(code: string): never {
  redirect(`/admin/users?error=${encodeURIComponent(code)}`);
}

function ok(code = "saved"): never {
  redirect(`/admin/users?ok=${encodeURIComponent(code)}`);
}

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function parseRole(value: string): StaffRole | null {
  return isStaffRole(value) ? value : null;
}

async function requireServiceAdmin() {
  const session = await requireAdminSession({ adminOnly: true });
  if (!canUseServiceRole()) fail("service");
  return { session, admin: createServiceSupabaseClient() };
}

export async function createStaffUser(formData: FormData) {
  const { session, admin } = await requireServiceAdmin();
  const email = text(formData, "email").toLowerCase();
  const displayName = text(formData, "display_name");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("password_confirm") ?? "");
  const role = parseRole(text(formData, "role"));

  if (!email || !email.includes("@")) fail("email");
  if (!role) fail("role");
  if (password.length < MIN_PASSWORD_LENGTH) fail("password");
  if (password !== confirm) fail("password-match");

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    app_metadata: { role },
    user_metadata: { display_name: displayName || email.split("@")[0] },
  });
  if (error || !data.user) fail("create");

  await admin.from("profiles").upsert({
    id: data.user.id,
    display_name: displayName || email.split("@")[0],
    role,
  });

  await writeAuditLog({
    actorId: session.userId,
    action: "create",
    entityType: "user",
    entityId: data.user.id,
    meta: { email, role },
  });
  revalidatePath("/admin/users");
  ok("created");
}

export async function updateStaffUser(formData: FormData) {
  const { session, admin } = await requireServiceAdmin();
  const id = text(formData, "id");
  const email = text(formData, "email").toLowerCase();
  const displayName = text(formData, "display_name");
  const role = parseRole(text(formData, "role"));

  if (!id) fail("not-found");
  if (!email || !email.includes("@")) fail("email");
  if (!role) fail("role");

  const accounts = await listStaffAccounts();
  const current = accounts.find((account) => account.id === id);
  if (!current) fail("not-found");

  if (
    current.role === "admin" &&
    role !== "admin" &&
    countAdmins(accounts) <= 1
  ) {
    fail("last-admin");
  }

  const { data: existing, error: loadError } =
    await admin.auth.admin.getUserById(id);
  if (loadError || !existing.user) fail("not-found");

  const { error } = await admin.auth.admin.updateUserById(id, {
    email,
    email_confirm: true,
    app_metadata: { ...existing.user.app_metadata, role },
    user_metadata: {
      ...existing.user.user_metadata,
      display_name: displayName || email.split("@")[0],
    },
  });
  if (error) fail("update");

  await admin.from("profiles").upsert({
    id,
    display_name: displayName || email.split("@")[0],
    role,
  });

  await writeAuditLog({
    actorId: session.userId,
    action: "update",
    entityType: "user",
    entityId: id,
    meta: { email, role },
  });
  revalidatePath("/admin/users");
  ok("updated");
}

export async function setStaffUserPassword(formData: FormData) {
  const { session, admin } = await requireServiceAdmin();
  const id = text(formData, "id");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("password_confirm") ?? "");

  if (!id) fail("not-found");
  if (password.length < MIN_PASSWORD_LENGTH) fail("password");
  if (password !== confirm) fail("password-match");

  const { error } = await admin.auth.admin.updateUserById(id, { password });
  if (error) fail("update");

  await writeAuditLog({
    actorId: session.userId,
    action: "update",
    entityType: "user_password",
    entityId: id,
  });
  revalidatePath("/admin/users");
  ok("password");
}

export async function deleteStaffUser(formData: FormData) {
  const { session, admin } = await requireServiceAdmin();
  const id = text(formData, "id");
  if (!id) fail("not-found");
  if (id === session.userId) fail("self");

  const accounts = await listStaffAccounts();
  const current = accounts.find((account) => account.id === id);
  if (current?.role === "admin" && countAdmins(accounts) <= 1) {
    fail("last-admin");
  }

  const { error } = await admin.auth.admin.deleteUser(id);
  if (error) fail("delete");

  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "user",
    entityId: id,
  });
  revalidatePath("/admin/users");
  ok("deleted");
}

/** Conservé pour compatibilité : préfère updateStaffUser. */
export async function setUserRole(formData: FormData) {
  await updateStaffUser(formData);
}
