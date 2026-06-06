import PosCartItem
    from "./pos-cart-item";

import type {
    CartItem,
} from "../types/cart-item";

interface Props {

    items: CartItem[];

    onIncrease: (
        id: number
    ) => void;

    onDecrease: (
        id: number
    ) => void;

    onDelete: (
        id: number
    ) => void;

}

export default function PosCart({
    items,
    onIncrease,
    onDecrease,
    onDelete,
}: Props) {

    return (

        <div
            className="
      flex
      h-full
      flex-col
      rounded-2xl
      border
      bg-background
      "
        >

            <div
                className="
        border-b
        p-4
        "
            >

                <h2
                    className="
          text-xl
          font-semibold
          "
                >
                    Current Order
                </h2>

            </div>

            <div
                className="
        flex-1
        overflow-y-auto
        p-4
        "
            >

                {items.map(
                    (
                        item
                    ) => (

                        <PosCartItem
                            key={
                                item.id
                            }
                            item={item}
                            onIncrease={() =>
                                onIncrease(
                                    item.id
                                )
                            }
                            onDecrease={() =>
                                onDecrease(
                                    item.id
                                )
                            }
                            onDelete={() =>
                                onDelete(
                                    item.id
                                )
                            }
                        />

                    )
                )}

            </div>

        </div>

    );

}