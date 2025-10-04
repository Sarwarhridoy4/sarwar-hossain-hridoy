import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      icon: Code2,
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "Prisma", "PostgreSQL"],
      icon: Zap,
    },
    {
      name: "DevOps",
      items: ["Docker", "Vercel", "CI/CD", "Git"],
      icon: Award,
    },
    {
      name: "Tools",
      items: ["NextAuth", "Cloudinary", "Multer", "REST API"],
      icon: Sparkles,
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
    <section id='about' className='relative py-20 px-4 sm:px-6 lg:px-8'>
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
          className='text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500'
        >
          About Me
        </motion.h2>

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Story Card */}
          <motion.div variants={itemVariants} className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300' />
            <div className='relative bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white'>
                <Sparkles className='w-6 h-6 text-cyan-500' />
                My Story
              </h3>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-4'>
                I&apos;m a passionate full-stack developer specializing in
                building robust backend APIs and modern web applications. With
                expertise in Node.js, Express, Prisma, and Next.js, I create
                scalable solutions that solve real-world problems.
              </p>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                My portfolio backend features NextAuth authentication,
                role-based access control, Cloudinary file uploads, and
                comprehensive RESTful APIs for managing blogs, projects, and
                resumes. I love building systems that are both powerful and easy
                to use.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 gap-4'
          >
            {skills.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div key={idx} className='relative group'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300' />
                  <div className='relative bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl p-6'>
                    <div className='flex items-center gap-2 mb-3'>
                      <IconComponent className='w-5 h-5 text-cyan-500' />
                      <h4 className='text-lg font-bold text-slate-800 dark:text-cyan-400'>
                        {category.name}
                      </h4>
                    </div>
                    <ul className='space-y-2'>
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className='text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2'
                        >
                          <div className='w-1.5 h-1.5 rounded-full bg-cyan-500' />
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
