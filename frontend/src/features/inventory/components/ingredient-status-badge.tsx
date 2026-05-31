interface Props {

    status: string;

}

export default function IngredientStatusBadge({
    status,
}: Props) {

    const styles = {

        in_stock:
            "bg-emerald-500/10 text-emerald-400",

        low_stock:
            "bg-yellow-500/10 text-yellow-400",

        out_of_stock:
            "bg-red-500/10 text-red-400",
    };

    return (

        <span
            className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-medium
      ${styles[
                status as keyof typeof styles
                ]}
    `}
        >

            {status.replaceAll(
                "_",
                " "
            )}

        </span>

    );
}