import type { Metadata } from "next";
import PublicResumeList from "@/components/modules/Resume/PublicResumeList";

export const metadata: Metadata = {
  title: "Resumes | Sarwar Hossain",
  description:
    "View and download resumes of Sarwar Hossain — full-stack developer, web designer, and AI enthusiast.",
  alternates: {
    canonical: "https://sarwar-hossain-hridoy.vercel.app/resume",
  },
  openGraph: {
    title: "Resumes | Sarwar Hossain",
    description:
      "View and download resumes of Sarwar Hossain — full-stack developer, web designer, and AI enthusiast.",
    url: "https://sarwar-hossain-hridoy.vercel.app/resume",
    siteName: "Sarwar Hossain Portfolio",
    images: [
      {
        url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarwar Hossain Resumes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resumes | Sarwar Hossain",
    description:
      "View and download resumes of Sarwar Hossain — full-stack developer, web designer, and AI enthusiast.",
    images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
  },
};

const ResumesPage = () => {
  return <PublicResumeList />;
};

export default ResumesPage;
