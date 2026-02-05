"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  CloudUpload,
  LockKeyhole,
  ServerCog,
} from "lucide-react";

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const capabilities = [
    {
      icon: LockKeyhole,
      title: "Role-based authentication",
      description:
        "NextAuth powered sign-in with admin-level guards and secure sessions.",
    },
    {
      icon: CloudUpload,
      title: "Media + resume pipeline",
      description:
        "Cloudinary file management with structured resume generation flows.",
    },
    {
      icon: ServerCog,
      title: "API-first architecture",
      description:
        "Typed REST endpoints for blogs, projects, stats, and user management.",
    },
    {
      icon: BarChart3,
      title: "Analytics-ready",
      description:
        "Modular stats services ready for dashboards and growth reporting.",
    },
  ];

  return (
    <section
      id='capabilities'
      className='relative py-20 px-4 sm:px-6 lg:px-8'
      aria-labelledby='capabilities-title'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='relative max-w-6xl mx-auto z-10'
      >
        <motion.h2
          variants={itemVariants}
          id='capabilities-title'
          className='text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 text-slate-900 dark:text-white'
        >
          Platform capabilities built into the stack
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {capabilities.map((capability, idx) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className='relative rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition-shadow duration-300 dark:border-slate-700/60 dark:bg-slate-900/80'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20'>
                    <IconComponent className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                      {capability.title}
                    </h3>
                    <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className='text-left mt-8'>
          <a
            href='/admin'
            className='inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100'
          >
            Explore the Admin Dashboard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
