import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { themeInitScript } from "@/lib/theme";
import { content, defaultLocale, siteUrl } from "@/lib/content";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/og-image.png"],
  },
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
