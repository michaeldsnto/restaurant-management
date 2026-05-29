import {
    BarChart3,
} from "lucide-react";

export default function SalesChart() {

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

                <div>

                    <h3 className="
            text-lg
            font-semibold
            text-white
          ">
                        Sales Analytics
                    </h3>

                    <p className="
            mt-1
            text-sm
            text-zinc-500
          ">
                        Weekly revenue performance
                    </p>

                </div>

                <div className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-violet-600/10
        ">

                    <BarChart3
                        className="
              text-violet-400
            "
                    />

                </div>

            </div>

            <div className="
        mt-10
        flex
        h-72
        items-end
        gap-4
      ">

                {[40, 65, 80, 55, 90, 75, 100]
                    .map((value, index) => (

                        <div
                            key={index}
                            className="
                flex
                flex-1
                flex-col
                items-center
              "
                        >

                            <div
                                style={{
                                    height: `${value}%`,
                                }}
                                className="
                  w-full
                  rounded-t-2xl
                  bg-gradient-to-t
                  from-violet-600
                  to-fuchsia-500
                "
                            />

                            <span className="
                mt-3
                text-xs
                text-zinc-500
              ">
                                {
                                    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]
                                }
                            </span>

                        </div>

                    ))}

            </div>

        </div>

    );
}