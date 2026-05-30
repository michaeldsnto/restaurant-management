import { useParams } from "react-router-dom";

import EmployeeCard from "../components/employee-card";

import EmployeeDetails from "../components/employee-details";

import { useEmployee } from "../hooks/use-employee";

export default function EmployeeDetailsPage() {

    const { id } = useParams();

    const {
        data,
        isLoading,
    } = useEmployee(
        Number(id)
    );

    if (isLoading) {

        return (
            <div>
                Loading...
            </div>
        );

    }

    const employee =
        data?.data;

    if (!employee) {

        return (
            <div>
                Employee not found
            </div>
        );

    }

    return (

        <div className="
      space-y-6
    ">

            <EmployeeCard
                employee={employee}
            />

            <EmployeeDetails
                employee={employee}
            />

        </div>

    );

}