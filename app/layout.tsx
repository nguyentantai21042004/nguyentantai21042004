import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nguyễn Tấn Tài | Software Engineer",
  description:
    "Software Engineer specializing in Golang microservices, Cloud-Native Engineering, Kubernetes, and distributed systems. Based in Ho Chi Minh City, Vietnam.",
  keywords: ["Software Engineer", "Golang", "Backend Developer", "Cloud-Native", "Kubernetes", "DevOps", "Vietnam"],
  authors: [{ name: "Nguyễn Tấn Tài" }],
  openGraph: {
    title: "Nguyễn Tấn Tài | Software Engineer",
    description: "Software Engineer specializing in Golang microservices and Cloud-Native Engineering",
    type: "website",
    locale: "vi_VN",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
