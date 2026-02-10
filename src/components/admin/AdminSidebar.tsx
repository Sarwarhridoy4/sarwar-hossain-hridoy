"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderKanban,
  Layers,
  BarChart3,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
  { name: "Resumes", href: "/admin/resumes", icon: Layers },
  { name: "Stats", href: "/admin/stats", icon: BarChart3 },
];

type AdminSidebarProps = {
  orientation?: "vertical" | "horizontal";
};

const AdminSidebar = ({ orientation = "vertical" }: AdminSidebarProps) => {
  const pathname = usePathname();
  const isHorizontal = orientation === "horizontal";

  return (
    <nav aria-label='Admin navigation'>
      <ul
        className={`flex ${
          isHorizontal
            ? "flex-row gap-2"
            : "flex-col gap-2"
        }`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group inline-flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-100/20 ${
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/20 dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                    : "border-slate-200 bg-white/80 text-slate-700 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-slate-100 dark:hover:text-white"
                } ${
                  isHorizontal ? "whitespace-nowrap" : ""
                }`}
              >
                <Icon className='h-4 w-4' aria-hidden='true' />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AdminSidebar;
