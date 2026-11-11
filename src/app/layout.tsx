import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { themeInitScript } from "@/lib/theme";
import { content, defaultLocale, siteUrl } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";

// Inter is only a fallback for non-Apple devices; on a Mac the system font
// (-apple-system / SF Pro) takes over, like the real macOS UI.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-fallback",
  subsets: ["latin"],
  display: "swap",
});

const { site } = content[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: "/",
    siteName: site.name,
    locale: "es_MX",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/og-image.jpg"],
  },
};

// Lets the page reach the screen edges on phones (safe-area insets handle the
// notch); the status bar color is kept in sync by the desktop shell.
export const viewport: Viewport = { viewportFit: "cover" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      jobTitle: site.role,
      description: site.tagline,
      url: siteUrl,
      image: `${siteUrl}/eduardo.jpg`,
      sameAs: [site.linkedin],
      knowsAbout: site.expertise.map((e) => e.name),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      inLanguage: defaultLocale,
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={structuredData} />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
