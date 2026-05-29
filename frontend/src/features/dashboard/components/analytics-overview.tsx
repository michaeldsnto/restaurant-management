import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    ShoppingCart,
    Users,
} from "lucide-react";

type Props = {

    revenue: number;

    orders: number;

    customers: number;

    growth: number;

};

export default function AnalyticsOverview({
    revenue,
    orders,
    customers,
    growth,
}: Props) {

    const positive =
        growth >= 0;

    return (

        <div className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-4
    ">

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

                    <div>

                        <p className="
              text-sm
              text-zinc-500
            ">
                            Revenue
                        </p>

                        <h3 className="
              mt-3
              text-3xl
              font-bold
              text-white
            ">
                            $
                            {revenue.toLocaleString()}
                        </h3>

                    </div>

                    <div className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-emerald-500/10
          ">

                        <DollarSign
                            className="
                text-emerald-400
              "
                        />

                    </div>

                </div>

            </div>

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

                    <div>

                        <p className="
              text-sm
              text-zinc-500
            ">
                            Orders
                        </p>

                        <h3 className="
              mt-3
              text-3xl
              font-bold
              text-white
            ">
                            {orders}
                        </h3>

                    </div>

                    <div className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-500/10
          ">

                        <ShoppingCart
                            className="
                text-violet-400
              "
                        />

                    </div>

                </div>

            </div>

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

                    <div>

                        <p className="
              text-sm
              text-zinc-500
            ">
                            Customers
                        </p>

                        <h3 className="
              mt-3
              text-3xl
              font-bold
              text-white
            ">
                            {customers}
                        </h3>

                    </div>

                    <div className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/10
          ">

                        <Users
                            className="
                text-blue-400
              "
                        />

                    </div>

                </div>

            </div>

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

                    <div>

                        <p className="
              text-sm
              text-zinc-500
            ">
                            Growth
                        </p>

                        <h3 className={`
              mt-3
              text-3xl
              font-bold

              ${positive
                                ? "text-emerald-400"
                                : "text-red-400"
                            }
            `}>
                            {growth}%
                        </h3>

                    </div>

                    <div className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl

            ${positive
                            ? "bg-emerald-500/10"
                            : "bg-red-500/10"
                        }
          `}>

                        {positive ? (

                            <TrendingUp
                                className="
                  text-emerald-400
                "
                            />

                        ) : (

                            <TrendingDown
                                className="
                  text-red-400
                "
                            />

                        )}

                    </div>

                </div>

            </div>

        </div>

    );
}