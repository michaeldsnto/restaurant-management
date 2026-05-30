import { z }
    from "zod";

export const employeeSchema =
    z.object({

        full_name:
            z.string()
                .min(3),

        email:
            z.string()
                .email(),

        phone:
            z.string()
                .min(10),

        password:
            z.string()
                .min(8)
                .optional(),

        role:
            z.enum([
                "manager",
                "cashier",
                "waiter",
                "kitchen_staff",
            ]),

        salary:
            z.number(),

        status:
            z.enum([
                "active",
                "inactive",
                "suspended",
            ]),

    });

export type EmployeeSchema =
    z.infer<
        typeof employeeSchema
    >;