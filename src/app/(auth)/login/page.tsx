import type { Metadata } from "next";
import LoginForm from "@/components/modules/auth/Login";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In | Sarwar Hossain",
  description: "Sign in to manage your account and admin dashboard.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const LoginPage = () => {
  return <LoginForm />;
};
export default LoginPage;
