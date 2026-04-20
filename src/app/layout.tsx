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
    default: "Care Handbook — UK Care Home Resource Hub",
    template: "%s | Care Handbook",
  },
  description:
    "Free UK care home resources: CQC regulation guides, dementia care, handover templates, care plan templates, medication guidance, and more for care assistants and nurses.",
  keywords: [
    "CQC",
    "care home",
    "UK care",
    "care templates",
    "handover template",
    "care plan",
    "MAR chart",
    "medication guidance",
    "dementia care",
    "infection control",
    "falls prevention",
    "care assistant",
    "nursing home",
  ],
  openGraph: {
    title: "Care Handbook — UK Care Home Resource Hub",
    description:
      "Free UK care home resources: CQC regulation guides, dementia care, handover templates, care plan templates, and medication guidance.",
    type: "website",
    locale: "en_GB",
    siteName: "Care Handbook",
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