"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, FileText, Users } from "lucide-react";

const Stats = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      size: number;
      color: string;
      dx: number;
      dy: number;
    }[]
  >([]);

  const particleCount = 20;
  const cardGradient = "from-cyan-500 via-blue-500 to-purple-500";

  useEffect(() => {
    // Track mouse
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    // Generate particle positions once on client
    const generatedParticles = Array.from({ length: particleCount }).map(
      () => ({
        size: Math.random() * 3 + 2,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: Math.random() * 50 - 25,
        dy: Math.random() * 50 - 25,
        color: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"][
          Math.floor(Math.random() * 4)
        ],
      })
    );
    setParticles(generatedParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const stats = {
    totalUsers: 6,
    totalBlogs: 4,
    totalResumes: 10,
  };

  return (
    <section
      id='admin'
      className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'
    >
      {/* Mouse-following radial glow */}
      <div
        className='fixed inset-0 pointer-events-none opacity-30'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* Floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full'
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.25,
            }}
            initial={{ x: p.x, y: p.y }}
            animate={{
              x: [p.x, p.x + p.dx, p.x, p.x - p.dx, p.x],
              y: [p.y, p.y + p.dy, p.y, p.y - p.dy, p.y],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='relative max-w-6xl mx-auto z-10'
      >
        <motion.h2
          variants={itemVariants}
          className='text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'
        >
          Admin Dashboard
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {[
            { icon: Users, value: stats.totalUsers, label: "Total Users" },
            { icon: FileText, value: stats.totalBlogs, label: "Blog Posts" },
            {
              icon: Award,
              value: stats.totalResumes,
              label: "Resumes Generated",
            },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className='relative group'
              >
                {/* Gradient glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${cardGradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}
                />
                {/* Card */}
                <div className='relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <IconComponent className='w-8 h-8 text-cyan-400' />
                    <span
                      className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${cardGradient}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <h3 className='text-gray-700 dark:text-slate-300 font-semibold'>
                    {stat.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className='text-center mt-8'>
          <a
            href='/admin'
            className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-block text-white'
          >
            Go to Dashboard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
