import {
    Search,
} from "lucide-react";

interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function KitchenFilters({
    value,
    onChange,
}: Props) {

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
        "
            />

            <input
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
                placeholder="
          Search order...
        "
                className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-3
          pl-11
          pr-4
        "
            />

        </div>

    );

}