import type {
    LiveOrder,
} from "../types/dashboard";

type Props = {

    orders: LiveOrder[];

};

export default function LiveOrders({
    orders,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      p-6
    ">

            <div className="
        flex
        items-center
        justify-between
      ">

                <h3 className="
          text-lg
          font-semibold
          text-white
        ">
                    Live Orders
                </h3>

                <div className="
          h-3
          w-3
          rounded-full
          bg-emerald-500
          animate-pulse
        " />

            </div>

            <div className="
        mt-6
        space-y-4
      ">

                {orders.map(
                    (order) => (

                        <div
                            key={order.id}
                            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                p-4
              "
                        >

                            <div>

                                <p className="
                  font-medium
                  text-white
                ">
                                    {
                                        order.customer_name
                                    }
                                </p>

                                <p className="
                  mt-1
                  text-sm
                  text-zinc-500
                ">
                                    Order #
                                    {order.id}
                                </p>

                            </div>

                            <div className="
                text-right
              ">

                                <p className="
                  font-semibold
                  text-white
                ">
                                    $
                                    {order.total}
                                </p>

                                <p className="
                  mt-1
                  text-xs
                  text-yellow-400
                ">
                                    {order.status}
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>

    );
}