import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Forever Adventurer | Your Travel Hub — Discover, Plan & Journey",
    template: "%s | Forever Adventurer"
  },
  description: "Forever Adventurer is your travel hub for discovering destinations, finding inspiration and planning your next adventure. Explore destination guides, interactive planning tools, and download free printable travel resources.",
  keywords: [
    "travel hub",
    "destination guides",
    "trip planning tools",
    "free printable travel planners",
    "travel diaries",
    "packing checklists",
    "slow travel",
    "trip itinerary templates"
  ],
  authors: [{ name: "Forever Adventurer Editorial" }],
  creator: "Forever Adventurer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foreveradventurer.com",
    title: "Forever Adventurer | Your Travel Hub",
    description: "Your travel hub for discovering destinations, finding inspiration and planning your next adventure. Free printable journals, packing lists, and interactive trip planners.",
    siteName: "Forever Adventurer",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Dubrovnik coastal walls overlooking the Adriatic Sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forever Adventurer | Your Travel Hub",
    description: "Your travel hub for discovering destinations, finding inspiration and planning your next adventure.",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#121714]">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
