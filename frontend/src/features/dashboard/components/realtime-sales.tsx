import {
    Activity,
} from "lucide-react";

type Props = {

    amount: number;

    orders: number;

};

export default function RealtimeSales({
    amount,
    orders,
}: Props) {

    return (

        <div className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-emerald-500/20
      bg-emerald-500/5
      p-6
    ">

            <div className="
        absolute
        right-0
        top-0
        h-40
        w-40
        rounded-full
        bg-emerald-500/10
        blur-3xl
      " />

            <div className="
        flex
        items-center
        justify-between
      ">

                <div>

                    <div className="
            flex
            items-center
            gap-3
          ">

                        <div className="
              h-3
              w-3
              rounded-full
              bg-emerald-400
              animate-pulse
            " />

                        <span className="
              text-sm
              font-medium
              text-emerald-400
            ">
                            Live Sales
                        </span>

                    </div>

                    <h2 className="
            mt-5
            text-4xl
            font-bold
            text-white
          ">
                        $
                        {amount.toLocaleString()}
                    </h2>

                    <p className="
            mt-2
            text-zinc-400
          ">
                        {orders}
                        {" "}
                        realtime transactions
                    </p>

                </div>

                <div className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-emerald-500/10
        ">

                    <Activity
                        className="
              text-emerald-400
            "
                    />

                </div>

            </div>

        </div>

    );
}