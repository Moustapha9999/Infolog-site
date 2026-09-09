import Link from "next/link";
import { poles } from "@/data/poles";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { getPageSections, sectionValue } from "@/lib/cms/pages";
import { getSiteContact } from "@/lib/cms/site-contact";

export async function Footer() {
  const year = new Date().getFullYear();
  const [sections, contact] = await Promise.all([
    getPageSections("footer"),
    getSiteContact(),
  ]);
  const tagline = sectionValue(
    sections,
    "tagline",
    "Des solutions technologiques au service de votre développement.",
  );

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr] lg:gap-12">
          <div className="max-w-md text-left">
            <Logo compact />
            <p className="mt-5 text-sm leading-6 text-paper/70">
              {tagline}
            </p>
            <p className="mt-2 text-sm text-paper/55">
              {site.city}, {site.country}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/45">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-paper/80 hover:text-paper">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/qui-sommes-nous"
                  className="text-paper/80 hover:text-paper"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-paper/80 hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/45">
              Pôles
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {poles.map((pole) => (
                <li key={pole.id}>
                  <Link
                    href={`/${pole.slug}`}
                    className="text-paper/80 hover:text-paper"
                  >
                    {pole.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/45">
              Coordonnées
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>{contact.address}</li>
              <li className="font-mono text-xs text-paper/50">
                {contact.plusCode}
              </li>
              {contact.phones.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-paper">
                    {item.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.emailHref} className="hover:text-paper">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex w-full max-w-[1600px] px-5 py-5 sm:px-8">
          <p className="text-left text-sm text-copper">
            Copyrights © {year} {site.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
