"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import { formatDate } from "@/helpers/formatDate";
import { useGetProjectsQuery } from "@/lib/services/portfolioApi";

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

const ProjectSection = () => {
  const { data: projects, isLoading } = useGetProjectsQuery({
    featured: true,
    published: true,
    limit: 3,
  });

  const featuredProjects = projects ?? [];

  return (
    <section
      id='projects'
      className='relative py-20 px-4 sm:px-6 lg:px-8'
      aria-labelledby='projects-title'
    >
      {/* Projects content */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-6xl mx-auto relative z-10'
      >
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10'>
          <motion.h2
            variants={itemVariants}
            id='projects-title'
            className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white'
          >
            Selected work built for real-world impact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-base text-slate-600 dark:text-slate-400 max-w-xl'
          >
            A snapshot of product-focused builds, API-heavy platforms, and
            workflow tools—crafted to scale and perform.
          </motion.p>
        </div>

        {isLoading ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='h-72 rounded-3xl border border-slate-200/60 bg-white/70 shadow-sm animate-pulse dark:border-slate-700/60 dark:bg-slate-900/70'
              />
            ))}
          </div>
        ) : featuredProjects.length > 0 ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredProjects.map((project) => {
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className='group relative'
                >
                  <div className='relative bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/70 dark:border-slate-700/60 rounded-3xl overflow-hidden h-full flex flex-col shadow-sm transition-shadow duration-300 group-hover:shadow-lg'>
                    {project.images && project.images.length > 0 && (
                      <div className='relative h-48 overflow-hidden'>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={600}
                          height={400}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent' />
                      </div>
                    )}

                    <div className='p-6 flex flex-col flex-grow'>
                      <div className='flex items-center justify-between gap-4'>
                        <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                        {project.title}
                        </h3>
                        <span className='inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400'>
                          <Sparkles className='h-3 w-3' />
                          Featured
                        </span>
                      </div>
                      <p className='text-gray-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className='px-3 py-1 bg-slate-100/80 dark:bg-slate-800/60 rounded-full text-xs text-slate-700 dark:text-slate-300'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center text-xs text-gray-500 dark:text-slate-500'>
                        <Calendar className='w-3 h-3 mr-1' />
                        {formatDate(project.createdAt)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className='text-center text-gray-500 dark:text-slate-400'
          >
            <p className='text-lg'>Projects are in the workshop.</p>
            <p className='mt-2 text-sm'>
              Fresh case studies are being prepared—check back soon.
            </p>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className='text-left mt-12'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100'
          >
            View All Projects
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
