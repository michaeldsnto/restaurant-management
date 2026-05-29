export function formatCurrency(
    amount: number
) {

    return new Intl.NumberFormat(
        "en-US",
        {

            style: "currency",

            currency: "USD",

            maximumFractionDigits: 0,

        }
    ).format(amount);
}

export function formatCompactNumber(
    value: number
) {

    return new Intl.NumberFormat(
        "en-US",
        {

            notation: "compact",

            compactDisplay:
                "short",

        }
    ).format(value);
}

export function formatPercentage(
    value: number
) {

    return `${value.toFixed(1)}%`;
}

export function formatSalesDate(
    date: string
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {

            month: "short",

            day: "numeric",

            year: "numeric",

        }
    ).format(
        new Date(date)
    );
}

export function formatOrderTime(
    date: string
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {

            hour: "2-digit",

            minute: "2-digit",

        }
    ).format(
        new Date(date)
    );
}