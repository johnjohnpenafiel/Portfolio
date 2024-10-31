import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
        <div className="fixed inset-y-[-100vh] left-[7.2%] w-px bg-gray-200/80 z-50"></div>
        <div className="fixed inset-y-[-100vh] right-[7.2%] w-px bg-gray-200/80 z-50"></div>

        <div className="fixed inset-y-0 left-[50%] w-px border-r border-dashed border-gray-300 -z-10"></div>
        <div className="fixed inset-y-0 left-[28.5%] w-px border-r border-dashed border-gray-300 -z-10"></div>
        <div className="fixed inset-y-0 left-[71.5%] w-px border-r border-dashed border-gray-300 -z-10"></div>

        {children}
      </body>
    </html>
  );
}
