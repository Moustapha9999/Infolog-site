import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/cms/auth";
import { safeAdminNext } from "@/lib/cms/admin-path";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { site } from "@/data/site";
import { NetworkGraph } from "@/components/home/NetworkGraph";
import { Logo } from "@/components/ui/Logo";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";

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
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-8 sm:px-8 lg:px-12">
      <TechnicalFrame className="grid w-full max-w-7xl overflow-hidden bg-white lg:min-h-[720px] lg:grid-cols-2">
        <section className="relative flex flex-col justify-between bg-ink px-6 py-8 text-paper sm:px-10 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
            <NetworkGraph />
          </div>
          <div className="relative">
            <Logo large onDark />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-paper/60">
              Console CMS
            </p>
          </div>
          <div className="relative mt-10 max-w-xl lg:mt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/50">
              Back-office
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight sm:text-[2.15rem]">
              Console de gestion du site
            </h1>
            <p className="mt-4 text-sm leading-7 text-paper/70">
              Produits, pages, médias et messages de {site.name}. Accès réservé
              aux équipes internes.
            </p>
          </div>
          <p className="relative mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
            {site.city} · {site.country}
          </p>
        </section>

        <section className="flex items-center justify-center border-t border-ink/10 bg-white px-6 py-10 sm:px-10 lg:border-t-0 lg:border-l lg:px-16">
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
      </TechnicalFrame>
    </div>
  );
}
