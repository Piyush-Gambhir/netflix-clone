"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
type Props = {};

export default function Socials({}: Props) {
  const callbackUrl = "/profiles";
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <div
        onClick={() => onClick("google")}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
      >
        <FcGoogle size={32} />
      </div>
      <div
        onClick={() => onClick("github")}
        className="w-10 h-10 text-black bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
      >
        <FaGithub size={32} />
      </div>
    </div>
  );
}
