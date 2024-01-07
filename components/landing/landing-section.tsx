import cn from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function LandingSection({ children, className }: Props) {
  return (
    <section className="bg-black py-[72px]">
      <div
        className={cn(
          " mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem) lg:max-w-[calc(83.333%-6rem)] 2xl:max-w-[calc(66.333%-6rem)]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
