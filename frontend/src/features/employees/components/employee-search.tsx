import { Search } from "lucide-react";

interface Props {
    value: string;
    onChange: (
        value: string
    ) => void;
}

export default function EmployeeSearch({
    value,
    onChange,
}: Props) {
    return (
        <div className="relative w-full max-w-sm">
            <Search
                size={18}
                className="absolute left-3 top-3 text-zinc-400"
            />

            <input
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                placeholder="Search employee..."
                className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-2.5
          pl-10
          pr-4
          text-sm
          outline-none
        "
            />
        </div>
    );
}