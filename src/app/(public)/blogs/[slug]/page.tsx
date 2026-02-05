import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ");
  return {
    title: `${title} | Blog | Sarwar Hossain`,
    description: `Read the detailed blog post on ${title} by Sarwar Hossain.`,
    alternates: {
      canonical: `https://sarwar-hossain-hridoy.vercel.app/blogs/${params.slug}`,
    },
    openGraph: {
      title: `${title} | Blog | Sarwar Hossain`,
      description: `Read the detailed blog post on ${title} by Sarwar Hossain.`,
      url: `https://sarwar-hossain-hridoy.vercel.app/blogs/${params.slug}`,
      siteName: "Sarwar Hossain Portfolio",
      images: [
        {
          url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sarwar Hossain Blog",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Blog | Sarwar Hossain`,
      description: `Read the detailed blog post on ${title} by Sarwar Hossain.`,
      images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
    },
  };
}

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-lg font-medium'>
        Params received: <span className='font-bold text-blue-600'>{slug}</span>
      </p>
    </div>
  );
};

export default BlogDetailPage;
