import { useMemo } from "react";

import {
    useKitchenOrders,
} from "./use-kitchen-orders";

export function useKitchenSummary() {

    const { data } =
        useKitchenOrders();

    const summary =
        useMemo(() => {

            const orders =
                data?.data ?? [];

            return {

                pending:
                    orders.filter(
                        (o: any) =>
                            o.status ===
                            "pending"
                    ).length,

                preparing:
                    orders.filter(
                        (o: any) =>
                            o.status ===
                            "preparing"
                    ).length,

                ready:
                    orders.filter(
                        (o: any) =>
                            o.status ===
                            "ready"
                    ).length,

                served:
                    orders.filter(
                        (o: any) =>
                            o.status ===
                            "served"
                    ).length,

                total_orders:
                    orders.length,

            };

        }, [data]);

    return summary;

}