export function formatSalary(
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

export function formatHireDate(
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