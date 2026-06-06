import type { CartItem } from "../types/cart-item";

export function calculateSubtotal(
    items: CartItem[]
): number {

    return items.reduce(
        (
            total,
            item
        ) => total + item.subtotal,
        0
    );

}

export function calculateTax(
    subtotal: number,
    taxPercent: number
): number {

    return (
        subtotal *
        (taxPercent / 100)
    );

}

export function calculateDiscount(
    subtotal: number,
    discountPercent: number
): number {

    return (
        subtotal *
        (discountPercent / 100)
    );

}

export function calculateGrandTotal(
    subtotal: number,
    tax: number,
    discount: number
): number {

    return (
        subtotal +
        tax -
        discount
    );

}