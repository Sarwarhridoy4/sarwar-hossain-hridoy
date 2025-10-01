const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);
  return <div>Params receved :{id}</div>;
};

export default ProjectDetailPage;
