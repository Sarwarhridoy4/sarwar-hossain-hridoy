import { cookies } from "next/headers";

/**
 * Serialize all incoming cookies into a single string suitable for `fetch` headers.
 * @returns {string} Cookie header string like "key1=value1; key2=value2"
 */
export const getCookieHeader = async (): Promise<string> => {
  const cookieStore = cookies();
  const cookieHeader = (await cookieStore)
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return cookieHeader;
};
