import { fetchWithCookies } from "@/lib/apiClient";
import { AdminResume } from "@/interfaces/admin";
import { formatDate } from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminResumes = async () => {
  const resumeData = await fetchWithCookies({
    path: "resumes",
    method: "GET",
    cache: "no-store",
  });

  const resumes: AdminResume[] = resumeData?.data ?? [];

  return (
    <div className='space-y-6'>
      <header className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <h2 className='text-2xl font-semibold'>Admin Resumes</h2>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
          Track resume visibility, skill density, and last update activity.
        </p>
      </header>

      <section className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <h3 className='text-lg font-semibold'>Resume Inventory</h3>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              {resumes.length} total entries
            </p>
          </div>
        </div>

        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <caption className='sr-only'>Admin resumes table</caption>
            <thead className='border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:text-slate-400'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  Resume
                </th>
                <th scope='col' className='px-4 py-3'>
                  Visibility
                </th>
                <th scope='col' className='px-4 py-3'>
                  Skills
                </th>
                <th scope='col' className='px-4 py-3'>
                  Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {resumes.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className='px-4 py-6 text-center text-slate-500 dark:text-slate-400'
                  >
                    No resumes available yet. Create a new resume to populate
                    this list.
                  </td>
                </tr>
              ) : (
                resumes.map((resume) => (
                  <tr
                    key={resume.id}
                    className='border-b border-slate-100 text-slate-700 transition hover:bg-slate-50/80 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900/50'
                  >
                    <td className='px-4 py-4 font-medium text-slate-900 dark:text-white'>
                      {resume.title}
                      {resume.summary ? (
                        <p className='mt-1 text-xs text-slate-500 dark:text-slate-400'>
                          {resume.summary}
                        </p>
                      ) : null}
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          resume.isPublic
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {resume.isPublic ? "Public" : "Private"}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200'>
                        {(resume.skills || []).length} skills
                      </span>
                    </td>
                    <td className='px-4 py-4'>{formatDate(resume.updatedAt)}</td>
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

export default AdminResumes;
