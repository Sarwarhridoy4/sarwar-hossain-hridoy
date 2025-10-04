"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";

const ResumeBuilderCTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      size: number;
      color: string;
      dx: number;
      dy: number;
      rotate: number;
    }[]
  >([]);
  const particleCount = 20;

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate particles **only on client**
  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      size: Math.random() * 3 + 2,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: Math.random() * 50 - 25, // random x offset
      dy: Math.random() * 50 - 25, // random y offset
      rotate: Math.random() * 360,
      color: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"][
        Math.floor(Math.random() * 4)
      ],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id='resume'
      className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'
    >
      {/* Mouse-following radial glow */}
      <div
        className='fixed inset-0 pointer-events-none opacity-30'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* Floating and rotating particles */}
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
            initial={{ x: p.x, y: p.y, rotate: p.rotate }}
            animate={{
              x: [p.x, p.x + p.dx, p.x, p.x - p.dx, p.x],
              y: [p.y, p.y + p.dy, p.y, p.y - p.dy, p.y],
              rotate: [p.rotate, p.rotate + 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative max-w-4xl mx-auto z-10'
      >
        <div className='relative group'>
          <div
            className='absolute -inset-1 rounded-3xl blur-lg transition duration-300
            bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-purple-400/40 
            dark:from-cyan-500/30 dark:via-blue-500/30 dark:to-purple-500/30
            group-hover:opacity-75'
          ></div>

          <div className='relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-lg'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
              <FileText className='w-10 h-10 text-white' />
            </div>

            <h2 className='text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>
              AI-Powered Resume Builder
            </h2>

            <p className='text-gray-700 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto'>
              Create stunning, ATS-friendly resumes in minutes with our
              intelligent resume generator. Store your professional data
              securely with our Prisma-powered backend and generate multiple
              resume versions.
            </p>

            <Link
              href='/resume'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg inline-block'
            >
              Build Your Resume Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeBuilderCTA;
