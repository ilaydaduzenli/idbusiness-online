import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('https://idbusiness.co'),
  title: {
    default: "idbusiness.co | AI Agency",
    template: "%s | idbusiness.co"
  },
  description: "Premium AI Content, Web Design, and Automation Systems. We build intelligent systems for forward-thinking brands.",
  openGraph: {
    title: "idbusiness.co | AI Agency",
    description: "Premium AI Content, Web Design, and Automation Systems.",
    url: 'https://idbusiness.co',
    siteName: 'idbusiness.co',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'idbusiness.co | AI Agency',
    description: 'Premium AI Content, Web Design, and Automation Systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <ThemeProvider defaultTheme="dark" storageKey="idbusiness-theme">
          <Header />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
