import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  FolderKanban,
  Layers,
  Users,
} from "lucide-react";
import { fetchWithCookies } from "@/lib/apiClient";
import {
  AdminBlog,
  AdminProject,
  AdminResume,
  StatsOverview,
  StatsTraffic,
  StatsUser,
} from "@/interfaces/admin";
import {
  formatCompactNumber,
  formatDate,
  formatNumber,
} from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminDashBoard = async () => {
  const [overviewRes, userRes, trafficRes, blogsRes, projectsRes, resumesRes] =
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
        path: "blogs/admin?limit=5",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "projects/admin?limit=5",
        method: "GET",
        cache: "no-store",
      }),
      fetchWithCookies({
        path: "resumes",
        method: "GET",
        cache: "no-store",
      }),
    ]);

  const overview = overviewRes?.data as StatsOverview | undefined;
  const userStats = userRes?.data as StatsUser | undefined;
  const trafficStats = trafficRes?.data as StatsTraffic | undefined;
  const latestBlogs = (blogsRes?.data as AdminBlog[] | undefined)?.slice(0, 5) || [];
  const latestProjects = (projectsRes?.data as AdminProject[] | undefined)?.slice(0, 5) || [];
  const latestResumes = (resumesRes?.data as AdminResume[] | undefined)?.slice(0, 5) || [];
  const recentViews = trafficStats?.dailyViews?.slice(-7) || [];
  const recentViewsMax = Math.max(
    ...recentViews.map((item) => (item._sum?.count ? item._sum.count : 0)),
    1
  );

  return (
    <div className='space-y-6'>
      <section
        aria-labelledby='overview-title'
        className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'
      >
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 id='overview-title' className='text-xl font-semibold'>
              Admin Overview
            </h2>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              Snapshot of live content and portfolio growth.
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-3'>
            <Link
              href='/admin/users'
              className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-slate-100 dark:hover:text-white'
            >
              <Users className='h-4 w-4' aria-hidden='true' />
              Manage Users
            </Link>
            <Link
              href='/admin/blogs'
              className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
            >
              Create Content
            </Link>
          </div>
        </div>

        <div className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {[
            {
              label: "Users",
              value: overview?.users,
              icon: Users,
            },
            {
              label: "Blogs",
              value: overview?.blogs,
              icon: FileText,
            },
            {
              label: "Projects",
              value: overview?.projects,
              icon: FolderKanban,
            },
            {
              label: "Resumes",
              value: overview?.resumes,
              icon: Layers,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className='rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-100'
              >
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                    {item.label}
                  </p>
                  <span className='rounded-full bg-slate-900/10 p-2 text-slate-900 dark:bg-white/10 dark:text-white'>
                    <Icon className='h-4 w-4' aria-hidden='true' />
                  </span>
                </div>
                <p className='mt-4 text-2xl font-semibold'>
                  {formatNumber(item.value)}
                </p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>
                  From live admin endpoints
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby='signals-title'
        className='grid gap-4 lg:grid-cols-[1.2fr_1fr]'
      >
        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 id='signals-title' className='text-lg font-semibold'>
                User Signals
              </h2>
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                Growth trends based on the last 30 days.
              </p>
            </div>
            <Link
              href='/admin/users'
              className='inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            >
              View all
              <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
            </Link>
          </div>
          <div className='mt-5 grid gap-3 sm:grid-cols-2'>
            {[
              {
                label: "Total users",
                value: userStats?.totalUsers,
              },
              {
                label: "Admins",
                value: userStats?.totalAdmins,
              },
              {
                label: "New in 7 days",
                value: userStats?.newUsersLast7Days,
              },
              {
                label: "New in 30 days",
                value: userStats?.newUsersLast30Days,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className='rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
              >
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                  {stat.label}
                </p>
                <p className='mt-2 text-xl font-semibold'>
                  {formatNumber(stat.value)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg font-semibold'>Traffic Pulse</h2>
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                Views reported by backend analytics.
              </p>
            </div>
            <Link
              href='/admin/stats'
              className='inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            >
              Explore
              <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
            </Link>
          </div>
          <div className='mt-5 space-y-4'>
            <div className='flex items-end justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                  Total Views
                </p>
                <p className='mt-2 text-2xl font-semibold'>
                  {formatCompactNumber(trafficStats?.totalViews)}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                  Avg Daily
                </p>
                <p className='mt-2 text-lg font-semibold'>
                  {formatNumber(trafficStats?.avgDailyViews)}
                </p>
              </div>
            </div>
            <div className='space-y-2'>
              {recentViews.length === 0 ? (
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  Traffic data will appear once views are recorded.
                </p>
              ) : (
                recentViews.map((day) => (
                  <div key={day.date} className='flex items-center gap-3'>
                    <span className='w-12 text-xs text-slate-500 dark:text-slate-400'>
                      {formatDate(day.date, { month: "short", day: "2-digit" })}
                    </span>
                    <div className='flex-1 rounded-full bg-slate-200/80 dark:bg-slate-800'>
                      <div
                        className='h-2 rounded-full bg-slate-900 dark:bg-white'
                        style={{
                          width: `${Math.min(
                            100,
                            ((day._sum?.count || 0) / recentViewsMax) * 100
                          ).toFixed(2)}%`,
                        }}
                      />
                    </div>
                    <span className='w-10 text-right text-xs text-slate-500 dark:text-slate-400'>
                      {formatNumber(day._sum?.count || 0)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-4 lg:grid-cols-3'>
        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>Recent Blogs</h3>
            <Link
              href='/admin/blogs'
              className='text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            >
              View all
            </Link>
          </div>
          <ul className='mt-4 space-y-3'>
            {latestBlogs.length === 0 ? (
              <li className='text-sm text-slate-500 dark:text-slate-400'>
                No blog entries found.
              </li>
            ) : (
              latestBlogs.map((blog) => (
                <li
                  key={blog.id}
                  className='rounded-2xl border border-slate-200 bg-white/70 p-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
                >
                  <p className='font-semibold text-slate-900 dark:text-white'>
                    {blog.title}
                  </p>
                  <div className='mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400'>
                    <span>{blog.published ? "Published" : "Draft"}</span>
                    <span aria-hidden='true'>•</span>
                    <span>{formatDate(blog.updatedAt)}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>Recent Projects</h3>
            <Link
              href='/admin/projects'
              className='text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            >
              View all
            </Link>
          </div>
          <ul className='mt-4 space-y-3'>
            {latestProjects.length === 0 ? (
              <li className='text-sm text-slate-500 dark:text-slate-400'>
                No project entries found.
              </li>
            ) : (
              latestProjects.map((project) => (
                <li
                  key={project.id}
                  className='rounded-2xl border border-slate-200 bg-white/70 p-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
                >
                  <p className='font-semibold text-slate-900 dark:text-white'>
                    {project.title}
                  </p>
                  <div className='mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400'>
                    <span>{project.published ? "Published" : "Draft"}</span>
                    <span aria-hidden='true'>•</span>
                    <span>{formatDate(project.updatedAt)}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>Recent Resumes</h3>
            <Link
              href='/admin/resumes'
              className='text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            >
              View all
            </Link>
          </div>
          <ul className='mt-4 space-y-3'>
            {latestResumes.length === 0 ? (
              <li className='text-sm text-slate-500 dark:text-slate-400'>
                No resumes found.
              </li>
            ) : (
              latestResumes.map((resume) => (
                <li
                  key={resume.id}
                  className='rounded-2xl border border-slate-200 bg-white/70 p-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/60'
                >
                  <p className='font-semibold text-slate-900 dark:text-white'>
                    {resume.title}
                  </p>
                  <div className='mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400'>
                    <span>{resume.isPublic ? "Public" : "Private"}</span>
                    <span aria-hidden='true'>•</span>
                    <span>{formatDate(resume.updatedAt)}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDashBoard;
