import {
    useCartStore,
} from "../store/cart-store";

export function
    usePosCart() {

    const items =
        useCartStore(
            (
                state
            ) =>
                state.items
        );

    const addItem =
        useCartStore(
            (
                state
            ) =>
                state.addItem
        );

    const removeItem =
        useCartStore(
            (
                state
            ) =>
                state.removeItem
        );

    const updateQuantity =
        useCartStore(
            (
                state
            ) =>
                state.updateQuantity
        );

    const clearCart =
        useCartStore(
            (
                state
            ) =>
                state.clearCart
        );

    const subtotal =
        useCartStore(
            (
                state
            ) =>
                state.subtotal()
        );

    return {

        items,

        subtotal,

        addItem,

        removeItem,

        updateQuantity,

        clearCart,

    };

}