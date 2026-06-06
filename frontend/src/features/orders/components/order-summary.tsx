import type { Order } from "../types/order";

import {
    formatCurrency,
} from "../utils/order-formatters";

interface Props {
    order: Order;
}

export default function OrderSummary({
    order,
}: Props) {

    return (

        <div
            className="
      rounded-xl
      border
      p-5
      space-y-3
    "
        >

            <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                    {formatCurrency(
                        order.subtotal
                    )}
                </span>
            </div>

            <div className="flex justify-between">
                <span>Tax</span>

                <span>
                    {formatCurrency(
                        order.tax_amount
                    )}
                </span>
            </div>

            <div className="flex justify-between">
                <span>Discount</span>

                <span>
                    {formatCurrency(
                        order.discount_amount
                    )}
                </span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>

                <span>
                    {formatCurrency(
                        order.grand_total
                    )}
                </span>
            </div>

        </div>

    );
}