"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SafeProject } from "@/interfaces";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { formatDate } from "@/helpers/formatDate";

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
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects: SafeProject[] = [];
  const featuredProjects = projects.slice(0, 3);
  const particleCount = 20;

  // Mark as mounted (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track mouse position (client-only)
  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  return (
    <section
      id='projects'
      className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'
    >
      {/* Client-only dynamic effects */}
      {mounted && (
        <>
          {/* Mouse-following radial glow */}
          <div
            className='fixed inset-0 pointer-events-none opacity-20'
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 132, 252, 0.15), transparent 40%)`,
            }}
          />

          {/* Floating particles */}
          <div className='absolute inset-0 pointer-events-none'>
            {[...Array(particleCount)].map((_, i) => {
              const size = Math.random() * 4 + 2; // 2-6px
              const duration = Math.random() * 15 + 10; // 10-25s
              const xStart = Math.random() * window.innerWidth;
              const yStart = Math.random() * window.innerHeight;
              const rotateStart = Math.random() * 360;
              const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#f97316"];
              const color = colors[i % colors.length];

              return (
                <motion.div
                  key={i}
                  className='absolute rounded-full'
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: color,
                    opacity: 0.25,
                  }}
                  initial={{
                    x: xStart,
                    y: yStart,
                    rotate: rotateStart,
                    scale: 1,
                  }}
                  animate={{
                    x: [xStart, Math.random() * window.innerWidth],
                    y: [yStart, Math.random() * window.innerHeight],
                    rotate: [rotateStart, rotateStart + 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}
          </div>
        </>
      )}

      {/* Projects content */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-6xl mx-auto relative z-10'
      >
        <motion.h2
          variants={itemVariants}
          className='text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500'
        >
          Featured Projects
        </motion.h2>

        {featuredProjects.length > 0 ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredProjects.map((project, idx) => {
              const gradients = [
                "from-cyan-500 to-blue-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-red-500",
              ];
              const gradient = gradients[idx % gradients.length];

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className='group relative'
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
                  />
                  <div className='relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden h-full flex flex-col'>
                    {project.images && project.images.length > 0 && (
                      <div className='relative h-48 overflow-hidden'>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={600}
                          height={400}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20`}
                        />
                      </div>
                    )}

                    <div className='p-6 flex flex-col flex-grow'>
                      <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                        {project.title}
                      </h3>
                      <p className='text-gray-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className='px-3 py-1 bg-gray-100 dark:bg-slate-800/50 rounded-full text-xs text-gray-700 dark:text-slate-300'
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
            <p className='text-lg'>
              No projects available yet. Check back soon!
            </p>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className='text-center mt-12'>
          <Link
            href='/projects'
            className='px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-block'
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
