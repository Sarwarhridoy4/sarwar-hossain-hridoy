import { fetchWithCookies } from "@/lib/apiClient";
import { AdminUser } from "@/interfaces/admin";
import { formatDate } from "@/lib/formatters";

export const dynamic = "force-dynamic";

const AdminUsers = async () => {
  const userData = await fetchWithCookies({
    path: "users",
    method: "GET",
    cache: "no-store",
  });

  const users: AdminUser[] = userData?.data ?? [];

  return (
    <div className='space-y-6'>
      <header className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <h2 className='text-2xl font-semibold'>Admin Users</h2>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
          Manage user access, roles, and provider information from the secured
          backend.
        </p>
      </header>

      <section className='rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/60'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <h3 className='text-lg font-semibold'>User Directory</h3>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              {users.length} total records
            </p>
          </div>
        </div>

        <div className='mt-6 overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <caption className='sr-only'>Admin users table</caption>
            <thead className='border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:text-slate-400'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  Name
                </th>
                <th scope='col' className='px-4 py-3'>
                  Email
                </th>
                <th scope='col' className='px-4 py-3'>
                  Role
                </th>
                <th scope='col' className='px-4 py-3'>
                  Provider
                </th>
                <th scope='col' className='px-4 py-3'>
                  Joined
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className='px-4 py-6 text-center text-slate-500 dark:text-slate-400'
                  >
                    No users found. New registrations will appear here.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className='border-b border-slate-100 text-slate-700 transition hover:bg-slate-50/80 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900/50'
                  >
                    <td className='px-4 py-4 font-medium text-slate-900 dark:text-white'>
                      {user.name || "Unnamed"}
                    </td>
                    <td className='px-4 py-4'>{user.email}</td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          user.role === "ADMIN"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-200'>
                        {user.provider}
                      </span>
                    </td>
                    <td className='px-4 py-4'>{formatDate(user.createdAt)}</td>
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

export default AdminUsers;
