interface EmployeePerformanceProps {

    completedOrders: number;

    averageRating: number;

    attendanceRate: number;

    efficiencyScore: number;

}

export default function EmployeePerformance({

    completedOrders,

    averageRating,

    attendanceRate,

    efficiencyScore,

}: EmployeePerformanceProps) {

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
                Performance Overview
            </h2>

            <div className="
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
      ">

                <div className="rounded-2xl bg-zinc-800 p-4">
                    <p className="text-sm text-zinc-400">
                        Orders Completed
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {completedOrders}
                    </h3>
                </div>

                <div className="rounded-2xl bg-zinc-800 p-4">
                    <p className="text-sm text-zinc-400">
                        Rating
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {averageRating}
                    </h3>
                </div>

                <div className="rounded-2xl bg-zinc-800 p-4">
                    <p className="text-sm text-zinc-400">
                        Attendance
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {attendanceRate}%
                    </h3>
                </div>

                <div className="rounded-2xl bg-zinc-800 p-4">
                    <p className="text-sm text-zinc-400">
                        Efficiency
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {efficiencyScore}%
                    </h3>
                </div>

            </div>

        </div>

    );

}