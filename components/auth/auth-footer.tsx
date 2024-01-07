import Link from "next/link";
import LanguageDropdownButton from "../ui/language-dropdown-button";

type Props = {};

const FooterLinks = [
  { href: "", title: "FAQs" },
  { href: "", title: "Help Center" },
  { href: "", title: "Terms of Use" },
  { href: "", title: "Privacy" },
  { href: "", title: "Cookies Preference" },
  { href: "", title: "Corporate Information" },
];

export default function AuthFooter({}: Props) {
  return (
    <footer className="border-t border-neutral-400 md:border-transparent z-10 px-12 py-5 w-full bg-black md:bg-opacity-80">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-4 text-neutral-400">
        <div className=" text-neutral-400 mb-7">
          Questions? Call{" "}
          <Link href="" className="underline">
            000-800-919-1694
          </Link>
        </div>
        <div className="flex flex-row flex-wrap">
          {FooterLinks.map((link, index) => (
            <div className="basis-1/2 lg:basis-1/3 pb-2" key={index}>
              <Link href={link.href} className="text-sm hover:underline">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <LanguageDropdownButton />
      </div>
    </footer>
  );
}
