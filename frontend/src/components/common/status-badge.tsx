import clsx from "clsx";

type Status =
    | "success"
    | "warning"
    | "danger"
    | "info";

type Props = {

    label: string;

    status: Status;

};

const styles = {

    success:
        "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",

    warning:
        "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",

    danger:
        "bg-red-500/15 text-red-400 border-red-500/20",

    info:
        "bg-sky-500/15 text-sky-400 border-sky-500/20",

};

export default function StatusBadge({
    label,
    status,
}: Props) {

    return (

        <span
            className={clsx(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                styles[status]
            )}
        >
            {label}
        </span>

    );
}