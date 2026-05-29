type Props = {

    preparing: number;

    ready: number;

    served: number;

};

export default function KitchenStatus({
    preparing,
    ready,
    served,
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
                Kitchen Status
            </h3>

            <div className="
        mt-6
        space-y-4
      ">

                <div className="
          flex
          items-center
          justify-between
        ">

                    <span className="
            text-yellow-400
          ">
                        Preparing
                    </span>

                    <span className="
            font-bold
            text-white
          ">
                        {preparing}
                    </span>

                </div>

                <div className="
          flex
          items-center
          justify-between
        ">

                    <span className="
            text-blue-400
          ">
                        Ready
                    </span>

                    <span className="
            font-bold
            text-white
          ">
                        {ready}
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
                        Served
                    </span>

                    <span className="
            font-bold
            text-white
          ">
                        {served}
                    </span>

                </div>

            </div>

        </div>

    );
}