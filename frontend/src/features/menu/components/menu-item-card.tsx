import type {
    MenuItem,
} from "../types/menu-item";

import MenuStatusBadge
    from "./menu-status-badge";

interface Props {

    item: MenuItem;

}

export default function MenuItemCard({
    item,
}: Props) {

    return (

        <div
            className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
    "
        >

            <img
                src={
                    item.image ??
                    "/placeholder-food.jpg"
                }
                alt={item.name}
                className="
        h-48
        w-full
        object-cover
      "
            />

            <div className="p-5">

                <div
                    className="
          flex
          items-center
          justify-between
        "
                >

                    <h3
                        className="
            font-semibold
          "
                    >
                        {item.name}
                    </h3>

                    <MenuStatusBadge
                        active={
                            item.is_available
                        }
                    />

                </div>

                <p
                    className="
          mt-3
          text-sm
          text-zinc-400
        "
                >

                    {item.description}

                </p>

                <p
                    className="
          mt-4
          text-xl
          font-bold
        "
                >

                    Rp{" "}
                    {item.base_price.toLocaleString(
                        "id-ID"
                    )}

                </p>

            </div>

        </div>

    );

}