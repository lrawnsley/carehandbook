import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1e3a5f",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CareKit — UK Care Home Resource Hub",
    template: "%s | CareKit",
  },
  description:
    "Free UK care home resources: CQC regulation guides, handover templates, care plan templates, and medication guidance for care assistants and nurses.",
  keywords: [
    "CQC",
    "care home",
    "UK care",
    "care templates",
    "handover template",
    "care plan",
    "MAR chart",
    "medication guidance",
    "care assistant",
    "nursing home",
  ],
  openGraph: {
    title: "CareKit — UK Care Home Resource Hub",
    description:
      "Free UK care home resources: CQC regulation guides, handover templates, care plan templates, and medication guidance.",
    type: "website",
    locale: "en_GB",
    siteName: "CareKit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}