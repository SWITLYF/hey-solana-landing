import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hey Solana",
  description: "Hey Solana is an Ai Voice Powered Wallet that you can use for defi and all transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.variable} antialiased  bg-[url('/pngs/hero.png')] bg-cover`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
