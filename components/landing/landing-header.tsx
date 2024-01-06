"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import NetflixLogo from "@/components/ui/netflix-logo";
import LanguageDropdownButton from "@/components/ui/language-dropdown-button";
type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  return (
    <div className="px-8 lg:px-12 py-6 flex flex-row justify-between mx-auto max-w-[calc(83.3333%-3rem)] ">
      <NetflixLogo className="h-6 lg:h-10" />
      <div className="flex flex-row items-center justify-end gap-4">
        <LanguageDropdownButton />
        <Button
          onClick={() => router.push("/auth/login")}
          className="text-sm px-4 py-[9px]"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
