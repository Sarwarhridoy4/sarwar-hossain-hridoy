const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  console.log(slug);
  return <div>Params receved :{slug}</div>;
};

export default BlogDetailPage;
