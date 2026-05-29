export function calculateGrowthPercentage(
    current: number,
    previous: number
) {

    if (previous === 0) {
        return 100;
    }

    return Number(
        (
            (
                (current - previous)
                / previous
            ) * 100
        ).toFixed(1)
    );
}

export function getOrderStatusColor(
    status: string
) {

    switch (status) {

        case "pending":
            return "text-yellow-400";

        case "preparing":
            return "text-blue-400";

        case "ready":
            return "text-violet-400";

        case "served":
            return "text-emerald-400";

        case "cancelled":
            return "text-red-400";

        default:
            return "text-zinc-400";
    }
}

export function getRevenueTrendColor(
    value: number
) {

    if (value > 0) {
        return "text-emerald-400";
    }

    if (value < 0) {
        return "text-red-400";
    }

    return "text-zinc-400";
}

export function getSalesPerformanceLevel(
    revenue: number
) {

    if (revenue >= 100000) {
        return "Excellent";
    }

    if (revenue >= 50000) {
        return "Good";
    }

    if (revenue >= 20000) {
        return "Average";
    }

    return "Low";
}

export function generateChartData(
    values: number[]
) {

    return values.map(
        (
            value,
            index
        ) => ({

            label:
                [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                ][index],

            value,

        })
    );
}