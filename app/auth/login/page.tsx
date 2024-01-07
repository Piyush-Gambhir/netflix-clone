import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Clone - Login",
};

import LoginForm from "@/components/auth/login-form";
export default function Auth() {
  return <LoginForm />;
}
