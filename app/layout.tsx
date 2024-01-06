import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "clsx";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone",
};

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#232323] overflow-x-hidden text-white")}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
