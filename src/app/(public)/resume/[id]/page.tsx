import type { Metadata } from "next";

// ✅ Dynamic metadata per resume
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params; // ✅ Await params before using

  return {
    title: `Resume ${id} | Sarwar Hossain`,
    description: `View details of resume ${id} by Sarwar Hossain.`,
  };
}

const ResumeDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; // No await needed here

  // 🧩 Later: Fetch resume details by ID
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resumes/${id}`);
  // const resume = await res.json();

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-lg font-medium'>
        Params received: <span className='font-bold text-blue-600'>{id}</span>
      </p>
    </div>
  );
};

export default ResumeDetailPage;
