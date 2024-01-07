"use client";

import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import Socials from "@/components/auth/socials";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import FormError from "@/components/auth/form-error";

import { LoginSchema } from "@/schemas";

import { login } from "@/actions/login";

type Props = {};

export default function LoginForm({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const onLoginSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="w-full md:max-w-md bg-black bg-opacity-80 px-16 py-16 self-center mt-2 rounded-md mb-10">
      <h2 className=" text-white text-3xl mb-8 font-semibold">Sign in</h2>
      <div className=" flex flex-col gap-4">
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
        onClick={() => onLoginSubmit({ email, password })}
      >
        Login
      </Button>
      <Socials />

      {error && <FormError error={error} />}

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
