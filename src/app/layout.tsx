import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://indrajit147.github.io/portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Indrajit Gupta | ML/AI Researcher & Developer",
    template: "%s | Indrajit Gupta"
  },
  description:
    "Portfolio of Indrajit Gupta, KUET ECE student, ML/AI enthusiast, researcher, and builder of applied AI systems.",
  keywords: [
    "Indrajit Gupta",
    "KUET",
    "Machine Learning",
    "Artificial Intelligence",
    "Bangla NLP",
    "EEG research",
    "Computer Vision",
    "Portfolio"
  ],
  authors: [{ name: "Indrajit Gupta", url: siteUrl }],
  creator: "Indrajit Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Indrajit Gupta | ML/AI Researcher & Developer",
    description:
      "A developer-researcher portfolio focused on ML, Bangla NLP, EEG research, and useful AI systems.",
    siteName: "Indrajit Gupta Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Indrajit Gupta | ML/AI Researcher & Developer",
    description:
      "KUET ECE student, ML/AI enthusiast, researcher, and applied AI project builder."
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
