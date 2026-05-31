import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios";

async function getStockMovements() {

    const response =
        await api.get(
            "/inventory/stock-movements"
        );

    return response.data;
}

export function useStockMovements() {

    return useQuery({

        queryKey: [
            "stock-movements",
        ],

        queryFn:
            getStockMovements,

    });

}