interface Props {

    currentStatus:
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "served"
    | "completed";

}

const steps = [

    "pending",

    "confirmed",

    "preparing",

    "ready",

    "served",

    "completed",

];

export default function DeliveryTracker({
    currentStatus,
}: Props) {

    const currentIndex =
        steps.indexOf(
            currentStatus
        );

    return (

        <div
            className="
      flex
      items-center
      justify-between
      gap-2
    "
        >

            {steps.map(
                (
                    step,
                    index
                ) => (

                    <div
                        key={step}
                        className="
            flex
            flex-1
            flex-col
            items-center
          "
                    >

                        <div

                            className={`
              h-8
              w-8
              rounded-full
              flex
              items-center
              justify-center
              text-white
              ${index <= currentIndex
                                    ? "bg-green-600"
                                    : "bg-zinc-300"
                                }
            `}
                        >

                            {index + 1}

                        </div>

                        <span
                            className="
              mt-2
              text-xs
              capitalize
            "
                        >
                            {step}
                        </span>

                    </div>

                )
            )}

        </div>

    );

}