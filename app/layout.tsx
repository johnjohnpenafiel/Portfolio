import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="lg:mx-[7.2%]">
          <div className="fixed inset-y-[-100vh] left-[7.2%] w-px lg:bg-gray-200/80 z-50"></div>
          <div className="fixed inset-y-[-100vh] right-[7.2%] w-px lg:bg-gray-200/80 z-50"></div>

          <div className="fixed inset-y-0 left-[28.5%] w-px border-r border-dashed border-neutral-200/40 -z-10"></div>
          <div className="fixed inset-y-0 left-[50%] w-px border-r border-dashed border-neutral-200/40 -z-10"></div>
          <div className="fixed inset-y-0 left-[71.5%] w-px border-r border-dashed border-neutral-200/40 -z-10"></div>

          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
