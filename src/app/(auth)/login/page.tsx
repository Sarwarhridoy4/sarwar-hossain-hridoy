"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to NextAuth or your API
    console.log("Login attempt", { email, password });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6 text-white">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-900 text-white border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-900 text-white border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-gray-400 text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <a href="/auth/register" className="text-blue-400 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}
