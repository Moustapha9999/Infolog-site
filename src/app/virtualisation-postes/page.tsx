import { VirtualisationPostesHero } from "@/components/virtualisation-postes/VirtualisationPostesHero";
import { VirtualisationPostesDuo } from "@/components/virtualisation-postes/VirtualisationPostesDuo";
import { VirtualisationPostesCta } from "@/components/virtualisation-postes/VirtualisationPostesCta";
import { virtualisationPostes } from "@/data/virtualisation-postes";

export const metadata = {
  title: "Virtualisation de postes et d'applications",
  description: virtualisationPostes.description,
};

export default function VirtualisationPostesPage() {
  return (
    <>
      <VirtualisationPostesHero />
      <VirtualisationPostesDuo />
      <VirtualisationPostesCta />
    </>
  );
}
