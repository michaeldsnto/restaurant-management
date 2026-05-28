import clsx from "clsx";

type Variant =
  | "default"
  | "success"
  | "danger";

type Props = {

  children: React.ReactNode;

  variant?: Variant;

};

const variants = {

  default:
    "bg-zinc-800 text-zinc-300",

  success:
    "bg-emerald-500/15 text-emerald-400",

  danger:
    "bg-red-500/15 text-red-400",

};

export default function Badge({
  children,
  variant = "default",
}: Props) {

  return (

    <span
      className={clsx(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>

  );
}