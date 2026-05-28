import clsx from "clsx";

type Props = {

  children: React.ReactNode;

  className?: string;

};

export default function Card({
  children,
  className,
}: Props) {

  return (

    <div
      className={clsx(
        "rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6",
        className
      )}
    >
      {children}
    </div>

  );
}