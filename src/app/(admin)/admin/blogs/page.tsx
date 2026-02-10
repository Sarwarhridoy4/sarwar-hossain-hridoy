import { fetchWithCookies } from "@/lib/apiClient";
import { AdminBlog } from "@/interfaces/admin";
import { formatCompactNumber, formatDate } from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminBlogs = async () => {
  const blogData = await fetchWithCookies({
    path: "blogs/admin?includeDrafts=true",
    method: "GET",
    cache: "no-store",
  });

  const blogs: AdminBlog[] = blogData?.data ?? [];

  return (
    <div className='space-y-6'>
      <header className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <h2 className='text-2xl font-semibold'>Admin Blogs</h2>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
          Review published and draft articles, priority flags, and traffic
          performance.
        </p>
      </header>

      <section className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <h3 className='text-lg font-semibold'>Content Inventory</h3>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              {blogs.length} total entries
            </p>
          </div>
        </div>

        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <caption className='sr-only'>Admin blogs table</caption>
            <thead className='border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:text-slate-400'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  Title
                </th>
                <th scope='col' className='px-4 py-3'>
                  Tags
                </th>
                <th scope='col' className='px-4 py-3'>
                  Status
                </th>
                <th scope='col' className='px-4 py-3'>
                  Views
                </th>
                <th scope='col' className='px-4 py-3'>
                  Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className='px-4 py-6 text-center text-slate-500 dark:text-slate-400'
                  >
                    No blog entries found. Drafts and scheduled posts will
                    appear here.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className='border-b border-slate-100 text-slate-700 transition hover:bg-slate-50/80 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900/50'
                  >
                    <td className='px-4 py-4 font-medium text-slate-900 dark:text-white'>
                      {blog.title}
                      {blog.featured ? (
                        <span className='ml-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700 dark:bg-amber-400/20 dark:text-amber-200'>
                          Featured
                        </span>
                      ) : null}
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex flex-wrap gap-1'>
                        {(blog.tags || []).slice(0, 3).map((tag) => (
                          <span
                            key={`${blog.id}-${tag}`}
                            className='rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200'
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags && blog.tags.length > 3 ? (
                          <span className='text-xs text-slate-400'>
                            +{blog.tags.length - 3} more
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          blog.published
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      {formatCompactNumber(blog.views)}
                    </td>
                    <td className='px-4 py-4'>{formatDate(blog.updatedAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminBlogs;
