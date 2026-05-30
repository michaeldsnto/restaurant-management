import EmployeeAttendance
    from "../components/employee-attendance";

import EmployeePerformance
    from "../components/employee-performance";

import EmployeePayrollCard
    from "../components/employee-payroll-card";

import EmployeeSchedule
    from "../components/employee-schedule";

export default function EmployeePerformancePage() {

    return (

        <div className="
      space-y-6
    ">

            <h1 className="
        text-3xl
        font-bold
      ">
                Employee Performance
            </h1>

            <EmployeePerformance
                completedOrders={534}
                averageRating={4.8}
                attendanceRate={97}
                efficiencyScore={92}
            />

            <EmployeeAttendance
                presentDays={28}
                absentDays={1}
                lateDays={2}
            />

            <EmployeePayrollCard
                basicSalary={1200}
                bonus={200}
                deduction={50}
            />

            <EmployeeSchedule
                schedules={[
                    {
                        day: "Monday",
                        shift: "Morning",
                        startTime: "08:00",
                        endTime: "16:00",
                    },
                    {
                        day: "Tuesday",
                        shift: "Evening",
                        startTime: "14:00",
                        endTime: "22:00",
                    },
                ]}
            />

        </div>

    );

}