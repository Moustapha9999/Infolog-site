import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { site } from "@/data/site";
import { getSiteContact } from "@/lib/cms/site-contact";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contact = await getSiteContact();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    description: site.description,
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
