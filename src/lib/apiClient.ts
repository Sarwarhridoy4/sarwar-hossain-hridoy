import { getCookieHeader } from "./cookieUtils";

interface FetchOptions extends RequestInit {
  path: string;
}

/**
 * Generic fetch utility that forwards cookies automatically.
 * Can be used both server-side and client-side (with credentials).
 *
 * @param {string} path - Backend API path (full URL or relative)
 * @param {FetchOptions} options - Additional fetch options
 * @returns {Promise<any>} Response JSON or null on error
 */

export async function fetchWithCookies({ path, ...options }: FetchOptions) {
  // Get serialized cookies for server-side requests
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_API || "http://localhost:5000/api/v1";

  const cookieHeader = await getCookieHeader();

  try {
    const res = await fetch(`${BASE_URL}/${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(cookieHeader ? { Cookie: `${cookieHeader}` } : {}),
        ...(options.headers || {}),
      },
      credentials: "include", // ensures cookies are sent in client-side fetch
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${path}:`, err);
    return null;
  }
}
