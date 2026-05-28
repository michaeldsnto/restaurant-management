import { Search } from "lucide-react";

type Props = {

    value: string;

    onChange: (
        value: string
    ) => void;

    placeholder?: string;

};

export default function SearchInput({
    value,
    onChange,
    placeholder = "Search...",
}: Props) {

    return (

        <div className="
      flex
      h-12
      items-center
      gap-3
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      px-4
    ">

            <Search
                className="
          h-5
          w-5
          text-zinc-500
        "
            />

            <input
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                placeholder={placeholder}
                className="
          w-full
          bg-transparent
          text-sm
          text-white
          outline-none
          placeholder:text-zinc-500
        "
            />

        </div>

    );
}