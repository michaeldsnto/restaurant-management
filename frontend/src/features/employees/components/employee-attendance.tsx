interface AttendanceProps {

    presentDays: number;

    absentDays: number;

    lateDays: number;

}

export default function EmployeeAttendance({

    presentDays,

    absentDays,

    lateDays,

}: AttendanceProps) {

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
                Attendance Summary
            </h2>

            <div className="
        grid
        gap-4
        md:grid-cols-3
      ">

                <div className="
          rounded-2xl
          bg-emerald-500/10
          p-4
        ">

                    <p className="text-emerald-400">
                        Present
                    </p>

                    <h3 className="
            mt-2
            text-3xl
            font-bold
          ">
                        {presentDays}
                    </h3>

                </div>

                <div className="
          rounded-2xl
          bg-red-500/10
          p-4
        ">

                    <p className="text-red-400">
                        Absent
                    </p>

                    <h3 className="
            mt-2
            text-3xl
            font-bold
          ">
                        {absentDays}
                    </h3>

                </div>

                <div className="
          rounded-2xl
          bg-yellow-500/10
          p-4
        ">

                    <p className="text-yellow-400">
                        Late
                    </p>

                    <h3 className="
            mt-2
            text-3xl
            font-bold
          ">
                        {lateDays}
                    </h3>

                </div>

            </div>

        </div>

    );

}