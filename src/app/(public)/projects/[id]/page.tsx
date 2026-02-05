import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Project ${params.id} | Sarwar Hossain`,
    description: `Details of project ${params.id} by Sarwar Hossain.`,
    alternates: {
      canonical: `https://sarwar-hossain-hridoy.vercel.app/projects/${params.id}`,
    },
    openGraph: {
      title: `Project ${params.id} | Sarwar Hossain`,
      description: `Details of project ${params.id} by Sarwar Hossain.`,
      url: `https://sarwar-hossain-hridoy.vercel.app/projects/${params.id}`,
      siteName: "Sarwar Hossain Portfolio",
      images: [
        {
          url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sarwar Hossain Project",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Project ${params.id} | Sarwar Hossain`,
      description: `Details of project ${params.id} by Sarwar Hossain.`,
      images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
    },
  };
}

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // 🧩 Later: Fetch project details by ID
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`);
  // const project = await res.json();

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-lg font-medium'>
        Params received: <span className='font-bold text-blue-600'>{id}</span>
      </p>
    </div>
  );
};

export default ProjectDetailPage;
