import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  canUseServiceRole,
  createServiceSupabaseClient,
} from "@/lib/supabase/admin";

type AuditInput = {
  actorId?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  meta?: Record<string, unknown>;
  useServiceRole?: boolean;
};

export async function writeAuditLog(input: AuditInput) {
  try {
    const row = {
      actor_id: input.actorId ?? null,
      action: input.action,
      entity_type: input.entityType,
      entity_id: input.entityId ?? null,
      meta: input.meta ?? {},
    };
    if (input.useServiceRole && canUseServiceRole()) {
      const admin = createServiceSupabaseClient();
      await admin.from("audit_logs").insert(row);
      return;
    }
    const supabase = await createServerSupabaseClient();
    await supabase.from("audit_logs").insert(row);
  } catch {
    // Audit must never break the main action.
  }
}
