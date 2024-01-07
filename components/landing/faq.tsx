"use client";

import { useState } from "react";
import cn from "clsx";
import { PlusIcon } from "@heroicons/react/24/solid";
type Props = {
  header: string;
  body: string;
  open: boolean;
  onClick: () => void;
};

export default function FAQ({ header, body, open, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-full bg-[#2d2d2d] flex flex-col cursor-pointer"
    >
      <div className="flex flex-row p-6 items-center justify-between hover:bg-[#414141] transition-all duration-300">
        <h1 className="text-lg lg:text-2xl font-[900]">{header}</h1>
        <PlusIcon
          className={cn(
            "h-9 w-9 text-white cursor-pointer transform transition-all duration-300",
            open ? "-rotate-45" : "rotate-0"
          )}
        />
      </div>
      <p
        className={cn(
          "border-t-2 border-black text-lg lg:text-2xl text-wrap p-6",
          open ? "block" : "hidden"
        )}
      >
        
        {body}
      </p>
    </div>
  );
}
