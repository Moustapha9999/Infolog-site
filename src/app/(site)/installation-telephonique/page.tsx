import { InstallationTelephoniqueHero } from "@/components/installation-telephonique/InstallationTelephoniqueHero";
import { InstallationTelephoniqueIntro } from "@/components/installation-telephonique/InstallationTelephoniqueIntro";
import { InstallationTelephoniqueServices } from "@/components/installation-telephonique/InstallationTelephoniqueServices";
import {
  InstallationTelephoniqueSolutions,
  InstallationTelephoniqueSupport,
} from "@/components/installation-telephonique/InstallationTelephoniqueSolutions";
import { installationTelephonique } from "@/data/installation-telephonique";

export const metadata = {
  title: "Installation téléphonique pour entreprise",
  description: installationTelephonique.description,
};

export default function InstallationTelephoniquePage() {
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
