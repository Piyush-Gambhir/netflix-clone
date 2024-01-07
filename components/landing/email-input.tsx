"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

type Props = {};

export default function EmailInput({}: Props) {
  const [email, setEmail] = useState("");

  const router = useRouter();
  return (
    <div className="items-center mt-4">
      <p className="text-lg lg:text-xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col sm:flex-row mt-4 gap-1 justify-center">
        <Input
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          label="Email address"
          className="!bg-black !bg-opacity-40 border border-[#5f5f5f]"
        />
        <Button
          onClick={() => {
            router.push(`/auth/signup?email=${encodeURIComponent(email)}`);
            console.log("clicked");
          }}
          className="py-2.5 text-2xl font-normal px-4 flex flex-row gap-1 items-center justify-center"
        >
          Get Started
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
