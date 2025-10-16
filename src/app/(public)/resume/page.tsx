import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resumes | Sarwar Hossain",
  description:
    "View and download resumes of Sarwar Hossain — full-stack developer, web designer, and AI enthusiast.",
};

const ResumesPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200'>
      <h1 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600'>
        Resumes
      </h1>
      <p className='text-lg text-center text-gray-600 dark:text-gray-400'>
        Browse and download my latest resumes for professional opportunities.
      </p>
    </div>
  );
};

export default ResumesPage;
