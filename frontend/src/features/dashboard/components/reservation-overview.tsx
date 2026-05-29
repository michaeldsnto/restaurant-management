type Props = {

    total: number;

    confirmed: number;

    pending: number;

};

export default function ReservationOverview({
    total,
    confirmed,
    pending,
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
                Reservation Overview
            </h3>

            <div className="
        mt-8
        grid
        gap-4
      ">

                <div className="
          rounded-2xl
          bg-zinc-950
          p-5
        ">

                    <p className="
            text-sm
            text-zinc-500
          ">
                        Total Reservations
                    </p>

                    <h2 className="
            mt-3
            text-3xl
            font-bold
            text-white
          ">
                        {total}
                    </h2>

                </div>

                <div className="
          grid
          grid-cols-2
          gap-4
        ">

                    <div className="
            rounded-2xl
            bg-emerald-500/10
            p-4
          ">

                        <p className="
              text-sm
              text-emerald-400
            ">
                            Confirmed
                        </p>

                        <h3 className="
              mt-2
              text-2xl
              font-bold
              text-white
            ">
                            {confirmed}
                        </h3>

                    </div>

                    <div className="
            rounded-2xl
            bg-yellow-500/10
            p-4
          ">

                        <p className="
              text-sm
              text-yellow-400
            ">
                            Pending
                        </p>

                        <h3 className="
              mt-2
              text-2xl
              font-bold
              text-white
            ">
                            {pending}
                        </h3>

                    </div>

                </div>

            </div>

        </div>

    );
}