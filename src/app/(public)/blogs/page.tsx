import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Sarwar Hossain",
  description:
    "Explore insightful blogs by Sarwar Hossain on web development, AI, and modern technologies.",
  alternates: {
    canonical: "https://sarwar-hossain-hridoy.vercel.app/blogs",
  },
  openGraph: {
    title: "Blogs | Sarwar Hossain",
    description:
      "Explore insightful blogs by Sarwar Hossain on web development, AI, and modern technologies.",
    url: "https://sarwar-hossain-hridoy.vercel.app/blogs",
    siteName: "Sarwar Hossain Portfolio",
    images: [
      {
        url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarwar Hossain Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Sarwar Hossain",
    description:
      "Explore insightful blogs by Sarwar Hossain on web development, AI, and modern technologies.",
    images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
  },
};

const BlogsPage = () => {
  const dummyBlogs = [
    {
      id: "blog-1",
      title: "Designing API-first platforms that scale",
      excerpt:
        "A practical look at structuring endpoints, shared schemas, and predictable pagination for product teams.",
      tag: "Architecture",
      date: "Jan 12, 2026",
      readTime: "6 min read",
    },
    {
      id: "blog-2",
      title: "Shipping polished UI with performance budgets",
      excerpt:
        "How to keep animations tasteful, bundle size lean, and Core Web Vitals green.",
      tag: "Frontend",
      date: "Dec 18, 2025",
      readTime: "5 min read",
    },
    {
      id: "blog-3",
      title: "A pragmatic guide to auth, roles, and audit trails",
      excerpt:
        "Patterns for NextAuth, role-based access control, and secure logging in modern stacks.",
      tag: "Security",
      date: "Nov 30, 2025",
      readTime: "7 min read",
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
              Journal
            </p>
            <h1 className='mt-3 text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-white'>
              Notes on engineering, product, and growth
            </h1>
          </div>
          <p className='max-w-xl text-base text-slate-600 dark:text-slate-400'>
            Articles, playbooks, and short essays on shipping software that is
            resilient, user-friendly, and ready for scale.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {dummyBlogs.map((blog) => (
            <article
              key={blog.id}
              className='rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/80'
            >
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400'>
                {blog.tag}
              </p>
              <h2 className='mt-4 text-xl font-semibold text-slate-900 dark:text-white'>
                {blog.title}
              </h2>
              <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                {blog.excerpt}
              </p>
              <div className='mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-16 rounded-3xl border border-dashed border-slate-300/80 bg-white/70 p-8 text-center text-sm text-slate-600 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300'>
          More posts are coming soon. This is a placeholder feed until the blog
          CMS is wired to production content.
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
