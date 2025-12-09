import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/Providers/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarwar-hossain-hridoy.vercel.app"),
  title: "Sarwar Hossain | Full-Stack Developer",
  description:
    "Crafting exceptional digital experiences with Node.js, React, Next.js, and modern technologies.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Golang",
    "MongoDB",
    "NestJs",
    "Prisma",
    "Mongoose",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Sarwar Hossain" }],
  openGraph: {
    title: "Sarwar Hossain | Full-Stack Developer",
    description:
      "Crafting exceptional digital experiences with Node.js, React, Next.js, and modern technologies.",
    url: "https://sarwar-hossain-hridoy.vercel.app",
    siteName: "Sarwar Hossain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarwar Hossain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarwar Hossain | Full-Stack Developer",
    description:
      "Crafting exceptional digital experiences with Node.js, React, Next.js, and modern technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className='min-h-screen flex flex-col'>{children}</div>
            <Toaster richColors position='top-right' />
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
