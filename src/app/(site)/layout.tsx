import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { site } from "@/data/site";
import { getSiteCopy } from "@/data/site-copy";
import { getSiteContact } from "@/lib/cms/site-contact";
import { localeMeta } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contact, locale] = await Promise.all([getSiteContact(), getLocale()]);
  const copy = getSiteCopy(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    description: copy.description,
    inLanguage: localeMeta[locale].htmlLang,
    telephone: contact.phones.map((item) => item.display),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.postalBox}, ${contact.street}`,
      addressLocality: site.city,
      addressCountry: "MR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.lat,
      longitude: contact.geo.lng,
    },
    hasMap: contact.mapsHref,
  };

  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header contact={contact} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
