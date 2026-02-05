"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import Link from "next/link";

const ResumeBuilderCTA = () => {
  return (
    <section
      id='resume'
      className='relative py-20 px-4 sm:px-6 lg:px-8'
      aria-labelledby='resume-title'
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative max-w-4xl mx-auto z-10'
      >
        <div className='relative rounded-[32px] border border-slate-200/70 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
          <div className='inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200'>
            <Sparkles className='h-3 w-3' />
            Feature: AI-assisted resume builder
          </div>

          <div className='mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2
                id='resume-title'
                className='text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white'
              >
                Build polished resumes in minutes
              </h2>
              <p className='mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl'>
                A streamlined, ATS-friendly resume generator powered by the
                same secure backend used across the portfolio platform.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20'>
                <FileText className='h-7 w-7' />
              </div>
              <Link
                href='/resume'
                className='inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5'
              >
                Launch Resume Builder
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeBuilderCTA;
