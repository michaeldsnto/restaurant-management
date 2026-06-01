import LoadingScreen
    from "@/components/common/loading-screen";

import ErrorState
    from "@/components/common/error-state";

import KitchenBoard
    from "../components/kitchen-board";

import KitchenHeader
    from "../components/kitchen-header";

import KitchenSummary
    from "../components/kitchen-summary";

import {
    useKitchenOrders,
} from "../hooks/use-kitchen-orders";

import {
    useKitchenRealtime,
} from "../hooks/use-kitchen-realtime";


export default function KitchenPage() {

    useKitchenRealtime();
    const {

        data,

        isLoading,

        error,

    } =
        useKitchenOrders();

    if (isLoading) {

        return (
            <LoadingScreen />
        );

    }

    if (error) {

        return (

            <ErrorState
                title="Failed to load kitchen orders"
            />

        );

    }

    return (

        <div
            className="
      space-y-8
    "
        >

            <KitchenHeader />

            <KitchenSummary />

            <KitchenBoard
                orders={
                    data?.data ?? []
                }
            />

        </div>

    );

}