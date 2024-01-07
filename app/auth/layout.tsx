import NetflixLogo from "@/components/ui/netflix-logo";
import AuthFooter from "@/components/auth/auth-footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[url('/images/auth-bg.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between w-full h-full bg-black md:bg-opacity-50">
        <nav className="px-12 py-5">
          <NetflixLogo className="h-12" />
        </nav>
        <div className="w-full flex flex-row justify-center">{children}</div>
      </div>
      <AuthFooter />
    </div>
  );
}
