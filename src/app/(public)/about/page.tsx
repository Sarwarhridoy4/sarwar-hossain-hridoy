import About from "@/components/modules/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sarwar Hossain",
  description:
    "Learn more about Sarwar Hossain — a passionate full-stack developer who loves crafting elegant web experiences with modern technologies.",
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
