"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure client-only code runs after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-5xl mx-auto text-center z-10'
      >
        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-6 inline-block'
        >
          <span className='px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium backdrop-blur-sm'>
            🚀 Available for freelance work
          </span>
        </motion.div>

        {/* Profile Image with Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mb-8 inline-block'
        >
          <div className='relative w-32 h-32 mx-auto'>
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75' />
            <Image
              src='/sarwar.jpg'
              alt='Sarwar Hossain'
              width={128}
              height={128}
              className='relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-900'
            />
          </div>
        </motion.div>

        {/* Name */}
        <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600'>
          Sarwar Hossain
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-4'
        >
          Full-Stack Developer & Digital Architect
        </motion.p>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto'
        >
          Crafting exceptional digital experiences with Node.js, React, Next.js
          and modern technologies. Building robust APIs and scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='flex flex-wrap gap-4 justify-center'
        >
          <Link
            href='/projects'
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2'
          >
            View Projects
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/blogs'
            className='px-8 py-4 bg-slate-200/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-300 hover:dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300'
          >
            Read Blog
          </Link>
          <Link
            href='/resume'
            className='px-8 py-4 bg-slate-200/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-300 hover:dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300'
          >
            Generate Resume
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Particles – Only render after mount */}
      {mounted && (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(20)].map((_, i) => {
            const xStart = Math.random() * window.innerWidth;
            const yStart = Math.random() * window.innerHeight;
            const xEnd = Math.random() * window.innerWidth;
            const yEnd = Math.random() * window.innerHeight;
            const duration = Math.random() * 10 + 20;

            return (
              <motion.div
                key={i}
                className='absolute w-2 h-2 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full'
                initial={{ x: xStart, y: yStart }}
                animate={{ x: xEnd, y: yEnd }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
