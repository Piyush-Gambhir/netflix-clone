import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Clone - Auth",
};

import NetflixLogo from "@/components/ui/netflix-logo";
import AuthFooter from "@/components/auth/auth-footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <main className="relative min-h-full w-full bg-[url('/images/auth-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <NetflixLogo className="h-12" />
          </nav>
          <div className="flex justify-center">{children}</div>
        </div>
      </main>
      <AuthFooter />
    </div>
  );
}
