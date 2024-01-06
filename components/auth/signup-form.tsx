"use client";

import { useState } from "react";

import Button from "@/components/ui/button";
import Socials from "@/components/auth/socials";
import Input from "@/components/ui/input";

type Props = {};

export default function RegisterForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("login");
  };
  const register = () => {
    console.log("register");
  };

  const signIn = (provider: string, options: any) => {
    console.log(provider, options);
  };
  return (
    <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full mb-10">
      <h2 className="text-white text-3xl mb-8 font-semibold">Sign up</h2>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          type="text"
          label="Username"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />

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
      <Button onClick={() => console.log("register")} className="mt-10 w-full">
        Sign up
      </Button>
      <Socials />
      <p className="text-neutral-500 mt-12">
        Already have an account?
        <span
          onClick={() => console.log("login")}
          className="text-white ml-1 hover:underline cursor-pointer"
        >
          Sign in now
        </span>
        .
      </p>
    </div>
  );
}
