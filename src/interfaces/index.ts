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
  experiences: ResumeExperience[] | null;
  education: ResumeEducation[] | null;
  skills: string[];
  projects: ResumeProject[] | null;
  certifications: ResumeCertification[] | null;
  contactInfo: ResumeContactInfo | null;
  userId: string;
  createdById?: string | null;
  updatedById?: string | null;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResumeExperience {
  role?: string;
  title?: string;
  company?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ResumeEducation {
  institution?: string;
  school?: string;
  degree?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ResumeProject {
  name?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ResumeCertification {
  name?: string;
  title?: string;
  issuer?: string;
  [key: string]: unknown;
}

export interface ResumeContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  [key: string]: unknown;
}
