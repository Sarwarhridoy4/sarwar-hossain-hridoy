export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  profilePicture: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

export type AdminBlog = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  published: boolean;
  views: number;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

export type AdminProject = {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  images: string[];
  featured: boolean;
  published: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

export type AdminResume = {
  id: string;
  title: string;
  summary: string | null;
  professionalPhoto: string | null;
  isPublic: boolean;
  skills: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type StatsOverview = {
  users: number;
  blogs: number;
  projects: number;
  resumes: number;
};

export type StatsUser = {
  totalUsers: number;
  totalAdmins: number;
  newUsersLast7Days: number;
  newUsersLast30Days: number;
};

export type StatsTraffic = {
  totalViews: number;
  avgDailyViews: number;
  dailyViews: Array<{
    date: string;
    _sum?: {
      count?: number;
    };
  }>;
};

export type StatsBlog = {
  totalBlogs: number;
  totalViews: number;
  last7Days: Array<{ date: string; views: number }>;
  last30Days: Array<{ date: string; views: number }>;
};

export type StatsProject = {
  totalProjects: number;
  monthlyProjects: Array<{ month: string; count: number }>;
  topTechStacks: Array<{ tech: string; count: number }>;
  mostScreenshots: Array<{ id: string; title: string; images: string[] }>;
};

export type StatsResume = {
  totalResumes: number;
  monthlyResumes: Array<{ month: string; count: number }>;
  avgSkills: number;
  topSkills: Array<{ skill: string; count: number }>;
};
