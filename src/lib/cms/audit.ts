import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function writeAuditLog(input: {
  actorId?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  meta?: Record<string, unknown>;
}) {
  try {
    const supabase = await createServerSupabaseClient();
    await supabase.from("audit_logs").insert({
      actor_id: input.actorId ?? null,
      action: input.action,
      entity_type: input.entityType,
      entity_id: input.entityId ?? null,
      meta: input.meta ?? {},
    });
  } catch {
    // Audit must never break the main action.
  }
}
