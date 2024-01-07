"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { SignUpSchema } from "@/schemas";

import Button from "@/components/ui/button";
import Socials from "@/components/auth/socials";
import Input from "@/components/ui/input";
import FormError from "@/components/auth/form-error";

import { signup } from "@/actions/signup";

type Props = {};

export default function SignUpForm({}: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState(params.get("email") || "");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSignUpSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setError("");
    startTransition(() => {
      signup(values).then((data) => {
        setError(data?.error);
      });
    });
  };

  return (
    <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 w-full md:max-w-md rounded-md mb-24">
      <h2 className="text-white text-3xl mb-8 font-semibold">Sign up</h2>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          type="text"
          label="Name"
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
      <Button
        disabled={isPending}
        onClick={() => onSignUpSubmit({ name, email, password })}
        className="mt-10 w-full"
      >
        {isPending ? "Loading..." : "Sign up"}
      </Button>
      <Socials />
      {error && <FormError error={error} />}
      <p className="text-neutral-500 mt-12">
        Already have an account?
        <span
          onClick={() => router.push("/auth/login")}
          className="text-white ml-1 hover:underline cursor-pointer"
        >
          Sign in now
        </span>
        .
      </p>
    </div>
  );
}
