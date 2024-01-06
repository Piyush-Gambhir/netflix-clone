import Image from "next/image";

type Props = {
  name: string;
};

const images = [
  "/images/profiles/default-blue.png",
  "/images/profiles/default-red.png",
  "/images/profiles/default-slate.png",
  "/images/profiles/default-green.png",
];

export default function UserCard({ name }: Props) {
  const imageSource = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <Image
          draggable={false}
          className="w-max h-max object-contain"
          src={imageSource}
          alt=""
          width={176}
          height={176}
        />
      </div>
      <div className="mt-4 text-neutral-500 text-lg text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
}
