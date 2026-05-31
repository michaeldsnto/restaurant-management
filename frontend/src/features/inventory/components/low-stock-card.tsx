interface Props {

    total: number;

}

export default function LowStockCard({
    total,
}: Props) {

    return (

        <div
            className="
      rounded-3xl
      border
      border-yellow-500/20
      bg-yellow-500/10
      p-5
    "
        >

            <p
                className="
        text-yellow-400
      "
            >
                Low Stock Items
            </p>

            <h2
                className="
        mt-2
        text-4xl
        font-bold
      "
            >
                {total}
            </h2>

        </div>

    );

}