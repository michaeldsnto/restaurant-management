interface Props {

    totalItems: number;

    totalValue: number;

    lowStock: number;

    outOfStock: number;

}

export default function InventorySummary({
    totalItems,
    totalValue,
    lowStock,
    outOfStock,
}: Props) {

    return (

        <div className="
      grid
      gap-5
      md:grid-cols-2
      xl:grid-cols-4
    ">

            <div className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
      ">
                <p className="text-zinc-400">
                    Total Items
                </p>

                <h2 className="
          mt-2
          text-3xl
          font-bold
        ">
                    {totalItems}
                </h2>
            </div>

            <div className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
      ">
                <p className="text-zinc-400">
                    Inventory Value
                </p>

                <h2 className="
          mt-2
          text-3xl
          font-bold
        ">
                    ${totalValue.toFixed(2)}
                </h2>
            </div>

            <div className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
      ">
                <p className="text-zinc-400">
                    Low Stock
                </p>

                <h2 className="
          mt-2
          text-3xl
          font-bold
          text-yellow-400
        ">
                    {lowStock}
                </h2>
            </div>

            <div className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
      ">
                <p className="text-zinc-400">
                    Out Of Stock
                </p>

                <h2 className="
          mt-2
          text-3xl
          font-bold
          text-red-400
        ">
                    {outOfStock}
                </h2>
            </div>

        </div>

    );

}