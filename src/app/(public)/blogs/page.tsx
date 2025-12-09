import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Sarwar Hossain",
  description:
    "Explore insightful blogs by Sarwar Hossain on web development, AI, and modern technologies.",
};

const BlogsPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center text-gray-800 dark:text-gray-200'>
      <h1 className='text-3xl font-bold'>Blogs</h1>
    </div>
  );
};

export default BlogsPage;
