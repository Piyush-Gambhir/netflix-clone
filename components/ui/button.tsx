import cn from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  className,
  onClick,
  disabled,
  type,
}: Props) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={cn(
        "bg-red-600 py-3 text-white rounded-md hover:bg-red-600 transition-colors duration-300",
        className ? className : "w-full"
      )}
      disabled={disabled || false}
      type={type || "button"}
    >
      {children}
    </button>
  );
}
