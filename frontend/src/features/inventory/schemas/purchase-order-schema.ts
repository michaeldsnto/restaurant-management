import { z } from "zod";

export const purchaseOrderSchema =
    z.object({

        supplier_id:
            z.number(),

        expected_date:
            z.string(),

    });

export type PurchaseOrderSchema =
    z.infer<
        typeof purchaseOrderSchema
    >;