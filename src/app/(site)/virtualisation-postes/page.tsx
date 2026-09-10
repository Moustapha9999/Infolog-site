import { VirtualisationPostesHero } from "@/components/virtualisation-postes/VirtualisationPostesHero";
import { VirtualisationPostesDuo } from "@/components/virtualisation-postes/VirtualisationPostesDuo";
import { VirtualisationPostesCta } from "@/components/virtualisation-postes/VirtualisationPostesCta";
import { getVirtualisationPostes } from "@/data/virtualisation-postes";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const virtualisationPostes = getVirtualisationPostes(locale);
  return buildLocaleMetadata({
    locale,
    title: virtualisationPostes.title,
    description: virtualisationPostes.description,
    path: "/virtualisation-postes",
  });
}

export default async function VirtualisationPostesPage() {
  return (
    <>
      <VirtualisationPostesHero />
      <VirtualisationPostesDuo />
      <VirtualisationPostesCta />
    </>
  );
}
