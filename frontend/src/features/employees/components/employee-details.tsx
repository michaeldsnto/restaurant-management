import type { Employee } from "../types/employee";

interface Props {

    employee: Employee;

}

export default function EmployeeDetails({
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

            <h2 className="
        mb-6
        text-xl
        font-semibold
      ">
                Employee Information
            </h2>

            <div className="
        grid
        gap-5
        md:grid-cols-2
      ">

                <div>

                    <p className="
            text-sm
            text-zinc-500
          ">
                        Full Name
                    </p>

                    <p className="
            mt-1
            font-medium
          ">
                        {employee.full_name}
                    </p>

                </div>

                <div>

                    <p className="
            text-sm
            text-zinc-500
          ">
                        Email
                    </p>

                    <p className="
            mt-1
            font-medium
          ">
                        {employee.email}
                    </p>

                </div>

                <div>

                    <p className="
            text-sm
            text-zinc-500
          ">
                        Phone
                    </p>

                    <p className="
            mt-1
            font-medium
          ">
                        {employee.phone}
                    </p>

                </div>

                <div>

                    <p className="
            text-sm
            text-zinc-500
          ">
                        Role
                    </p>

                    <p className="
            mt-1
            font-medium
          ">
                        {employee.role}
                    </p>

                </div>

            </div>

        </div>

    );

}