import Contact from "@/components/modules/contact";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sarwar Hossain",
  description:
    "Get in touch with Sarwar Hossain for collaboration, freelance work, or general inquiries.",
  keywords: [
    "Contact",
    "Sarwar Hossain",
    "Portfolio",
    "Web Developer",
    "Next.js",
  ],
  openGraph: {
    title: "Contact | Sarwar Hossain",
    description:
      "Let’s connect! Reach out to Sarwar Hossain for any web development opportunities.",
    url: "https://sarwar-hossain-hridoy.vercel.app/contact",
    siteName: "Sarwar Hossain Portfolio",
    images: [
      {
        url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Sarwar Hossain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://sarwar-hossain-hridoy.vercel.app/contact",
  },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
