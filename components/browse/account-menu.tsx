import Image from "next/image";

import { logout } from "@/actions/logout";

import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {
  visible?: boolean;
};

export default function AccountMenu({ visible = false }: Props) {
  const user = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt=""
            width={32}
            height={32}
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => logout()}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  );
}
