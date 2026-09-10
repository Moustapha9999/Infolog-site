import { VirtualisationServeursHero } from "@/components/virtualisation-serveurs/VirtualisationServeursHero";
import { VirtualisationServeursDuo } from "@/components/virtualisation-serveurs/VirtualisationServeursDuo";
import { VirtualisationServeursCta } from "@/components/virtualisation-serveurs/VirtualisationServeursCta";
import { getVirtualisationServeurs } from "@/data/virtualisation-serveurs";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const virtualisationServeurs = getVirtualisationServeurs(locale);
  return buildLocaleMetadata({
    locale,
    title: virtualisationServeurs.title,
    description: virtualisationServeurs.description,
    path: "/virtualisation-serveurs",
  });
}

export default async function VirtualisationServeursPage() {
  return (
    <>
      <VirtualisationServeursHero />
      <VirtualisationServeursDuo />
      <VirtualisationServeursCta />
    </>
  );
}
