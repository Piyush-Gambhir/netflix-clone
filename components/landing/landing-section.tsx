type Props = {
  children: React.ReactNode;
};

export default function LandingSection({ children }: Props) {
  return (
    <section className="bg-black py-[72px]">
      <div className="flex flex-col md:flex-row gap-4 mx-auto justify-between max-w-[calc(83.333%-3rem)]">
        {children}
      </div>
    </section>
  );
}
