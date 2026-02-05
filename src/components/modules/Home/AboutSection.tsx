"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const AboutSection = () => {
  const focusAreas = [
    {
      name: "Product Interfaces",
      items: [
        "Design systems + UI engineering",
        "Accessibility-first components",
        "Animation that respects performance",
      ],
      icon: Sparkles,
    },
    {
      name: "Backend Architecture",
      items: [
        "TypeScript API design",
        "Prisma + PostgreSQL",
        "Auth, roles, and media pipelines",
      ],
      icon: ShieldCheck,
    },
    {
      name: "Delivery + DevOps",
      items: ["CI/CD workflows", "Vercel deployments", "Observability-ready"],
      icon: Workflow,
    },
    {
      name: "Collaboration",
      items: [
        "Clear project documentation",
        "Client-ready handoff",
        "Agile iterations + feedback",
      ],
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id='about'
      className='relative py-20 px-4 sm:px-6 lg:px-8'
      aria-labelledby='about-title'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-6xl mx-auto'
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          id='about-title'
          className='text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 text-slate-900 dark:text-white'
        >
          Partnering with teams to ship resilient software
        </motion.h2>

        <div className='grid lg:grid-cols-[1.1fr_0.9fr] gap-10'>
          {/* Story */}
          <motion.div variants={itemVariants} className='relative group'>
            <div className='relative rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
              <h3 className='text-2xl font-semibold mb-4 flex items-center gap-2 text-slate-900 dark:text-white'>
                <Sparkles className='w-6 h-6 text-amber-500' />
                The craft behind the code
              </h3>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-4'>
                I build end-to-end platforms that feel premium for users and
                predictable for teams. My focus is on clean systems architecture,
                robust API design, and a product experience that stays polished
                from first load to long-term maintenance.
              </p>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                On this portfolio platform I&apos;ve implemented role-based
                authentication, media pipelines, and REST APIs for blogs,
                projects, and resumes—designed to be secure, scalable, and easy
                to extend.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 gap-4'
          >
            {focusAreas.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div key={idx} className='relative group'>
                  <div className='relative rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
                    <div className='flex items-center gap-2 mb-3'>
                      <IconComponent className='w-5 h-5 text-amber-500' />
                      <h4 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                        {category.name}
                      </h4>
                    </div>
                    <ul className='space-y-2'>
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className='text-sm text-slate-700 dark:text-slate-300'
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
