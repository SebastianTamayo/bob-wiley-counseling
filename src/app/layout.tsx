import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bob Wiley Counseling | Transformational Life Counseling",
  description: "Life is easier than you think. Discover true transformation with Bob Wiley, MA, LMHC, CSAT. Overcome personal challenges and find happiness with personalized counseling.",
  keywords: "counseling, therapy, Bob Wiley, mental health, personal happiness, LMHC, CSAT, online therapy, life coaching",
  openGraph: {
    title: "Bob Wiley Counseling | Transformational Life Counseling",
    description: "Discover true transformation with Bob Wiley, MA, LMHC, CSAT. Overcome personal challenges and find happiness.",
    url: "https://bobwileycounseling.com",
    siteName: "Bob Wiley Counseling",
    images: [
      {
        url: "https://bobwileycounseling.com/images/bob-headshot.jpg",
        width: 800,
        height: 800,
        alt: "Bob Wiley, MA, LMHC, CSAT - Counseling Professional"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
