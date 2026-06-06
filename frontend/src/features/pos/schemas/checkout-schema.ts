import { z }
    from "zod";

export const checkoutSchema =
    z.object({

        order_type:
            z.enum([
                "dine_in",
                "takeaway",
                "delivery",
            ]),

        payment_method:
            z.enum([
                "cash",
                "credit_card",
                "debit_card",
                "bank_transfer",
                "qris",
                "ewallet",
            ]),

        subtotal:
            z.number(),

        tax_amount:
            z.number(),

        discount_amount:
            z.number(),

        grand_total:
            z.number(),

        customer_id:
            z.number()
                .optional(),

        table_id:
            z.number()
                .optional(),

        notes:
            z.string()
                .optional(),

    });

export type CheckoutSchema =
    z.infer<
        typeof checkoutSchema
    >;