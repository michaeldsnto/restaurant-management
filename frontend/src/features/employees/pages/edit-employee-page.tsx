import { useParams }
    from "react-router-dom";

import EmployeeForm
    from "../components/employee-form";

import {
    useEmployee,
} from "../hooks/use-employee";

import {
    useUpdateEmployee,
} from "../hooks/use-update-employee";

export default function EditEmployeePage() {

    const { id } =
        useParams();

    const {
        data,
    } = useEmployee(
        Number(id)
    );

    const mutation =
        useUpdateEmployee();

    if (!data) {
        return null;
    }

    return (
        <div className="
      max-w-3xl
      space-y-6
    ">
            <h1 className="
        text-3xl
        font-bold
      ">
                Edit Employee
            </h1>

            <EmployeeForm
                defaultValues={
                    data.data
                }
                onSubmit={(formData) =>
                    mutation.mutate({
                        id: Number(id),
                        data: formData,
                    })
                }
            />
        </div>
    );
}