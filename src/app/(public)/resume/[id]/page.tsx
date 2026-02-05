import type { Metadata } from "next";
import PublicResumeDetail from "@/components/modules/Resume/PublicResumeDetail";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Resume ${params.id} | Sarwar Hossain`,
    description: `View details of resume ${params.id} by Sarwar Hossain.`,
    alternates: {
      canonical: `https://sarwar-hossain-hridoy.vercel.app/resume/${params.id}`,
    },
    openGraph: {
      title: `Resume ${params.id} | Sarwar Hossain`,
      description: `View details of resume ${params.id} by Sarwar Hossain.`,
      url: `https://sarwar-hossain-hridoy.vercel.app/resume/${params.id}`,
      siteName: "Sarwar Hossain Portfolio",
      images: [
        {
          url: "https://sarwar-hossain-hridoy.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sarwar Hossain Resume",
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `Resume ${params.id} | Sarwar Hossain`,
      description: `View details of resume ${params.id} by Sarwar Hossain.`,
      images: ["https://sarwar-hossain-hridoy.vercel.app/og-image.png"],
    },
  };
}

const ResumeDetailPage = ({ params }: { params: { id: string } }) => {
  return <PublicResumeDetail id={params.id} />;
};

export default ResumeDetailPage;
