type Props = {
  error: string;
};

export default function FormError({ error }: Props) {
  return <div className="text-base text-red-500 mt-8 ">{error}</div>;
}
