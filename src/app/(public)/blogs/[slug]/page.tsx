import type { Metadata } from "next";

// ✅ Corrected: Await `params` before destructuring
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params; // ✅ Fix here

  return {
    title: `${slug.replace(/-/g, " ")} | Blog | Sarwar Hossain`,
    description: `Read the detailed blog post on ${slug.replace(
      /-/g,
      " "
    )} by Sarwar Hossain.`,
  };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-lg font-medium'>
        Params received: <span className='font-bold text-blue-600'>{slug}</span>
      </p>
    </div>
  );
};

export default BlogDetailPage;
