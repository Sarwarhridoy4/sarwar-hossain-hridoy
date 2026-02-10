import type { Metadata } from "next";
import RegisterForm from "@/components/modules/auth/SignUp";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up | Sarwar Hossain",
  description: "Create an account to access the portfolio dashboard.",
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

const SignUp = () => {
  return <RegisterForm />;
};

export default SignUp;
