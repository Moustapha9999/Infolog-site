import { CollaborationHero } from "@/components/collaboration/CollaborationHero";
import { CollaborationPortfolio } from "@/components/collaboration/CollaborationPortfolio";
import { CollaborationSecurite } from "@/components/collaboration/CollaborationSecurite";
import { CollaborationCollabPortfolio } from "@/components/collaboration/CollaborationCollabPortfolio";
import { collaboration } from "@/data/collaboration";

export const metadata = {
  title: "Réseau & collaboration",
  description: collaboration.description,
};

export default function CollaborationPage() {
  return (
    <>
      <CollaborationHero />
      <CollaborationPortfolio />
      <CollaborationSecurite />
      <CollaborationCollabPortfolio />
    </>
  );
}
