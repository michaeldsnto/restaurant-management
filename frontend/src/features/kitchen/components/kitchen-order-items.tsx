import type {
    KitchenOrderItem,
} from "../types/kitchen-order";

interface Props {

    items:
    KitchenOrderItem[];

}

export default function KitchenOrderItems({
    items,
}: Props) {

    return (

        <div className="space-y-2">

            {items.map(
                (item) => (

                    <div
                        key={item.id}
                        className="
            rounded-xl
            bg-zinc-800
            p-2
          "
                    >

                        <div className="
              flex
              justify-between
            ">

                            <span>
                                {item.menu_name}
                            </span>

                            <strong>
                                x
                                {
                                    item.quantity
                                }
                            </strong>

                        </div>

                        {item.notes && (

                            <p className="
                mt-1
                text-xs
                text-zinc-400
              ">
                                {item.notes}
                            </p>

                        )}

                    </div>

                )
            )}

        </div>

    );

}