import HomePage from "@/components/modules/Home";
import React from "react";

const Home = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sarwar Hossain Portfolio",
      url: "https://sarwar-hossain-hridoy.vercel.app",
      description:
        "Portfolio of Sarwar Hossain, full-stack developer specializing in API engineering and modern web experiences.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sarwar Hossain",
      url: "https://sarwar-hossain-hridoy.vercel.app",
      jobTitle: "Full-Stack Developer",
      image: "https://sarwar-hossain-hridoy.vercel.app/sarwar.jpg",
      knowsAbout: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <>
      <HomePage />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Home;
