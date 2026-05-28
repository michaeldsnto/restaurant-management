import clsx from "clsx";

type Props =
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
    className,
    ...props
}: Props) {

    return (

        <textarea
            className={clsx(
                "min-h-[120px] w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-violet-500",
                className
            )}
            {...props}
        />

    );
}