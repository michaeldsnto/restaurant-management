import { z } from "zod";

export const supplierSchema =
    z.object({

        code:
            z.string().min(2),

        name:
            z.string().min(2),

        contact_person:
            z.string().min(2),

        email:
            z.string().email(),

        phone:
            z.string().min(8),

        address:
            z.string().min(5),

    });

export type SupplierSchema =
    z.infer<
        typeof supplierSchema
    >;