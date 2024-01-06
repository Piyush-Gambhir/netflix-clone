"use client";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

type Props = {};

export default function EmailInput({}: Props) {
  const [email, setEmail] = useState("");
  return (
    <div className="items-center mt-4">
      <p className="text-lg lg:text-xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col sm:flex-row mt-4 gap-1 justify-center">
        <Input
          id="email"
          onChange={() => {}}
          value=""
          label="Email address"
          className="w-full bg-black bg-opacity-60 border border-[#5f5f5f] focus:ring-offset-4 focus:ring-offset-white"
        />
        <Button className="text-2xl font-medium w-auto px-4 flex flex-row gap-1 items-center justify-center">
          Get Started
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
