import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 py-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
        Erreur 404
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink">
        Page introuvable
      </h1>
      <Link href="/" className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
