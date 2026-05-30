import EmployeeForm
    from "../components/employee-form";

import {
    useCreateEmployee,
} from "../hooks/use-create-employee";

export default function CreateEmployeePage() {

    const mutation =
        useCreateEmployee();

    return (
        <div className="
      max-w-3xl
      space-y-6
    ">
            <h1 className="
        text-3xl
        font-bold
      ">
                Create Employee
            </h1>

            <EmployeeForm
                onSubmit={(data) =>
                    mutation.mutate(data)
                }
            />
        </div>
    );
}