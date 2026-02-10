import { fetchWithCookies } from "@/lib/apiClient";
import {
  StatsBlog,
  StatsOverview,
  StatsProject,
  StatsResume,
  StatsTraffic,
  StatsUser,
} from "@/interfaces/admin";
import { formatCompactNumber, formatDate, formatNumber } from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminStats = async () => {
  const [overviewRes, userRes, trafficRes, blogRes, projectRes, resumeRes] =
    await Promise.all([
      fetchWithCookies({
        path: "stats/general/overview",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "stats/user",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "stats/traffic",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "stats/blog",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "stats/project",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "stats/resume",
        method: "GET",
        cache: "no-store",
      }),
    ]);

  const overview = overviewRes?.data as StatsOverview | undefined;
  const userStats = userRes?.data as StatsUser | undefined;
  const trafficStats = trafficRes?.data as StatsTraffic | undefined;
  const blogStats = blogRes?.data as StatsBlog | undefined;
  const projectStats = projectRes?.data as StatsProject | undefined;
  const resumeStats = resumeRes?.data as StatsResume | undefined;

  const trafficMax = Math.max(
    ...(trafficStats?.dailyViews || []).map((item) => item._sum?.count || 0),
    1
  );
  const blogMax = Math.max(
    ...(blogStats?.last7Days || []).map((item) => item.views),
    1
  );
  const projectMax = Math.max(
    ...(projectStats?.monthlyProjects || []).map((item) => item.count),
    1
  );
  const resumeMax = Math.max(
    ...(resumeStats?.monthlyResumes || []).map((item) => item.count),
    1
  );

  return (
    <div className='space-y-6'>
      <header className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <h2 className='text-2xl font-semibold'>Admin Stats</h2>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
          Consolidated metrics from admin-only analytics endpoints.
        </p>
      </header>

      <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {[
          { label: "Users", value: overview?.users },
          { label: "Blogs", value: overview?.blogs },
          { label: "Projects", value: overview?.projects },
          { label: "Resumes", value: overview?.resumes },
        ].map((item) => (
          <div
            key={item.label}
            className='rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
          >
            <p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
              {item.label}
            </p>
            <p className='mt-3 text-2xl font-semibold'>
              {formatNumber(item.value)}
            </p>
          </div>
        ))}
      </section>

      <section className='grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>Traffic Analytics</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            {formatCompactNumber(trafficStats?.totalViews)} total views, average
            daily views {formatNumber(trafficStats?.avgDailyViews)}.
          </p>
          <div className='mt-6 space-y-3'>
            {(trafficStats?.dailyViews || []).slice(-10).map((item) => {
              const count = item._sum?.count || 0;
              return (
                <div key={item.date} className='flex items-center gap-3'>
                  <span className='w-20 text-xs text-slate-500 dark:text-slate-400'>
                    {formatDate(item.date, { month: "short", day: "2-digit" })}
                  </span>
                  <div className='flex-1 rounded-full bg-slate-200/80 dark:bg-slate-800'>
                    <div
                      className='h-2 rounded-full bg-slate-900 dark:bg-white'
                      style={{ width: `${(count / trafficMax) * 100}%` }}
                    />
                  </div>
                  <span className='w-12 text-right text-xs text-slate-500 dark:text-slate-400'>
                    {formatNumber(count)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>User Stats</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            Admin visibility on user growth.
          </p>
          <div className='mt-6 space-y-4'>
            {[
              { label: "Total users", value: userStats?.totalUsers },
              { label: "Admins", value: userStats?.totalAdmins },
              { label: "New in 7 days", value: userStats?.newUsersLast7Days },
              { label: "New in 30 days", value: userStats?.newUsersLast30Days },
            ].map((item) => (
              <div
                key={item.label}
                className='rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
              >
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                  {item.label}
                </p>
                <p className='mt-2 text-xl font-semibold'>
                  {formatNumber(item.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='grid gap-4 lg:grid-cols-2'>
        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>Blog Reach</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            {formatNumber(blogStats?.totalBlogs)} blogs with {formatCompactNumber(
              blogStats?.totalViews
            )} total views.
          </p>
          <div className='mt-6 space-y-3'>
            {(blogStats?.last7Days || []).map((item) => (
              <div key={item.date} className='flex items-center gap-3'>
                <span className='w-20 text-xs text-slate-500 dark:text-slate-400'>
                  {formatDate(item.date, { month: "short", day: "2-digit" })}
                </span>
                <div className='flex-1 rounded-full bg-slate-200/80 dark:bg-slate-800'>
                  <div
                    className='h-2 rounded-full bg-slate-900 dark:bg-white'
                    style={{ width: `${(item.views / blogMax) * 100}%` }}
                  />
                </div>
                <span className='w-12 text-right text-xs text-slate-500 dark:text-slate-400'>
                  {formatNumber(item.views)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>Project Momentum</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            {formatNumber(projectStats?.totalProjects)} projects tracked.
          </p>
          <div className='mt-6 space-y-3'>
            {(projectStats?.monthlyProjects || []).map((item) => (
              <div key={item.month} className='flex items-center gap-3'>
                <span className='w-20 text-xs text-slate-500 dark:text-slate-400'>
                  {item.month}
                </span>
                <div className='flex-1 rounded-full bg-slate-200/80 dark:bg-slate-800'>
                  <div
                    className='h-2 rounded-full bg-slate-900 dark:bg-white'
                    style={{ width: `${(item.count / projectMax) * 100}%` }}
                  />
                </div>
                <span className='w-12 text-right text-xs text-slate-500 dark:text-slate-400'>
                  {formatNumber(item.count)}
                </span>
              </div>
            ))}
          </div>
          <div className='mt-6'>
            <h4 className='text-sm font-semibold text-slate-700 dark:text-slate-200'>
              Top Tech Stacks
            </h4>
            <div className='mt-3 flex flex-wrap gap-2'>
              {(projectStats?.topTechStacks || []).map((tech) => (
                <span
                  key={tech.tech}
                  className='rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200'
                >
                  {tech.tech} · {formatNumber(tech.count)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-4 lg:grid-cols-2'>
        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>Resume Activity</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            {formatNumber(resumeStats?.totalResumes)} total resumes with an
            average of {formatNumber(resumeStats?.avgSkills)} skills each.
          </p>
          <div className='mt-6 space-y-3'>
            {(resumeStats?.monthlyResumes || []).map((item) => (
              <div key={item.month} className='flex items-center gap-3'>
                <span className='w-20 text-xs text-slate-500 dark:text-slate-400'>
                  {item.month}
                </span>
                <div className='flex-1 rounded-full bg-slate-200/80 dark:bg-slate-800'>
                  <div
                    className='h-2 rounded-full bg-slate-900 dark:bg-white'
                    style={{ width: `${(item.count / resumeMax) * 100}%` }}
                  />
                </div>
                <span className='w-12 text-right text-xs text-slate-500 dark:text-slate-400'>
                  {formatNumber(item.count)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <h3 className='text-lg font-semibold'>Top Skills</h3>
          <p className='text-sm text-slate-600 dark:text-slate-300'>
            Skills most frequently showcased across resumes.
          </p>
          <ul className='mt-6 space-y-3'>
            {(resumeStats?.topSkills || []).map((skill) => (
              <li
                key={skill.skill}
                className='flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
              >
                <span className='font-medium text-slate-900 dark:text-white'>
                  {skill.skill}
                </span>
                <span className='text-xs text-slate-500 dark:text-slate-400'>
                  {formatNumber(skill.count)} mentions
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminStats;
