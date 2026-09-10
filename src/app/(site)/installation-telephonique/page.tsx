import { InstallationTelephoniqueHero } from "@/components/installation-telephonique/InstallationTelephoniqueHero";
import { InstallationTelephoniqueIntro } from "@/components/installation-telephonique/InstallationTelephoniqueIntro";
import { InstallationTelephoniqueServices } from "@/components/installation-telephonique/InstallationTelephoniqueServices";
import {
  InstallationTelephoniqueSolutions,
  InstallationTelephoniqueSupport,
} from "@/components/installation-telephonique/InstallationTelephoniqueSolutions";
import { getInstallationTelephonique } from "@/data/installation-telephonique";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const installationTelephonique = getInstallationTelephonique(locale);
  return buildLocaleMetadata({
    locale,
    title: installationTelephonique.title,
    description: installationTelephonique.description,
    path: "/installation-telephonique",
  });
}

export default async function InstallationTelephoniquePage() {
  return (
    <>
      <InstallationTelephoniqueHero />
      <InstallationTelephoniqueIntro />
      <InstallationTelephoniqueServices />
      <InstallationTelephoniqueSolutions />
      <InstallationTelephoniqueSupport />
    </>
  );
}
