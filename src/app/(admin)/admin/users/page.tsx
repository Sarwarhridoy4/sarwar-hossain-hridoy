// app/admin/users/page.tsx
import React from "react";
import { fetchWithCookies } from "@/lib/apiClient";

interface User {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  provider?: string;
}

const AdminUsers = async () => {
  // ✅ Fetch users from backend, cookies are automatically forwarded
  const userData = await fetchWithCookies({
    path: "users",
    method: "GET",
  });

  const users: User[] = userData?.data ?? [];
  console.log(users);

  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold mb-4'>Admin Users</h1>
    </div>
  );
};

export default AdminUsers;
