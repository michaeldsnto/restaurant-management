type Props = {

    total: number;

    pending: number;

    completed: number;

};

export default function OrderSummary({
    total,
    pending,
    completed,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      p-6
    ">

            <h3 className="
        text-lg
        font-semibold
        text-white
      ">
                Order Summary
            </h3>

            <div className="
        mt-6
        space-y-5
      ">

                <div className="
          flex
          items-center
          justify-between
        ">

                    <span className="
            text-zinc-400
          ">
                        Total Orders
                    </span>

                    <span className="
            font-semibold
            text-white
          ">
                        {total}
                    </span>

                </div>

                <div className="
          flex
          items-center
          justify-between
        ">

                    <span className="
            text-yellow-400
          ">
                        Pending
                    </span>

                    <span className="
            font-semibold
            text-white
          ">
                        {pending}
                    </span>

                </div>

                <div className="
          flex
          items-center
          justify-between
        ">

                    <span className="
            text-emerald-400
          ">
                        Completed
                    </span>

                    <span className="
            font-semibold
            text-white
          ">
                        {completed}
                    </span>

                </div>

            </div>

        </div>

    );
}