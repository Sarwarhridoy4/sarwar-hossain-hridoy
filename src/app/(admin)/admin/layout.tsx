import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard | Sarwar Hossain",
  description: "Administrative dashboard for managing portfolio content.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const AdminDashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative flex-1 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white'>
      <div className='absolute inset-0 -z-10 page-aurora dark:page-aurora-dark' />
      <div className='absolute inset-0 -z-10 bg-grid dark:bg-grid-dark opacity-60' />

      <div className='mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8'>
        <header className='flex flex-col gap-6 pb-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='space-y-3'>
            <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300'>
              <ShieldCheck className='h-4 w-4 text-emerald-500' aria-hidden='true' />
              Admin Console
            </div>
            <div>
              <h1 className='text-3xl font-semibold text-slate-900 dark:text-white'>
                Portfolio Control Room
              </h1>
              <p className='max-w-2xl text-sm text-slate-600 dark:text-slate-300'>
                Monitor activity, curate content, and keep the portfolio ecosystem
                healthy with real-time insights from the backend services.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-slate-100 dark:hover:text-white'
            >
              <Sparkles className='h-4 w-4' aria-hidden='true' />
              View Live Portfolio
            </Link>
            <Link
              href='/admin/stats'
              className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
            >
              Deep Analytics
            </Link>
          </div>
        </header>

        <div className='grid gap-6 lg:grid-cols-[260px_1fr]'>
          <aside className='hidden lg:block'>
            <div className='sticky top-24 space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                  Navigation
                </p>
                <div className='mt-4'>
                  <AdminSidebar />
                </div>
              </div>
              <div className='rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100'>
                <p className='font-semibold'>System status: Online</p>
                <p className='mt-2 text-xs text-emerald-800/80 dark:text-emerald-100/80'>
                  All admin-only endpoints are responding without delay.
                </p>
              </div>
            </div>
          </aside>

          <div className='space-y-6'>
            <div className='rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/60 lg:hidden'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
                Sections
              </p>
              <div className='mt-3 overflow-x-auto'>
                <AdminSidebar orientation='horizontal' />
              </div>
            </div>

            <section
              id='admin-content'
              aria-label='Admin content'
              className='space-y-6'
            >
              {children}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardLayout;
