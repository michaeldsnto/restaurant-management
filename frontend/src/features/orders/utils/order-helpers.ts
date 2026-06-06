import type {
    OrderItem,
} from "../types/order-item";

export function calculateSubtotal(
    items: OrderItem[]
) {

    return items.reduce(

        (
            total,
            item
        ) => {

            return (
                total +
                item.subtotal
            );

        },

        0

    );

}

export function calculateTax(
    subtotal: number,
    percentage = 11
) {

    return (
        subtotal *
        percentage
    ) / 100;

}

export function calculateGrandTotal(

    subtotal: number,

    tax: number,

    discount: number

) {

    return (
        subtotal +
        tax -
        discount
    );

}