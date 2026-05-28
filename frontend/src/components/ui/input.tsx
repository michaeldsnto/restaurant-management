import clsx from "clsx";

type Props =
    React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
    className,
    ...props
}: Props) {

    return (

        <input
            className={clsx(
                "h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-violet-500",
                className
            )}
            {...props}
        />

    );
}