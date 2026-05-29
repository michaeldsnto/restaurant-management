import {
    DollarSign,
} from "lucide-react";

type Props = {

    title: string;

    amount: number;

    growth?: string;

};

export default function RevenueCard({
    title,
    amount,
    growth,
}: Props) {

    return (

        <div className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-br
      from-zinc-900
      to-zinc-950
      p-6
    ">

            <div className="
        absolute
        right-0
        top-0
        h-32
        w-32
        rounded-full
        bg-violet-600/10
        blur-3xl
      " />

            <div className="
        flex
        items-start
        justify-between
      ">

                <div>

                    <p className="
            text-sm
            text-zinc-400
          ">
                        {title}
                    </p>

                    <h2 className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-white
          ">
                        $
                        {amount.toLocaleString()}
                    </h2>

                    {growth && (

                        <p className="
              mt-2
              text-sm
              text-emerald-400
            ">
                            {growth}
                        </p>

                    )}

                </div>

                <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-violet-600/15
        ">

                    <DollarSign
                        className="
              text-violet-400
            "
                    />

                </div>

            </div>

        </div>

    );
}