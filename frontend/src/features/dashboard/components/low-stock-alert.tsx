import {
    AlertTriangle,
} from "lucide-react";

import type {
    LowStockItem,
} from "../types/dashboard";

type Props = {

    items: LowStockItem[];

};

export default function LowStockAlert({
    items,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-red-500/20
      bg-red-500/5
      p-6
    ">

            <div className="
        flex
        items-center
        gap-3
      ">

                <AlertTriangle
                    className="
            text-red-400
          "
                />

                <h3 className="
          text-lg
          font-semibold
          text-white
        ">
                    Low Stock Alert
                </h3>

            </div>

            <div className="
        mt-6
        space-y-4
      ">

                {items.map((item) => (

                    <div
                        key={item.id}
                        className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              p-4
            "
                    >

                        <div className="
              flex
              items-center
              justify-between
            ">

                            <div>

                                <p className="
                  font-medium
                  text-white
                ">
                                    {
                                        item.ingredient_name
                                    }
                                </p>

                                <p className="
                  mt-1
                  text-xs
                  text-zinc-500
                ">
                                    Minimum:
                                    {" "}
                                    {
                                        item.minimum_stock
                                    }
                                </p>

                            </div>

                            <div className="
                text-right
              ">

                                <p className="
                  text-lg
                  font-bold
                  text-red-400
                ">
                                    {
                                        item.current_stock
                                    }
                                </p>

                                <p className="
                  text-xs
                  text-zinc-500
                ">
                                    Remaining
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}