import {
    Minus,
    Plus,
    Trash2,
} from "lucide-react";

import type {
    CartItem,
} from "../types/cart-item";

interface Props {

    item: CartItem;

    onIncrease: () => void;

    onDecrease: () => void;

    onDelete: () => void;

}

export default function PosCartItem({
    item,
    onIncrease,
    onDecrease,
    onDelete,
}: Props) {

    return (

        <div
            className="
      border-b
      py-4
      "
        >

            <div
                className="
        flex
        justify-between
        "
            >

                <div>

                    <h4>
                        {item.name}
                    </h4>

                    <p
                        className="
            text-sm
            text-muted-foreground
            "
                    >
                        Rp{" "}
                        {item.price.toLocaleString()}
                    </p>

                </div>

                <button
                    onClick={
                        onDelete
                    }
                >

                    <Trash2
                        size={18}
                    />

                </button>

            </div>

            <div
                className="
        mt-3
        flex
        items-center
        justify-between
        "
            >

                <div
                    className="
          flex
          items-center
          gap-2
          "
                >

                    <button
                        onClick={
                            onDecrease
                        }
                    >
                        <Minus />
                    </button>

                    <span>
                        {item.quantity}
                    </span>

                    <button
                        onClick={
                            onIncrease
                        }
                    >
                        <Plus />
                    </button>

                </div>

                <span
                    className="
          font-semibold
          "
                >
                    Rp{" "}
                    {item.subtotal.toLocaleString()}
                </span>

            </div>

        </div>

    );

}