import type { Metadata } from "next";
import { Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "@/Providers/redux";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
  creator: "Sarwar Hossain",
  publisher: "Sarwar Hossain",
  applicationName: "Sarwar Hossain Portfolio",
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white'
        >
          Skip to content
        </a>
        <ReduxProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          <main id='main-content' className='min-h-screen flex flex-col'>
            {children}
          </main>
          <a
            href='https://wa.me/8801932893580'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            className='fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2'
          >
            <span className='text-lg font-semibold'>WA</span>
          </a>
          <Toaster richColors position='top-right' />
          <Footer />
        </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
