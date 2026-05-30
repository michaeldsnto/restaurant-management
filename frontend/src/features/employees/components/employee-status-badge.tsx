import { cn } from "@/utils/cn";

interface Props {
    status: string;
}

export default function EmployeeStatusBadge({
    status,
}: Props) {
    const colors = {
        active:
            "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",

        inactive:
            "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",

        suspended:
            "bg-red-500/10 text-red-400 border-red-500/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-xl border px-3 py-1 text-xs font-medium",
                colors[
                status as keyof typeof colors
                ]
            )}
        >
            {status}
        </span>
    );
}