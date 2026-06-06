import type {
    OrderItem,
} from "../types/order-item";

import {
    formatCurrency,
} from "../utils/order-formatters";

interface Props {
    items: OrderItem[];
}

export default function OrderItems({
    items,
}: Props) {
    return (
        <div className="space-y-3">

            {items.map((item) => (

                <div
                    key={item.id}
                    className="
          flex
          justify-between
          border-b
          pb-2
        "
                >

                    <div>

                        <p className="font-medium">
                            {item.menu_item_name}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                        </p>

                    </div>

                    <p>
                        {formatCurrency(
                            item.subtotal
                        )}
                    </p>

                </div>

            ))}

        </div>
    );
}