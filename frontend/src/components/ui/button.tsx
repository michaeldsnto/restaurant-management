import clsx from "clsx";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost";

type Size =
  | "sm"
  | "md"
  | "lg";

type Props =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {

    variant?: Variant;

    size?: Size;

    loading?: boolean;

  };

const variants = {

  primary:
    "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/20",

  secondary:
    "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800",

  danger:
    "bg-red-600 text-white hover:bg-red-500",

  ghost:
    "text-zinc-300 hover:bg-zinc-900",

};

const sizes = {

  sm: "h-10 px-4 text-sm",

  md: "h-12 px-5 text-sm",

  lg: "h-14 px-6 text-base",

};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: Props) {

  return (

    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl font-medium transition-all outline-none disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >

      {loading ? (

        <div className="
          h-5
          w-5
          animate-spin
          rounded-full
          border-2
          border-white
          border-t-transparent
        " />

      ) : (
        children
      )}

    </button>

  );
}