import Link from "next/link";

type Props = {};

export default function AuthFooter({}: Props) {
  return (
    <footer className="w-full bg-black pb-8">
      <div className="py-8 lg:max-w-[1000px] mx-8 lg:mx-auto flex flex-col text-neutral-500">
        <div className="text-base mb-7">Questions? Call 000-800-919-1694</div>
        <div className="flex flex-row flex-wrap">
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              FAQs
            </Link>
          </div>
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              Help Center
            </Link>
          </div>
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              Terms of Use
            </Link>
          </div>
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              Privacy
            </Link>
          </div>
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              Cookies Preference
            </Link>
          </div>
          <div className="w-1/3 pb-2">
            <Link href="" className="text-sm hover:underline">
              Corporate Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
