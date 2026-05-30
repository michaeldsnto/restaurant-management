import type {
    Employee,
} from "../types/employee";

import EmployeeStatusBadge
    from "./employee-status-badge";

interface Props {
    employees: Employee[];
}

export default function EmployeeTable({
    employees,
}: Props) {
    return (
        <div className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
    ">
            <table className="w-full">
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-4 text-left">
                            Name
                        </th>

                        <th className="p-4 text-left">
                            Role
                        </th>

                        <th className="p-4 text-left">
                            Email
                        </th>

                        <th className="p-4 text-left">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(
                        (employee) => (
                            <tr
                                key={employee.id}
                                className="
                  border-t
                  border-zinc-800
                "
                            >
                                <td className="p-4">
                                    {
                                        employee.full_name
                                    }
                                </td>

                                <td className="p-4">
                                    {employee.role}
                                </td>

                                <td className="p-4">
                                    {employee.email}
                                </td>

                                <td className="p-4">
                                    <EmployeeStatusBadge
                                        status={
                                            employee.status
                                        }
                                    />
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}