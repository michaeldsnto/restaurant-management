export function getEmployeeRoleLabel(
    role: string
) {

    switch (role) {

        case "manager":
            return "Manager";

        case "cashier":
            return "Cashier";

        case "waiter":
            return "Waiter";

        case "kitchen_staff":
            return "Kitchen Staff";

        default:
            return role;
    }
}

export function getEmployeeStatusColor(
    status: string
) {

    switch (status) {

        case "active":
            return "bg-emerald-500/10 text-emerald-400";

        case "inactive":
            return "bg-zinc-500/10 text-zinc-400";

        case "suspended":
            return "bg-red-500/10 text-red-400";

        default:
            return "bg-zinc-500/10 text-zinc-400";
    }
}