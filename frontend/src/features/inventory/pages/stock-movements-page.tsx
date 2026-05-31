import StockMovementTable
    from "../components/stock-movement-table";

import {
    useStockMovements,
} from "../hooks/use-stock-movements";

import LoadingScreen
    from "@/components/common/loading-screen";

import ErrorState
    from "@/components/common/error-state";

export default function StockMovementsPage() {

    const {
        data,
        isLoading,
        error,
    } = useStockMovements();

    if (isLoading) {

        return (
            <LoadingScreen />
        );

    }

    if (error) {

        return (
            <ErrorState
                title="Failed to load stock movements"
            />
        );

    }

    return (

        <div className="space-y-6">

            <div>

                <h1
                    className="
          text-3xl
          font-bold
        "
                >
                    Stock Movements
                </h1>

                <p
                    className="
          mt-2
          text-zinc-500
        "
                >
                    Complete inventory movement history
                </p>

            </div>

            <StockMovementTable
                data={
                    data?.data ?? []
                }
            />

        </div>

    );

}