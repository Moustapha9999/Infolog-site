import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { site } from "@/data/site";

function getYoutubeId(url: string | null) {
  if (!url) return null;
  if (/^[\w-]{11}$/.test(url)) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export function ActivitiesVideo() {
  const videoId = getYoutubeId(site.activitiesVideoUrl);

  return (
    <section className="bg-paper pb-16 pt-0">
      <div className="tech-grid-dark relative overflow-hidden text-paper">
        <Container className="relative pb-28 pt-16 text-center sm:pb-36 sm:pt-20">
          <div className="flex justify-center">
            <SectionLabel tone="dark">Présentation</SectionLabel>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Nos activités
          </h2>
        </Container>
      </div>

      <Container className="-mt-24 sm:-mt-28">
        <div className="frame-corners relative mx-auto max-w-4xl overflow-hidden border border-ink/15 bg-ink shadow-[0_28px_60px_-36px_rgba(16,24,32,0.65)]">
          <span className="frame-corners-bl" aria-hidden />
          <span className="frame-corners-br" aria-hidden />

          {videoId ? (
            <div className="aspect-video w-full">
              <iframe
                title="Nos activités — INFOLOG"
                src={`https://www.youtube.com/embed/${videoId}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,rgba(29,78,137,0.35),rgba(16,24,32,0.95))] px-6 text-center">
              <span className="grid h-16 w-16 place-items-center border border-copper/50 text-copper">
                <Play className="h-7 w-7" aria-hidden />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
                Vidéo à confirmer par INFOLOG
              </p>
              <p className="max-w-md text-sm leading-6 text-paper/75">
                Emplacement réservé pour la vidéo de présentation des activités.
                Dès que le lien YouTube officiel sera fourni, il remplacera ce
                bloc.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
