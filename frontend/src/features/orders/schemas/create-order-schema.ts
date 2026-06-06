import { z } from "zod";

export const createOrderSchema =
    z.object({

        customer_name:
            z.string()
                .optional(),

        customer_phone:
            z.string()
                .optional(),

        table_number:
            z.string()
                .optional(),

        order_type:
            z.enum([
                "dine_in",
                "takeaway",
                "delivery",
                "qr_order",
            ]),

        notes:
            z.string()
                .optional(),

        items:
            z.array(

                z.object({

                    menu_item_id:
                        z.number(),

                    quantity:
                        z.number()
                            .min(1),

                    notes:
                        z.string()
                            .optional(),

                    variants:
                        z.array(
                            z.string()
                        )
                            .optional(),

                    modifiers:
                        z.array(
                            z.string()
                        )
                            .optional(),

                })

            )
                .min(1),

    });

export type CreateOrderFormData =
    z.infer<
        typeof createOrderSchema
    >;