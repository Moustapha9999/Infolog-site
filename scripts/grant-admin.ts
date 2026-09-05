/**
 * Attribue le rôle admin à un utilisateur Auth existant.
 * Usage: npx tsx --env-file=.env.local scripts/grant-admin.ts email@domaine.tld
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const email = process.argv[2]?.trim().toLowerCase();

if (!url || !key || !email) {
  console.error("Usage: npx tsx --env-file=.env.local scripts/grant-admin.ts email");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  const { data, error } = await supabase.auth.admin.listUsers({ perPage: 200 });
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  const user = data.users.find((item) => item.email?.toLowerCase() === email);
  if (!user) {
    console.error("USER_NOT_FOUND");
    process.exit(2);
  }

  const { error: updateError } = await supabase.auth.admin.updateUserById(
    user.id,
    {
      email_confirm: true,
      app_metadata: { ...user.app_metadata, role: "admin" },
    },
  );
  if (updateError) {
    console.error(updateError.message);
    process.exit(1);
  }

  const { error: profileError } = await supabase.from("profiles").upsert({
    id: user.id,
    display_name: user.email?.split("@")[0] ?? null,
    role: "admin",
  });
  if (profileError) {
    console.error(profileError.message);
    process.exit(1);
  }

  console.log("ADMIN_OK");
}

main();
