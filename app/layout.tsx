import type React from "react";
import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tantai.dev"),
  title: "Nguyen Tan Tai | Backend Engineer",
  description:
    "System-ledger portfolio for Nguyen Tan Tai, Software Engineer G1 at Ahamove, focused on Go services, cloud-native infrastructure, and backend product delivery.",
  keywords: [
    "Nguyen Tan Tai",
    "Backend Engineer",
    "Software Engineer",
    "Ahamove",
    "Golang",
    "Go",
    "Cloud Native",
    "Kubernetes",
    "Vietnam",
  ],
  authors: [{ name: "Nguyen Tan Tai" }],
  openGraph: {
    title: "Nguyen Tan Tai | Backend Engineer",
    description:
      "Go services, cloud-native infrastructure, project evidence, and production backend experience.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyen Tan Tai",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
        className={`${inter.variable} ${fraunces.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
