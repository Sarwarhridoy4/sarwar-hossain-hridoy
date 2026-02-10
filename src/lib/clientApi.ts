"use client";

import { getBaseUrl } from "./baseUrl";

type ClientFetchOptions = RequestInit & {
  path: string;
};

const refreshSession = async () => {
  try {
    const res = await fetch(`${getBaseUrl()}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    return res.ok;
  } catch (error) {
    console.error("Token refresh failed", error);
    return false;
  }
};

export const clientApiFetch = async ({ path, ...options }: ClientFetchOptions) => {
  const res = await fetch(`${getBaseUrl()}/${path}`, {
    ...options,
    credentials: "include",
  });

  if (res.status === 401) {
    const refreshed = await refreshSession();
    if (refreshed) {
      const retryRes = await fetch(`${getBaseUrl()}/${path}`, {
        ...options,
        credentials: "include",
      });
      if (!retryRes.ok) {
        throw new Error(`HTTP error! status: ${retryRes.status}`);
      }
      return retryRes.json();
    }
  }

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};
