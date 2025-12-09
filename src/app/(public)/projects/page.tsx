import Projects from "@/components/modules/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sarwar Hossain",
  description:
    "Explore the projects of Sarwar Hossain — showcasing modern web development, AI experiments, and full-stack applications.",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
