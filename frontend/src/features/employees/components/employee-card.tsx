import EmployeeAvatar from "./employee-avatar";

import EmployeeStatusBadge from "./employee-status-badge";

import type { Employee } from "../types/employee";

interface Props {

    employee: Employee;

}

export default function EmployeeCard({
    employee,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
    ">

            <div className="
        flex
        items-center
        gap-4
      ">

                <EmployeeAvatar
                    name={employee.full_name}
                    avatar={employee.avatar}
                    size="lg"
                />

                <div>

                    <h3 className="
            text-lg
            font-semibold
            text-white
          ">
                        {employee.full_name}
                    </h3>

                    <p className="
            text-sm
            text-zinc-400
          ">
                        {employee.role}
                    </p>

                </div>

            </div>

            <div className="
        mt-6
      ">

                <EmployeeStatusBadge
                    status={employee.status}
                />

            </div>

        </div>

    );

}