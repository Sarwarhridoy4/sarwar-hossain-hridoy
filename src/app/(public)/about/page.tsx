import About from "@/components/modules/About";
import type { Metadata } from "next";

// SEO Metadata (Static Generation)
export const metadata: Metadata = {
  title: "About Sarwar Hossain | Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer with 3+ years of experience specializing in React.js, Next.js, React Native, TypeScript, and Python. Currently working at German Ostad building scalable LMS platforms.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "React Native",
    "Python Developer",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Web Development",
    "Mobile Development",
    "Sarwar Hossain",
    "German Ostad",
  ],
  authors: [{ name: "Sarwar Hossain" }],
  openGraph: {
    title: "About Sarwar Hossain | Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer specializing in scalable web & mobile applications with 3+ years of professional experience.",
    type: "profile",
    locale: "en_US",
    siteName: "Sarwar Hossain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sarwar Hossain | Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer specializing in scalable web & mobile applications with 3+ years of professional experience.",
  },
  alternates: {
    canonical: "https://sarwar-hossain-hridoy.vercel.app/about",
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
