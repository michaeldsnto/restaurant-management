import { create }
    from "zustand";

import type {
    CartItem,
} from "../types/cart-item";

interface CartStore {

    items: CartItem[];

    addItem: (
        item: CartItem
    ) => void;

    removeItem: (
        id: number
    ) => void;

    updateQuantity: (
        id: number,
        quantity: number
    ) => void;

    clearCart: () => void;

    subtotal: () => number;

}

export const useCartStore =
    create<CartStore>(
        (
            set,
            get
        ) => ({

            items: [],

            addItem: (
                item
            ) => {

                const existing =
                    get()
                        .items
                        .find(
                            (
                                cartItem
                            ) =>
                                cartItem.id ===
                                item.id
                        );

                if (
                    existing
                ) {

                    set({

                        items:
                            get()
                                .items
                                .map(
                                    (
                                        cartItem
                                    ) =>

                                        cartItem.id ===
                                            item.id

                                            ? {

                                                ...cartItem,

                                                quantity:
                                                    cartItem.quantity +
                                                    1,

                                                subtotal:
                                                    (
                                                        cartItem.quantity +
                                                        1
                                                    ) *
                                                    cartItem.price,

                                            }

                                            : cartItem
                                ),

                    });

                    return;

                }

                set({

                    items: [
                        ...get().items,
                        item,
                    ],

                });

            },

            removeItem:
                (id) =>

                    set({

                        items:
                            get()
                                .items
                                .filter(
                                    (
                                        item
                                    ) =>
                                        item.id !==
                                        id
                                ),

                    }),

            updateQuantity:
                (
                    id,
                    quantity
                ) =>

                    set({

                        items:
                            get()
                                .items
                                .map(
                                    (
                                        item
                                    ) =>

                                        item.id ===
                                            id

                                            ? {

                                                ...item,

                                                quantity,

                                                subtotal:
                                                    quantity *
                                                    item.price,

                                            }

                                            : item
                                ),

                    }),

            clearCart: () =>

                set({

                    items: [],

                }),

            subtotal: () =>

                get()
                    .items
                    .reduce(

                        (
                            total,
                            item
                        ) =>

                            total +
                            item.subtotal,

                        0
                    ),

        })
    );