import { create }
    from "zustand";

import type { Order } from "../types/order";

interface OrderStore {

    selectedOrder:
    Order | null;

    setSelectedOrder: (
        order: Order | null
    ) => void;

}

export const useOrderStore =
    create<OrderStore>(
        (set) => ({

            selectedOrder:
                null,

            setSelectedOrder:
                (order) =>
                    set({
                        selectedOrder:
                            order,
                    }),

        })
    );