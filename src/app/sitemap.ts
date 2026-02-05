import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sarwar-hossain-hridoy.vercel.app";
  const routes = [
    "",
    "/about",
    "/projects",
    "/blogs",
    "/contact",
    "/resume",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
