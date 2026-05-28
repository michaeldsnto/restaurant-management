import { Search } from "lucide-react";

export default function NavbarSearch() {

    return (

        <div className="
      hidden
      items-center
      gap-3
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      px-4
      py-3
      lg:flex
    ">

            <Search
                size={18}
                className="text-zinc-500"
            />

            <input
                placeholder="Search..."
                className="
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