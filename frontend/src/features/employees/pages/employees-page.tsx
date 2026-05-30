import EmployeeTable
    from "../components/employee-table";

import {
    useEmployees,
} from "../hooks/use-employees";

export default function EmployeesPage() {

    const {
        data,
        isLoading,
    } = useEmployees();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div className="space-y-6">

            <div>
                <h1 className="
          text-3xl
          font-bold
        ">
                    Employees
                </h1>
            </div>

            <EmployeeTable
                employees={
                    data?.data ?? []
                }
            />

        </div>
    );
}