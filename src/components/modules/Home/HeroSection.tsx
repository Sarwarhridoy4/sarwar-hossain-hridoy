"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className='relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8'
      aria-labelledby='hero-title'
    >
      <div className='max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200'>
            <Sparkles className='h-4 w-4 text-amber-500' />
            Available for select freelance and remote roles
          </div>

          <h1
            id='hero-title'
            className='mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 dark:text-white'
          >
            Sarwar Hossain
          </h1>
          <p className='mt-4 text-xl sm:text-2xl text-slate-700 dark:text-slate-300'>
            Full-stack developer crafting resilient backends and premium
            frontends for modern products.
          </p>
          <p className='mt-4 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400'>
            I design API-first systems with TypeScript, Node.js, Prisma, and
            Next.js—balancing performance, security, and delightful UX.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <Link
              href='/projects'
              className='group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-slate-900/30'
            >
              View Projects
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100'
            >
              Start a Project
            </Link>
            <Link
              href='/resume'
              className='inline-flex items-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            >
              Download Resume
            </Link>
          </div>

          <div className='mt-10 grid grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-400'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>
                Core Focus
              </p>
              <p className='mt-2 font-medium text-slate-800 dark:text-slate-100'>
                API engineering, UX-driven interfaces, product reliability
              </p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>
                Tech Stack
              </p>
              <p className='mt-2 font-medium text-slate-800 dark:text-slate-100'>
                TypeScript, Next.js, Express, Prisma, PostgreSQL
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='relative'
        >
          <div className='absolute -inset-6 rounded-4xl bg-linear-to-br from-amber-200/50 via-emerald-200/30 to-blue-200/40 blur-2xl dark:from-amber-500/8 dark:via-emerald-400/8 dark:to-blue-500/8' />
          <div className='relative rounded-4xl border border-slate-200/70 bg-white/85 p-6 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
            <div className='flex items-center gap-4'>
              <div className='relative h-20 w-20'>
                <Image
                  src='/sarwar.jpg'
                  alt='Portrait of Sarwar Hossain'
                  width={80}
                  height={80}
                  className='h-20 w-20 rounded-2xl object-cover'
                  priority
                />
              </div>
              <div>
                <p className='text-sm text-slate-500'>Based in</p>
                <p className='text-lg font-semibold text-slate-900 dark:text-white'>
                  Dhaka, Bangladesh
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Working globally · UTC+6
                </p>
              </div>
            </div>

            <div className='mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 text-sm text-slate-700 dark:border-slate-700/60 dark:bg-slate-950/60 dark:text-slate-300'>
              <p className='font-medium text-slate-900 dark:text-white'>
                Recent highlight
              </p>
              <p className='mt-2'>
                Built a portfolio platform with role-based access, file
                management, and analytics-ready APIs.
              </p>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-3 text-sm'>
              {[
                "Design systems",
                "Backend scaling",
                "SEO + Core Web Vitals",
                "Ship-ready docs",
              ].map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
