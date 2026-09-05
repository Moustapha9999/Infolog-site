import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { site } from "@/data/site";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.country,
    },
  };

  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
