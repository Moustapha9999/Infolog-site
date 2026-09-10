import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Arabic, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import { getSiteCopy } from "@/data/site-copy";
import { localeMeta } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/get-locale";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const defaultTitles = {
  fr: "INFOLOG — Solutions, infrastructure et services",
  en: "INFOLOG — Solutions, infrastructure and services",
  ar: "INFOLOG — حلول وبنية تحتية وخدمات",
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getSiteCopy(locale);
  const title = defaultTitles[locale];
  const localized = buildLocaleMetadata({
    locale,
    title,
    description: copy.mission,
    path: "/",
  });

  return {
    metadataBase: new URL(site.url),
    ...localized,
    title: {
      default: title,
      template: "%s · INFOLOG",
    },
    openGraph: {
      ...localized.openGraph,
      title: "INFOLOG",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const meta = localeMeta[locale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      data-locale={locale}
      className={`${grotesk.variable} ${jetbrains.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
