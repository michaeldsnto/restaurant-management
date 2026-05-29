type Staff = {

    name: string;

    role: string;

    completed_orders: number;

};

type Props = {

    staffs: Staff[];

};

export default function StaffPerformance({
    staffs,
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
                Staff Performance
            </h3>

            <div className="
        mt-6
        space-y-4
      ">

                {staffs.map(
                    (staff) => (

                        <div
                            key={staff.name}
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

                                <h4 className="
                  font-medium
                  text-white
                ">
                                    {staff.name}
                                </h4>

                                <p className="
                  mt-1
                  text-sm
                  text-zinc-500
                ">
                                    {staff.role}
                                </p>

                            </div>

                            <div className="
                text-right
              ">

                                <h4 className="
                  text-xl
                  font-bold
                  text-violet-400
                ">
                                    {
                                        staff.completed_orders
                                    }
                                </h4>

                                <p className="
                  text-xs
                  text-zinc-500
                ">
                                    completed orders
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>

    );
}