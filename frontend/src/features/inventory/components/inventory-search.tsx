import { Search } from "lucide-react";

interface InventorySearchProps {

    value: string;

    onChange: (
        value: string
    ) => void;

    placeholder?: string;

}

export default function InventorySearch({
    value,
    onChange,
    placeholder = "Search ingredients...",
}: InventorySearchProps) {

    return (

        <div
            className="
      relative
      w-full
      max-w-md
    "
        >

            <Search
                size={18}
                className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
            />

            <input
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
                placeholder={placeholder}
                className="
          h-11
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          pl-11
          pr-4
          text-sm
          outline-none
          transition
          focus:border-violet-500
        "
            />

        </div>

    );

}