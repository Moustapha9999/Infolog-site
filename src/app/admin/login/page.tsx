import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/cms/auth";
import { safeAdminNext } from "@/lib/cms/admin-path";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { site } from "@/data/site";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const session = configured ? await getAdminSession() : null;
  if (session) {
    redirect(safeAdminNext(params.next));
  }

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-[minmax(17rem,2fr)_minmax(0,3fr)]">
      <aside className="relative flex min-h-[38vh] items-center justify-center overflow-hidden bg-ink px-8 py-12 lg:min-h-screen lg:px-12">
        <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-px bg-paper/10"
          aria-hidden
        />
        <div className="relative flex w-full max-w-sm flex-col items-center text-center">
          <Image
            src="/brand/infolog-mark.png"
            alt="INFOLOG"
            width={859}
            height={428}
            priority
            quality={100}
            className="h-auto w-[min(100%,15rem)] sm:w-[min(100%,17rem)]"
          />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/55">
            Console de gestion
          </p>
          <p className="mt-3 text-sm leading-6 text-paper/65">
            Pilotez le contenu du site INFOLOG depuis un espace centralisé.
          </p>
        </div>
        <p className="absolute bottom-6 left-8 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 lg:bottom-8 lg:left-12">
          {site.city} · {site.country}
        </p>
      </aside>

      <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          {!configured ? (
            <p className="border border-ink/10 bg-paper-2 px-4 py-4 text-sm leading-7 text-mute">
              Ajoutez <code className="font-mono text-copper">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
              et la clé publishable dans{" "}
              <code className="font-mono">.env.local</code>.
            </p>
          ) : (
            <AdminLoginForm next={safeAdminNext(params.next)} error={params.error} />
          )}
          <p className="mt-6 text-center text-sm text-mute">
            <Link href="/" className="hover:text-plan">
              Retour au site
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
