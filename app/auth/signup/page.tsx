import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Clone - Sign up",
};

import SignUpForm from "@/components/auth/signup-form";
export default function Auth() {
  return <SignUpForm />;
}
