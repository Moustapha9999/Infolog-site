import { VirtualisationServeursHero } from "@/components/virtualisation-serveurs/VirtualisationServeursHero";
import { VirtualisationServeursDuo } from "@/components/virtualisation-serveurs/VirtualisationServeursDuo";
import { VirtualisationServeursCta } from "@/components/virtualisation-serveurs/VirtualisationServeursCta";
import { virtualisationServeurs } from "@/data/virtualisation-serveurs";

export const metadata = {
  title: "Virtualisation des serveurs",
  description: virtualisationServeurs.description,
};

export default function VirtualisationServeursPage() {
  return (
    <>
      <VirtualisationServeursHero />
      <VirtualisationServeursDuo />
      <VirtualisationServeursCta />
    </>
  );
}
