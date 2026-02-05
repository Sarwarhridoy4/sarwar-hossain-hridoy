import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SafeBlog, SafeProject, SafeResume } from "@/interfaces";

type ApiListResponse<T> = {
  success: boolean;
  message?: string;
  data: T[];
};

type QueryParams = Record<string, string | number | boolean | undefined>;

const buildQueryString = (params?: QueryParams) => {
  if (!params) return "";
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    searchParams.set(key, String(value));
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_BASE_API || "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<SafeProject[], QueryParams | void>({
      query: (params) => `projects${buildQueryString(params)}`,
      transformResponse: (response: ApiListResponse<SafeProject>) =>
        response.data,
    }),
    getBlogs: builder.query<SafeBlog[], QueryParams | void>({
      query: (params) => `blogs${buildQueryString(params)}`,
      transformResponse: (response: ApiListResponse<SafeBlog>) => response.data,
    }),
    getPublicResumes: builder.query<SafeResume[], void>({
      query: () => "resumes/public",
      transformResponse: (response: ApiListResponse<SafeResume>) =>
        response.data,
    }),
    getPublicResume: builder.query<SafeResume, string>({
      query: (id) => `resumes/public/${id}`,
      transformResponse: (response: { data: SafeResume }) => response.data,
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetBlogsQuery,
  useGetPublicResumesQuery,
  useGetPublicResumeQuery,
} = portfolioApi;
