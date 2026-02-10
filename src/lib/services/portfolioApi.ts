import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { SafeBlog, SafeProject, SafeResume } from "@/interfaces";
import { getBaseUrl } from "@/lib/baseUrl";

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

const rawBaseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  credentials: "include",
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await rawBaseQuery(
      {
        url: "auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions
    );

    if (!refreshResult.error) {
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProjects: builder.query<SafeProject[], QueryParams | undefined>({
      query: (params) => `projects${buildQueryString(params)}`,
      transformResponse: (response: ApiListResponse<SafeProject>) =>
        response.data,
    }),
    getBlogs: builder.query<SafeBlog[], QueryParams | undefined>({
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
