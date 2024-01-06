import cn from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        "bg-red-600 py-3 text-white rounded-md hover:bg-red-600 transition-colors duration-300",
        className ? className : "w-full"
      )}
    >
      {children}
    </button>
  );
}
