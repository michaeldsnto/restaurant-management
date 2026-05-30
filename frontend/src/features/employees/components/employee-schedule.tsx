interface Schedule {

    day: string;

    shift: string;

    startTime: string;

    endTime: string;

}

interface Props {

    schedules: Schedule[];

}

export default function EmployeeSchedule({
    schedules,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
    ">

            <h2 className="
        mb-6
        text-xl
        font-semibold
      ">
                Work Schedule
            </h2>

            <div className="space-y-4">

                {schedules.map(
                    (schedule) => (

                        <div
                            key={schedule.day}
                            className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-zinc-800
                p-4
              "
                        >

                            <div>

                                <h4 className="font-medium">
                                    {schedule.day}
                                </h4>

                                <p className="text-sm text-zinc-400">
                                    {schedule.shift}
                                </p>

                            </div>

                            <div className="text-right">

                                <p>
                                    {schedule.startTime}
                                </p>

                                <p>
                                    {schedule.endTime}
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>

    );

}