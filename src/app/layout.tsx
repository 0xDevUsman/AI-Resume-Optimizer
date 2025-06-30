import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import { Providers } from "@/components/custom/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CVNinja - Your AI-Powered Resume Builder",
  description: "Your app description",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1", // Prevent mobile zooming
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-x-hidden`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 w-full overflow-hidden">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
