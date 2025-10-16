import type { Metadata } from "next";

// ✅ Dynamic metadata per project
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;

  return {
    title: `Project ${id} | Sarwar Hossain`,
    description: `Details of project ${id} by Sarwar Hossain.`,
  };
}

const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; // No await needed here

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
