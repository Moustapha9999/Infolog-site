import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "INFOLOG — Solutions, infrastructure et services",
    template: "%s · INFOLOG",
  },
  description: site.mission,
  openGraph: {
    title: "INFOLOG",
    description: site.mission,
    locale: "fr_MR",
    type: "website",
    url: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${grotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
