"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Socials from "@/components/auth/socials";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

type Props = {};

export default function LoginFOrm({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const login = () => {
    console.log("login");
  };

  const signIn = (provider: string, options: any) => {
    console.log(provider, options);
  };

  return (
    <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full mb-10">
      <h2 className="text-white text-3xl mb-8 font-semibold">Sign in</h2>
      <div className="flex flex-col gap-4">
        <Input
          id="email"
          type="email"
          label="Email address or phone number"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <Button
        className="mt-8 w-full"
        onClick={() => login()}
      >
        Login
      </Button>
      <Socials />
      <p className="text-neutral-500 mt-12">
        New to Netflix?
        <span
          onClick={() => router.push("/auth/signup")}
          className="text-white ml-1 hover:underline cursor-pointer"
        >
          Sign up now
        </span>
        .
      </p>
    </div>
  );
}
