import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sarwar Hossain",
  description:
    "Explore the projects of Sarwar Hossain — showcasing modern web development, AI experiments, and full-stack applications.",
  alternates: {
    canonical: "https://sarwar-hossain-hridoy.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Sarwar Hossain",
    description:
      "Explore the projects of Sarwar Hossain — showcasing modern web development, AI experiments, and full-stack applications.",
    url: "https://sarwar-hossain-hridoy.vercel.app/projects",
    siteName: "Sarwar Hossain Portfolio",
    images: [
      {
        url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarwar Hossain Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sarwar Hossain",
    description:
      "Explore the projects of Sarwar Hossain — showcasing modern web development, AI experiments, and full-stack applications.",
    images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
  },
};

const ProjectsPage = () => {
  const dummyProjects = [
    {
      id: "proj-1",
      title: "Portfolio Platform",
      description:
        "Full-stack portfolio with admin dashboard, content management, and media workflows.",
      stack: ["Next.js", "Node.js", "Prisma"],
      status: "Live",
    },
    {
      id: "proj-2",
      title: "Resume Builder Suite",
      description:
        "AI-assisted resume builder with secure storage, templates, and export flow.",
      stack: ["TypeScript", "PostgreSQL", "Cloudinary"],
      status: "In Progress",
    },
    {
      id: "proj-3",
      title: "Analytics Dashboard",
      description:
        "Modular stats service powering admin insights and usage reporting.",
      stack: ["Express", "Redis", "Prisma"],
      status: "Prototype",
    },
    {
      id: "proj-4",
      title: "Client Onboarding Flow",
      description:
        "Streamlined onboarding experience with role-based access and automation.",
      stack: ["NextAuth", "Zod", "TailwindCSS"],
      status: "Live",
    },
  ];

  return (
    <div className='min-h-screen text-slate-950 dark:text-slate-100 relative overflow-hidden'>
      <div className='absolute inset-0 page-aurora -z-10 dark:hidden' />
      <div className='absolute inset-0 page-aurora-dark -z-10 hidden dark:block' />
      <div className='absolute inset-0 bg-grid opacity-20 -z-10 dark:hidden' />
      <div className='absolute inset-0 bg-grid-dark opacity-10 -z-10 hidden dark:block' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'>
          <div>
            <p className='text-xs uppercase tracking-[0.3em] text-slate-500'>
              Projects
            </p>
            <h1 className='mt-3 text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-white'>
              Product builds and engineering systems
            </h1>
          </div>
          <p className='max-w-xl text-base text-slate-600 dark:text-slate-400'>
            A curated selection of full-stack launches, API-first services, and
            platform tooling. Live data will replace these placeholders once
            the CMS is wired.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {dummyProjects.map((project) => (
            <article
              key={project.id}
              className='rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/80'
            >
              <div className='flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
                <span className='uppercase tracking-[0.2em]'>
                  {project.status}
                </span>
                <span>{project.stack.length} tools</span>
              </div>
              <h2 className='mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>
                {project.title}
              </h2>
              <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                {project.description}
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className='mt-16 rounded-3xl border border-dashed border-slate-300/80 bg-white/70 p-8 text-center text-sm text-slate-600 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300'>
          More case studies are being prepared. This placeholder grid will be
          replaced with live project data soon.
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
