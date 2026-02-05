export interface SafeBlog {
  id: string;
  title: string;
  slug: string;
  tag: string[];
  thumbnail: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SafeProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SafeResume {
  id: string;
  title: string;
  summary: string | null;
  professionalPhoto: string | null;
  isPublic: boolean;
  experiences: Record<string, unknown>[] | null;
  education: Record<string, unknown>[] | null;
  skills: string[];
  projects: Record<string, unknown>[] | null;
  certifications: Record<string, unknown>[] | null;
  contactInfo: Record<string, unknown> | null;
  userId: string;
  createdById?: string | null;
  updatedById?: string | null;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
