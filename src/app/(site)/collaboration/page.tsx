import { CollaborationHero } from "@/components/collaboration/CollaborationHero";
import { CollaborationPortfolio } from "@/components/collaboration/CollaborationPortfolio";
import { CollaborationSecurite } from "@/components/collaboration/CollaborationSecurite";
import { CollaborationCollabPortfolio } from "@/components/collaboration/CollaborationCollabPortfolio";
import { getCollaboration } from "@/data/collaboration";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const collaboration = getCollaboration(locale);
  return buildLocaleMetadata({
    locale,
    title: collaboration.title,
    description: collaboration.description,
    path: "/collaboration",
  });
}

export default async function CollaborationPage() {
  const locale = await getLocale();
  const collaboration = getCollaboration(locale);
  return (
    <>
      <CollaborationHero />
      <CollaborationPortfolio collaboration={collaboration} />
      <CollaborationSecurite collaboration={collaboration} />
      <CollaborationCollabPortfolio collaboration={collaboration} />
    </>
  );
}
