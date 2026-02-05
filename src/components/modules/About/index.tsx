import {
  Code2,
  Rocket,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Calendar,
  Building2,
  Sparkles,
} from "lucide-react";

// Server Component (SSR/SSG)
export default function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "React Native",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Prisma",
        "psql",
        "Firebase",
        "RESTful APIs",
        "JWT",
      ],
    },
    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Python",
        "PyQt6",
        "Chrome DevTools",
        "VPS Deployment",
      ],
    },
  ];

  const experience = [
    {
      company: "German Ostad",
      role: "Full Stack Developer & Maintainer",
      period: "Aug 2024 - Present",
      location: "Saarbrücken, Germany",
      description:
        "Leading development on LMS platform using TypeScript, MongoDB, Mongoose, and Next.js with production-grade optimization and VPS deployment.",
      highlights: [
        "Built scalable LMS with student/admin dashboards",
        "Implemented JWT authentication & authorization",
        "Deployed on Hostinger VPS with schema optimization",
        "TypeScript & Next.js architecture",
      ],
    },
    {
      company: "Bright Future Soft",
      role: "Full Stack Developer",
      period: "Aug 2025 - Sep 2025",
      location: "Mirpur, Dhaka",
      description:
        "Developed full-stack web solutions with modern JavaScript technologies.",
    },
    {
      company: "3W Private Limited",
      role: "Full Stack Developer",
      period: "Aug 2023 - Aug 2024",
      location: "Greater Noida, India",
      description:
        "Built complete business solutions and education platforms with MERN stack.",
      highlights: [
        "Business oriented platform with secure components",
        "React, React-Native Firebase, MongoDB & Express integration",
        "Responsive UI with reusable components",
      ],
    },
    {
      company: "Geeks of Gurukul",
      role: "Full Stack Developer",
      period: "Apr 2023 - Jun 2023",
      location: "Bangalore, India",
      description:
        "Developed full-stack web applications with focus on clean code and modern UX.",
    },
  ];

  const achievements = [
    {
      icon: Briefcase,
      title: "Experience",
      value: "3+",
      description: "Years of professional development",
    },
    {
      icon: Code2,
      title: "Projects",
      value: "15+",
      description: "Successfully delivered",
    },
    {
      icon: Users,
      title: "Open Source",
      value: "Active",
      description: "Contributor to Thrivext",
    },
    {
      icon: Award,
      title: "Certified",
      value: "AI",
      description: "Generative AI Mastermind",
    },
  ];

  const featuredProjects = [
    {
      name: "LMS Platform",
      tech: "MERN | TypeScript | Next.js | JWT | Tailwind",
      description:
        "Full LMS with student/admin dashboards, authentication, and VPS deployment with schema optimization.",
    },
    {
      name: "Ed-Tech Homepage",
      tech: "Next.js | Tailwind CSS",
      description:
        "SEO-optimized, modular, responsive education technology homepage.",
    },
    {
      name: "Video Course Platform",
      tech: "React | Firebase | MongoDB | Express",
      description:
        "Secure video course platform with reusable components and modern architecture.",
    },
    {
      name: "Thrivext Documentation",
      tech: "MERN | MDX | MermaidJS",
      description:
        "Documentation site contribution with diagram support and code reviews.",
    },
    {
      name: "LAN File Sharing",
      tech: "Python | PyQt6 | Sockets | Multithreading",
      description:
        "Fast P2P file sharing with device discovery, sleek UI, and retry logic.",
    },
    {
      name: "MongoDB Exporter",
      tech: "Python | PyQt6 | MongoDB",
      description:
        "Cross-platform GUI for exporting MongoDB collections to JSON with progress tracking.",
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sarwar Hossain",
            jobTitle: "Full Stack MERN Developer",
            description:
              "Full Stack MERN Developer with 3+ years of experience in React.js, Next.js, React Native, TypeScript, and Python",
            url: "https://sarwars-portfolio.netlify.app",
            email: "sarwarhridoy4@gmail.com",
            telephone: "+8801932893580",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dhaka",
              addressCountry: "Bangladesh",
            },
            sameAs: [
              "https://github.com/sarwarhridoy4",
              "https://www.linkedin.com/in/sarwar-hridoy4/",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "S M Toffazzol Hossain Polytechnic Institute",
            },
            knowsAbout: [
              "React.js",
              "Next.js",
              "TypeScript",
              "MERN Stack",
              "React Native",
              "Python",
              "MongoDB",
              "Node.js",
              "Web Development",
              "Mobile Development",
            ],
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "certificate",
              name: "Generative AI Mastermind",
              recognizedBy: {
                "@type": "Organization",
                name: "Outskill",
              },
            },
          }),
        }}
      />

      <section className='min-h-screen py-20 text-slate-950 dark:text-slate-100 relative overflow-hidden'>
        <div className='absolute inset-0 page-aurora -z-10 dark:hidden' />
        <div className='absolute inset-0 page-aurora-dark -z-10 hidden dark:block' />
        <div className='absolute inset-0 bg-grid opacity-20 -z-10 dark:hidden' />
        <div className='absolute inset-0 bg-grid-dark opacity-10 -z-10 hidden dark:block' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white'>
              Sarwar Hossain
            </h1>
            <p className='text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-200 mb-4'>
              Full Stack MERN Developer
            </p>
            <div className='flex flex-wrap justify-center items-center gap-4 text-slate-600 dark:text-slate-400'>
              <span className='flex items-center gap-2'>
                <MapPin className='w-5 h-5' />
                Dhaka, Bangladesh
              </span>
              <span className='flex items-center gap-2'>
                <Phone className='w-5 h-5' />
                +880 1932 893580
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className='grid lg:grid-cols-3 gap-8 mb-16'>
            {/* Introduction Card */}
            <div className='lg:col-span-2 rounded-2xl shadow-2xl p-8 sm:p-10 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                  <Rocket className='w-8 h-8 text-blue-600 dark:text-cyan-400' />
                </div>
                <div>
                  <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
                    About Me
                  </h2>
                  <p className='text-lg text-blue-600 dark:text-cyan-400 font-semibold'>
                    Passionate Developer & Fast Learner
                  </p>
                </div>
              </div>

              <div className='space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed'>
                <p className='text-lg'>
                  I&apos;m a passionate{" "}
                  <strong className='text-blue-600 dark:text-cyan-400'>
                    MERN Stack Developer
                  </strong>{" "}
                  with a <strong>Diploma in Computer Engineering</strong> from S
                  M Toffazzol Hossain Polytechnic Institute (2017-2022). I
                  specialize in building{" "}
                  <strong>
                    full-featured, scalable, and user-centric web applications
                  </strong>{" "}
                  using modern JavaScript technologies.
                </p>
                <p>
                  I have completed{" "}
                  <strong>
                    Level 1 of the Programming Hero Web Development Course
                  </strong>{" "}
                  and am currently pursuing Level 2, strengthening my advanced
                  development skills. Professionally, I work as a{" "}
                  <strong className='text-blue-600 dark:text-cyan-400'>
                    Full Stack Developer and Maintainer at German Ostad
                  </strong>
                  , where I lead development on an LMS platform using{" "}
                  <strong>TypeScript, MongoDB, Mongoose, and Next.js</strong>,
                  deployed on VPS with production-grade optimization.
                </p>
                <p>
                  My expertise spans <strong>front-end development</strong> with
                  React.js, Next.js, Redux, and Tailwind CSS,{" "}
                  <strong>back-end architecture</strong> with Node.js,
                  Express.js, and MongoDB, and{" "}
                  <strong>mobile development</strong> with React Native.
                  I&apos;m proficient in <strong>Python</strong> for building
                  desktop applications with PyQt6, automation scripts, and
                  system tools.
                </p>
                <p>
                  I&apos;ve contributed to <strong>open-source projects</strong>{" "}
                  such as Thrivext, improving interactive documentation for MERN
                  stack learning. I&apos;m a{" "}
                  <strong>fast learner, team player</strong>, and passionate
                  about clean code and modern UX. I thrive in innovative,
                  collaborative teams that push boundaries and deliver
                  real-world impact.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-wrap gap-4 mt-8'>
                <a
                  href='https://github.com/sarwarhridoy4'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/85 dark:text-slate-900 dark:hover:bg-slate-100 shadow-lg transform hover:scale-105'
                >
                  <Github className='w-5 h-5' />
                  GitHub
                  <ExternalLink className='w-4 h-4' />
                </a>
                <a
                  href='https://www.linkedin.com/in/sarwar-hridoy4/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg transform hover:scale-105'
                >
                  <Linkedin className='w-5 h-5' />
                  LinkedIn
                  <ExternalLink className='w-4 h-4' />
                </a>
                <a
                  href='mailto:sarwarhridoy4@gmail.com'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white hover:from-cyan-600 hover:via-blue-700 hover:to-purple-800 shadow-lg transform hover:scale-105'
                >
                  <Mail className='w-5 h-5' />
                  Email Me
                </a>
                <a
                  href='https://drive.google.com/file/d/1A3Go9SF16olXwTZusTeGi4wWDyy6kYGk/view?usp=share_link'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all border-2 border-slate-300/80 dark:border-slate-600/60 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-cyan-500 hover:text-blue-600 dark:hover:text-cyan-400 shadow-lg transform hover:scale-105'
                >
                  <Download className='w-5 h-5' />
                  Resume
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className='space-y-4'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className='rounded-2xl shadow-xl p-6 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10 hover:scale-105 transition-transform'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                      <achievement.icon className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-slate-900 dark:text-white'>
                        {achievement.value}
                      </div>
                      <div className='text-sm font-semibold text-slate-600 dark:text-slate-400'>
                        {achievement.title}
                      </div>
                      <div className='text-xs text-slate-500 dark:text-slate-500'>
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className='mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white'>
              Professional Experience
            </h2>
            <div className='space-y-6'>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10 hover:scale-[1.02] transition-transform'
                >
                  <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                    <div>
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3'>
                        <Building2 className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                        {exp.company}
                      </h3>
                      <p className='text-lg font-semibold text-blue-600 dark:text-cyan-400 mt-1'>
                        {exp.role}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium'>
                        <Calendar className='w-4 h-4' />
                        {exp.period}
                      </p>
                      <p className='flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm mt-1'>
                        <MapPin className='w-4 h-4' />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className='text-slate-700 dark:text-slate-300 mb-4'>
                    {exp.description}
                  </p>
                  {exp.highlights && (
                    <ul className='space-y-2'>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className='flex items-start gap-2 text-slate-600 dark:text-slate-400'
                        >
                          <Sparkles className='w-4 h-4 text-blue-600 dark:text-cyan-400 mt-1 flex-shrink-0' />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className='mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white'>
              Featured Projects
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className='rounded-2xl shadow-xl p-6 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10 hover:scale-105 transition-transform'
                >
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                    {project.name}
                  </h3>
                  <p className='text-sm font-mono text-blue-600 dark:text-cyan-400 mb-3'>
                    {project.tech}
                  </p>
                  <p className='text-slate-600 dark:text-slate-400 text-sm'>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className='mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white'>
              Technical Skills
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'
                >
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                      <Code2 className='w-5 h-5 text-blue-600 dark:text-cyan-400' />
                    </div>
                    {skillSet.category}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {skillSet.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 text-blue-700 border border-blue-200 dark:from-cyan-500/10 dark:to-blue-500/10 dark:text-cyan-400 dark:border-cyan-500/30'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white'>
              Education & Certifications
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Diploma */}
              <div className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                    <GraduationCap className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Diploma in Engineering
                    </h3>
                    <p className='text-blue-600 dark:text-cyan-400 font-semibold'>
                      Computer Science
                    </p>
                  </div>
                </div>
                <p className='text-slate-700 dark:text-slate-300 mb-2'>
                  S M Toffazzol Hossain Polytechnic Institute
                </p>
                <p className='text-slate-500 dark:text-slate-500 text-sm'>
                  2017 - 2022
                </p>
              </div>

              {/* Generative AI */}
              <div className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                    <Award className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Generative AI Mastermind
                    </h3>
                    <p className='text-blue-600 dark:text-cyan-400 font-semibold'>
                      Certification
                    </p>
                  </div>
                </div>
                <p className='text-slate-700 dark:text-slate-300 mb-2'>
                  By Outskill
                </p>
                <p className='text-slate-500 dark:text-slate-500 text-sm'>
                  Advanced AI & Machine Learning
                </p>
              </div>

              {/* Complete Web Development with Programming Hero L1 */}
              <div className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                    <Award className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Complete Web Development with Programming Hero L1
                    </h3>
                    <p className='text-blue-600 dark:text-cyan-400 font-semibold'>
                      Certification
                    </p>
                  </div>
                </div>
                <p className='text-slate-700 dark:text-slate-300 mb-2'>
                  By Programming Hero
                </p>
                <p className='text-slate-500 dark:text-slate-500 text-sm'>2023</p>
              </div>

              {/* Complete Web Development Course With Jhankar Mahbub */}
              <div className='rounded-2xl shadow-xl p-8 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20 flex items-center justify-center'>
                    <Award className='w-6 h-6 text-blue-600 dark:text-cyan-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Next Level Web Development by Programming Hero
                    </h3>
                    <p className='text-blue-600 dark:text-cyan-400 font-semibold'>
                      Certification
                    </p>
                  </div>
                </div>
                <p className='text-slate-700 dark:text-slate-300 mb-2'>
                  By Next Level Team Programming Hero
                </p>
                <p className='text-slate-500 dark:text-slate-500 text-sm'>
                  Ongoing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
