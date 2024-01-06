"use client";
import { useRouter } from "next/navigation";

import UserCard from "@/components/profiles/user-card";

import { useCurrentUser } from "@/hooks/use-current-user";

export default function Profiles() {
  const router = useRouter();
  const user = useCurrentUser();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-5xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/browse")}>
            <UserCard name={user.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
