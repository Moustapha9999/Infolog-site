import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function NotFound() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const copy = dictionary.notFound;

  return (
    <div className="px-6 py-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
        {copy.code}
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink">
        {copy.title}
      </h1>
      <Link href="/" className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper">
        {copy.backHome}
      </Link>
    </div>
  );
}
