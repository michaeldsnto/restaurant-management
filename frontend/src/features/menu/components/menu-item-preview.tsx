import type {
    MenuItem,
} from "../types/menu-item";

import {
    formatPrice,
} from "../utils/menu-formatters";

interface Props {
    item: MenuItem;
}

export default function MenuItemPreview({
    item,
}: Props) {
    return (
        <div
            className="
      rounded-2xl
      border
      p-6
    "
        >
            <img
                src={
                    item.image
                }
                alt={
                    item.name
                }
                className="
        h-64
        w-full
        rounded-xl
        object-cover
      "
            />

            <h2
                className="
        mt-4
        text-xl
        font-bold
      "
            >
                {item.name}
            </h2>

            <p
                className="
        mt-2
        text-zinc-500
      "
            >
                {
                    item.description
                }
            </p>

            <p
                className="
        mt-4
        text-lg
        font-semibold
      "
            >
                {formatPrice(
                    item.base_price
                )}
            </p>
        </div>
    );
}