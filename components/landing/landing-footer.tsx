import Link from "next/link";

import LanguageDropdownButton from "@/components/ui/language-dropdown-button";
import LandingSection from "@/components/landing/landing-section";

const FooterLinks = [
  { title: "FAQ", href: "" },
  { title: "Help Centre", href: "" },
  { title: "Account", href: "" },
  { title: "Media Centre", href: "" },
  { title: "Investor Relations", href: "" },
  { title: "Jobs", href: "" },
  { title: "Ways to Watch", href: "" },
  { title: "Terms of Use", href: "" },
  { title: "Privacy", href: "" },
  { title: "Cookie Preferences", href: "" },
  { title: "Corporate Information", href: "" },
  { title: "Contact Us", href: "" },
  { title: "Speed Test", href: "" },
  { title: "Legal Notices", href: "" },
  { title: "Only on Netflix", href: "" },
];

type Props = {};

export default function LandingFooter({}: Props) {
  return (
    <footer className="pb-8">
      <LandingSection className="py-8 mx-8 flex flex-col text-neutral-400 text-base">
        <div className=" mb-7">
          Questions? Call{" "}
          <Link href="" className="underline">
            000-800-919-1694
          </Link>
        </div>
        <div className="flex flex-row flex-wrap mb-6">
          {FooterLinks.map((link, index) => (
            <div className="basis-1/2 lg:basis-1/4 pb-2" key={index}>
              <Link href={link.href} className="text-sm underline">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <LanguageDropdownButton />
        <p className="text-sm mt-6">
          Netflix India{""}
          <span className="text-neutral-300">© 1997-2021 Netflix, Inc.</span>
        </p>
      </LandingSection>
    </footer>
  );
}
