import type { Metadata } from "next";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";
import { Providers } from "./providers";
import SpotifyPlayer from "@/components/SpotifyPlayer";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John John's Portfolio",
  description: "Modern and Minimalistic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black bg-lightBackground`}
      >
        <main className="relative lg:mx-[7.2%]">
          <div className="fixed inset-y-[-100vh] left-[7.2%] w-px lg:bg-gray-200/80 dark:lg:bg-neutral-900/80 z-50"></div>
          <div className="fixed inset-y-[-100vh] right-[7.2%] w-px lg:bg-gray-200/80 dark:lg:bg-neutral-900/80 z-50"></div>

          <div className="fixed inset-y-0 left-[25%] md:left-[28.5%] w-px border-r border-dashed border-neutral-200/50 dark:border-neutral-800/50 -z-10"></div>
          <div className="fixed inset-y-0 left-[50%] w-px border-r border-dashed border-neutral-200/50 dark:border-neutral-800/50 -z-10"></div>
          <div className="fixed inset-y-0 left-[75%] md:left-[71.5%] w-px border-r border-dashed border-neutral-200/50 dark:border-neutral-800/50 -z-10"></div>
          <Providers>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
            <SpotifyPlayer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
