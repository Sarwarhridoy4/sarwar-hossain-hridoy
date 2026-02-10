import { fetchWithCookies } from "@/lib/apiClient";
import { AdminProject } from "@/interfaces/admin";
import { formatDate } from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminProjects = async () => {
  const projectData = await fetchWithCookies({
    path: "projects/admin?includeDrafts=true",
    method: "GET",
    cache: "no-store",
  });

  const projects: AdminProject[] = projectData?.data ?? [];

  return (
    <div className='space-y-6'>
      <header className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <h2 className='text-2xl font-semibold'>Admin Projects</h2>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
          Review project listings, tech stacks, and publishing status.
        </p>
      </header>

      <section className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <h3 className='text-lg font-semibold'>Project Inventory</h3>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              {projects.length} total entries
            </p>
          </div>
        </div>

        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <caption className='sr-only'>Admin projects table</caption>
            <thead className='border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:text-slate-400'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  Project
                </th>
                <th scope='col' className='px-4 py-3'>
                  Tech Stack
                </th>
                <th scope='col' className='px-4 py-3'>
                  Status
                </th>
                <th scope='col' className='px-4 py-3'>
                  Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className='px-4 py-6 text-center text-slate-500 dark:text-slate-400'
                  >
                    No projects found. Drafts and published work will show here.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr
                    key={project.id}
                    className='border-b border-slate-100 text-slate-700 transition hover:bg-slate-50/80 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900/50'
                  >
                    <td className='px-4 py-4'>
                      <div className='font-medium text-slate-900 dark:text-white'>
                        {project.title}
                      </div>
                      <div className='mt-1 text-xs text-slate-500 dark:text-slate-400'>
                        {project.featured ? "Featured" : "Standard"}
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex flex-wrap gap-1'>
                        {(project.techStack || []).slice(0, 3).map((tech) => (
                          <span
                            key={`${project.id}-${tech}`}
                            className='rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200'
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack && project.techStack.length > 3 ? (
                          <span className='text-xs text-slate-400'>
                            +{project.techStack.length - 3} more
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          project.published
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {project.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className='px-4 py-4'>{formatDate(project.updatedAt)}</td>
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

export default AdminProjects;
