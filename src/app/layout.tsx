import type { Metadata } from "next";
import { Geist, Geist_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engineering Lead - Shorts Connoisseur",
  description:
    "Join me in a quest to rid the world of pants. And make software along the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stixTwoText.variable} ${geistSans.variable} ${geistMono.variable} mx-auto flex min-h-screen max-w-[1200px] flex-col justify-between gap-6 bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] px-4 antialiased dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      >
        {children}
      </body>
    </html>
  );
}
