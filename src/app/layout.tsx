import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "@data/site";
import { PageLoader } from "@components/PageLoader";
import { SiteAnalytics } from "@components/SiteAnalytics";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: site.seo.title, description: site.seo.description, url: "/", siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f1efe9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body><PageLoader />{children}<SiteAnalytics /></body></html>;
}
