import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionary-types";
import type { SiteSocial } from "@/lib/cms/site-contact";

export function socialAccountLabel(
  dictionary: Dictionary,
  social: SiteSocial,
) {
  return dictionary.footer.socialAccounts[social.labelKey] ?? social.label;
}

function SocialIcon({
  social,
  size,
}: {
  social: SiteSocial;
  size: "sm" | "md";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand PNG assets
    <img
      src={social.icon}
      alt=""
      width={size === "sm" ? 32 : 36}
      height={size === "sm" ? 32 : 36}
      className={cn("rounded-[10px]", size === "sm" ? "size-8" : "size-9")}
    />
  );
}

export function SocialLinks({
  socials,
  dictionary,
  variant = "footer",
  className,
}: {
  socials: SiteSocial[];
  dictionary: Dictionary;
  variant?: "footer" | "panel" | "compact";
  className?: string;
}) {
  if (socials.length === 0) return null;

  const comingSoon = dictionary.footer.socialComingSoon;

  if (variant === "compact") {
    return (
      <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
        {socials.map((social) => {
          const label = socialAccountLabel(dictionary, social);
          const title = social.href ? label : `${label} — ${comingSoon}`;
          const icon = <SocialIcon social={social} size="sm" />;
          const itemClass =
            "inline-flex size-8 overflow-hidden rounded-[10px] ring-1 ring-ink/15 transition hover:ring-copper/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper";

          return (
            <li key={social.id}>
              {social.href ? (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={title}
                  className={itemClass}
                >
                  {icon}
                </a>
              ) : (
                <span
                  aria-label={`${label} — ${comingSoon}`}
                  title={title}
                  className={`${itemClass} cursor-default opacity-90`}
                >
                  {icon}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  if (variant === "panel") {
    return (
      <ul className={cn("grid gap-2", className)}>
        {socials.map((social) => {
          const label = socialAccountLabel(dictionary, social);
          const icon = <SocialIcon social={social} size="md" />;
          const itemClass =
            "flex items-center gap-3 border border-ink/12 bg-paper px-3 py-2.5 text-start transition hover:border-plan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper";

          return (
            <li key={social.id}>
              {social.href ? (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemClass}
                >
                  {icon}
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink">
                    {label}
                  </span>
                </a>
              ) : (
                <span
                  title={`${label} — ${comingSoon}`}
                  className={`${itemClass} cursor-default opacity-80`}
                >
                  {icon}
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
                    {label}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("flex flex-wrap gap-x-8 gap-y-5", className)}>
      {socials.map((social) => {
        const label = socialAccountLabel(dictionary, social);
        const title = social.href ? label : `${label} — ${comingSoon}`;
        const icon = <SocialIcon social={social} size="md" />;
        const itemClass =
          "group flex max-w-[16rem] items-center gap-3 text-start focus-visible:outline-none";

        return (
          <li key={social.id}>
            {social.href ? (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={title}
                className={itemClass}
              >
                <span className="inline-flex size-9 shrink-0 overflow-hidden rounded-[10px] ring-1 ring-paper/15 transition group-hover:ring-copper/70 group-focus-visible:ring-2 group-focus-visible:ring-copper">
                  {icon}
                </span>
                <span className="font-mono text-[11px] uppercase leading-4 tracking-[0.12em] text-paper/60 transition group-hover:text-paper">
                  {label}
                </span>
              </a>
            ) : (
              <span
                aria-label={`${label} — ${comingSoon}`}
                title={title}
                className={`${itemClass} cursor-default opacity-90`}
              >
                <span className="inline-flex size-9 shrink-0 overflow-hidden rounded-[10px] ring-1 ring-paper/15">
                  {icon}
                </span>
                <span className="font-mono text-[11px] uppercase leading-4 tracking-[0.12em] text-paper/45">
                  {label}
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
