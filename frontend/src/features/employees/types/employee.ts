export type EmployeeRole =

    | "manager"
    | "cashier"
    | "waiter"
    | "kitchen_staff";

export type EmployeeStatus =

    | "active"
    | "inactive"
    | "suspended";

export interface Employee {

    id: number;

    full_name: string;

    email: string;

    phone: string;

    role: EmployeeRole;

    status: EmployeeStatus;

    salary: number;

    avatar?: string;

    hire_date: string;

    completed_orders?: number;

}

export interface EmployeeFormData {

    full_name: string;

    email: string;

    phone: string;

    password?: string;

    role: EmployeeRole;

    salary: number;

    status: EmployeeStatus;

}