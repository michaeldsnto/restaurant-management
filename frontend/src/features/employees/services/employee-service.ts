import {

    createEmployeeApi,

    deleteEmployeeApi,

    getEmployeeApi,

    getEmployeesApi,

    updateEmployeeApi,

} from "../api/employee-api.ts";

export const employeeService = {

    getEmployees:
        getEmployeesApi,

    getEmployee:
        getEmployeeApi,

    createEmployee:
        createEmployeeApi,

    updateEmployee:
        updateEmployeeApi,

    deleteEmployee:
        deleteEmployeeApi,

};