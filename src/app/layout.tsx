/**
 * Root layout of the application.
 *
 * Responsibilities:
 * - Define the global structure of the application
 * - Persistent elements such as Header and Footer are located here
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charlesson | Frontend Developer",
  description:
    "Portfólio de desenvolvimento frontend com foco em performance, UX e aplicações modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        {/* Header here */}

        <main className="flex-1">{children}</main>

        {/* Footer here */}
      </body>
    </html>
  );
}
